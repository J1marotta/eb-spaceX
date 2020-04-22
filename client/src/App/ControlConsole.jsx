import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Rocket } from '../assets/rocket.svg';

const ControlConsole = styled.main`
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: 1fr 0.25fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-areas:
    'main capsules'
    'main rocket'
    'main id'
    'main landing';
  grid-gap: 10px;
  height: 100vh;
  width: 99vw;
  margin: auto;

  @media (min-width: 769px) {
    grid-template-areas:
      'main main main main'
      'capsules rocket id landing';
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 0.25fr;
    max-height: 50vh;
    width: 50vw;
  }
`

const Viewer = styled.section`
  display: grid;
  background-color: #e3e3e3;
  grid-area: main;
  height:100%;
  width: 100%;
`

const CapsulesArea = styled.div`
  grid-area: capsules;
  border-radius: 2%;
`

const LandingButton = styled.div`
  grid-area: landing;
  border-radius: 2%;
`

const InputArea = styled.div`
  display: grid;
  grid-area: id;
  border-radius: 2%;
  text-align: center;
`

const RocketHolder = styled.div`
  display: grid;
  padding: 10px;
  grid-area: rocket;
  align-items: center;
  justify-items: center;
  height: 100%;
  width: 100%;
`

export const Controller = () => (
  <ControlConsole>
    <Viewer> MAIN VIEW </Viewer>
    <CapsulesArea>Get Capsules</CapsulesArea>
    <RocketHolder><Rocket/></RocketHolder>
    <InputArea>
      <label for='landingid'>
        <div>Landing pad Id</div>
        <input type='text' id='landingId' placeholder="Landing pad id" maxlength="15"></input>
      </label>
    </InputArea>
    <LandingButton>
      <button type='button' onClick={()=>{}}>
        Get Landing Pads
      </button>
    </LandingButton>
  </ControlConsole>
)
