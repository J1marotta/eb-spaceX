import React from 'react'
import styled, { css } from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import {Actions} from '../../redux/Actions'
import PropTypes from 'prop-types';

// Had trouble export this css helper, so had to declare it twice.
const bordersCss = css`
  border-left: 0.5px solid black;
  border-right: 0.5px solid black;
  border-top: 1px solid black;
  border-bottom: 1px solid black;

  @media (min-width: 769px) {
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
    transform: scale(1.05);
  }
  :active {
    background-color: #860a26;
    transform: scale(1.1);
  }
`

export const GetCapsulesButton = ({ setView }) => {
  const dispatch = useDispatch()
  const capsules = useSelector((store) => store.state.map( x => x.capsules))


  return (
    <Button
      onClick={() => {
        dispatch({ type: Actions.GET_CAPSULES, payload: Date.now() })
        setView(capsules)
      }
    }
    >
      Capsules
    </Button>
  )
}

GetCapsulesButton.propTypes = {
  setView: PropTypes.func.isRequired
}




// *************



export const LandingButton = ({ setView, id }) => {
  const dispatch = useDispatch()
  const landingPad = useSelector((store) => store.state.map( x => x.landingPad))


  return (
    <Button
      onClick={() => {
        dispatch({ type: Actions.GET_LANDING_PAD, payload: { time: Date.now(), id } })
        setView(landingPad)
      }
    }
    >
      Landing Pad
    </Button>
  )
}

LandingButton.propTypes = {
  setView: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
}