import React from 'react'
import styled,{css} from 'styled-components'

// Had trouble export this css helper, so had to declare it twice.
const bordersCss = css`
  border-left: 0.5px solid black;
  border-right: 0.5px solid black;
  border-top: 1px solid black;
  border-bottom: 1px solid black;

 @media (min-width: 769px ){
  border-left: 1px solid black;
  border-right: 1px solid black;
  border-top: 0.5px solid black;
  border-bottom: 0.5px solid black;
}
`


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
  ${bordersCss}
  
  :hover {
    background-color: #fc3360;
    transform: scale(1.1)
  }
  :active {
    background-color: #860a26;
    transform: scale(1.1)
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