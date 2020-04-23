import React from 'react'
import styled from 'styled-components'
import { Button as ButtonStyles} from './Buttons'


const Div = styled.div`
  font-size: 16px;
  border-bottom: none;

  @media (min-width: 769px) {
    border-right: none;
    border-bottom: 1px solid #721bcc;
  }
`

const getFocus = () => window.document.getElementById('landingId').focus()

export const LandingInput  = () => (
  <Div as={ButtonStyles} role='button' onClick={() => getFocus()} >
     <label htmlFor='landingid'>
          <div>Landing pad Id</div>
          <input autoFocus type='text' id='landingId' placeholder="Landing pad id" maxLength="15"></input>
        </label>
  </Div>
)