import React from 'react'
import styled from 'styled-components'
import { Button as ButtonStyles} from './Buttons'
import PropTypes from 'prop-types';


const Div = styled.div`
  font-size: 16px;
`

const getFocus = () => window.document.getElementById('landingId').focus()


export const LandingInput  = ({ setCurrentId }) => (
  <Div as={ButtonStyles} role='button' onClick={() => getFocus()} >
     <label htmlFor='landingid'>
          <div>Landing pad Id</div>
          <input autoFocus type='text' id='landingId' placeholder="Landing pad id" maxLength="15"></input>
        </label>
  </Div>
)

LandingInput.propTypes = {
  setCurrentId: PropTypes.func.isRequired
}