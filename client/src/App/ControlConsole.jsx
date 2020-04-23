import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Rocket } from '../assets/rocket.svg';
import {GetCapsulesButton, LandingButton} from './Buttons'
import {LandingInput} from './Input'

const ControlConsole = styled.main`
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: 1fr 0.30fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-areas:
    'main nav'
    'main nav'
    'main nav'
    'main nav';
  
  height: 100vh;
  width: 100vw;
  margin: auto;

  @media (min-width: 769px) {
    grid-template-areas:
      'main main main main'
      'nav nav nav nav';
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 0.30fr;
    max-height: 50vh;
    width: 50vw;
    grid-gap: 10px;
  }
`

const Viewer = styled.section`
  display: grid;
  background-color: #e3e3e3;
  grid-area: main;
  height:100%;
  width: 100%;
  border-right: 1px solid black;
  box-shadow:0px 8px 15px rgba(0, 0, 0, 0.1);
  
  @media (min-width: 769px) {
    border: 1px solid black;
    margin: auto;
  }
`

const NavArea = styled.nav`
  display: grid;
  width: 100%;
  height: 100%;
  justify-items: center;
  align-items: center;
  grid-area: nav;
  grid-template-areas: 
    'capsules'
    'rocket'
    'id' 
    'landing';
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr;

  @media (min-width: 769px) {
    grid-template-areas: 'capsules rocket id landing';
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    box-shadow:0px 8px 15px rgba(0, 0, 0, 0.1);
  }

`

const CapsulesArea = styled.div`
  grid-area: capsules;
  height: 100%;
  width: 100%;
`

const LandingButtonArea = styled.div`
  grid-area: landing;
  height: 100%;
  width: 100%;
`

const InputArea = styled.div`
  display: grid;
  grid-area: id;
  text-align: center;
  height: 100%;
  width: 100%;
  align-items: center;
`

const RocketHolder = styled.div`
  display: grid;
  grid-area: rocket;
  align-items: center;
  justify-items: center;
  background-color: #7b21cc;
  height: 100%;
  width: 100%;
`

export const Controller = ({store}) => (
  <ControlConsole>
    <Viewer> {JSON.stringify(store,null,2)} </Viewer>
    <NavArea>
      <CapsulesArea><GetCapsulesButton/></CapsulesArea>
      <RocketHolder><Rocket/></RocketHolder>
      <InputArea>
        <LandingInput/>
      </InputArea>
      <LandingButtonArea>
        <LandingButton/>
      </LandingButtonArea>
    </NavArea>
  </ControlConsole>
)
