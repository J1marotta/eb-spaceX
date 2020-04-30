import React from "react";

import { Controller } from "../ControlConsole";
import { render, fireEvent, cleanup, waitFor, act } from "./TestWrapper";
import initialState, { initialMeta } from "../../../redux/initialState";
import axiosMock from "axios";
import "@testing-library/jest-dom/extend-expect";
import store from "../../../redux";
import { Actions } from "../../../redux/Actions";
import { baseURL } from "../../../redux/FX";

jest.mock("axios");

const dummyData = {
  capsule_serial: "C112",
  capsule_id: "dragon1",
  status: "active",
  original_launch: "2017-02-19T14:39:00.000Z",
  original_launch_unix: 1487515140,
  missions: [
    {
      name: "CRS-10",
      flight: 36,
    },
  ],
  landings: 1,
  type: "Dragon 1.1",
  details: null,
  reuse_count: 0,
};

// allow us to mock axios requests
beforeEach(() => axiosMock.request.mockResolvedValue({ data: dummyData }));

afterEach(cleanup);

describe("Control Console", () => {
  it("displays the initialState", () => {
    const { getByTestId } = render(<Controller />);

    const expected = { state: initialState, meta: initialMeta };
    const state = getByTestId("code");

    expect(JSON.parse(state.innerHTML)).toEqual(expected);
  });

  it("displays different information if capsules is clicked", async () => {
    const { getByText, getByTestId } = render(<Controller />);

    const expected = {
      meta: { ...initialMeta, loading: true },
      state: { ...initialState, capsules: dummyData },
    };
    fireEvent.click(getByText("Capsules"));

    expect(
      await waitFor(() => JSON.parse(getByTestId("code").innerHTML))
    ).toEqual(expected);
    expect(axiosMock.request).toHaveBeenCalledTimes(1);
  });

  it("displays a loading spinner", async () => {
    await act(async () => {
      const { getByTestId, getByText } = render(<Controller />);
      fireEvent.click(getByText("Capsules"));
      await waitFor(() => getByTestId("spinner"));
    });
  });

  it("uses the value of input in the landing request", async () => {
    const { getByText, getByLabelText } = render(<Controller />);

    const input = getByLabelText("Landing pad Id");

    store.dispatch({
      type: Actions.SET("landingId"),
      payload: { time: Date.now(), landingId: "123" },
    });

    fireEvent.click(getByText("Landing Pad"));

    expect(axiosMock.request).toHaveBeenCalledWith({
      url: `${baseURL}/landpads/123`,
      crossDomain: true,
      method: "get",
    });
  });

  it("Shows an error if it can not find the landingPad", async () => {
    await act(async () => {
      const { getByText, getByLabelText } = render(<Controller />);

      const input = getByLabelText("Landing pad Id");

      store.dispatch({
        type: Actions.SET("landingId"),
        payload: {
          time: Date.now(),
          landingId: "RANDOM-Garbage-value-12324927",
        },
      });

      fireEvent.click(getByText("Landing Pad"));

      await waitFor(() =>
        getByText(
          `I'm Sorry we couldn't find that landing pad, try a different Id.`
        )
      );
    });
  });
});
