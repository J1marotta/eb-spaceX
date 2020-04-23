import React from 'react'
import styled from 'styled-components'
import {bordersCss} from './ControlConsole'

export const Button = styled.button`
  border-left: 1px solid black;
  border-right: 1px solid black;
  border-top: 0.5px solid black;
  border-bottom: 0.5px solid black;
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
    Capsules
  </Button>
)


export const LandingButton = () => (
  <Button onclick={() => {}}>
    Landing Pad
  </Button>
)