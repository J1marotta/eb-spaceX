import React from "react"

import {Controller} from '../ControlConsole'
import { render, fireEvent} from './TestWrapper'
import initialState, {initialMeta}  from '../../../redux/initialState'
import store from '../../../redux/index'

describe('Control Console', () => {
  it('displays the initialState', () => {
      const {  getByTestId } = render(<Controller /> )

      const expected = {state: initialState, meta: initialMeta}
      const state = getByTestId('code')

      expect(JSON.parse(state.innerHTML)).toEqual(expected)
  })

  it('displays different information if capsules is clicked', () => {
    const { getByText,getByTestId } = render(<Controller /> )

      const state = getByTestId('code')
      fireEvent.click(getByText('Capsules'))

      const expected = []
      expect(JSON.parse(state.innerHTML)).toEqual(expected)
  })
})