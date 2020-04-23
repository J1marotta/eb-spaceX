import React from 'react'
import styled from 'styled-components'

export const Button = styled.button`
  border: 1px solid #721bcc;
  background-color: #cc1b77;
  min-height: 100%;
  width: 100%;
  font-size: 18px;
  cursor: pointer;
  
  :hover {
    background-color: #fc3360;
  }
  :active {
    background-color: #860a26;
  }
`



export const GetCapsulesButton = () => (
  <Button onclick={() => {}}>
    Get Capsules
  </Button>
)


export const LandingButton = () => (
  <Button onclick={() => {}}>
    Get Landing Pad
  </Button>
)