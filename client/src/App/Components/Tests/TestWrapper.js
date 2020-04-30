import React from "react";
import { Provider } from "react-redux";
import store from "../../../redux/index";
import { render } from "@testing-library/react";

const WrappedWithStore = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

const customRender = (ui, options) =>
  render(ui, { wrapper: WrappedWithStore, ...options });

export * from "@testing-library/react";

export { customRender as render };
