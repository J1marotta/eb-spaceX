import React from 'react'
import styled from 'styled-components'
import { Button as ButtonStyles } from './Buttons'
import store from '../../redux/index'
import PropTypes from 'prop-types'
import {Actions} from '../../redux/Actions'

const Div = styled.div`
  font-size: 16px;
`

const getFocus = () => window.document.getElementById('landingId').focus()

export const LandingInput = ({ landingId }) => {
  const { dispatch } = store

  return (
    <Div as={ButtonStyles} role='button' onClick={() => getFocus()}>
      <label htmlFor='landingid'>
        <div>Landing pad Id</div>
        <input
          autoFocus
          type='text'
          id='landingId'
          placeholder='Alpha-zero-1'
          maxLength='15'
          value={landingId}
          onChange={({ target: { value } }) =>
            dispatch({
              type: Actions.SET('landingId'),
              payload: { time: Date.now(), landingId: value },
            })
          }
        ></input>
      </label>
    </Div>
  )
}

LandingInput.propTypes = {
  landingId: PropTypes.string.isRequired,
}
