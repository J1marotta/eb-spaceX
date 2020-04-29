import React from 'react'
import styled, { css } from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import {Actions} from '../../redux/Actions'
import PropTypes from 'prop-types';
import { getFromServer } from '../../redux/FX';

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
  :disabled {
    background-color:  #43353c;
    cursor: not-allowed;
  }
`

export const GetCapsulesButton = ({  }) => {
  const dispatch = useDispatch()

  return (
    <Button
      onClick={() => {
        dispatch({ type: Actions.GET('CAPSULES'), payload: Date.now() })
        getFromServer('Capsules')
      }
    }
    >
      Capsules
    </Button>
  )
}

GetCapsulesButton.propTypes = {
}




// *************



export const LandingButton = ({ landingId }) => {
  const dispatch = useDispatch()

  
  const symbols = /([\%\#\&\$])/


  return (
    <Button
      disabled={landingId.match( symbols )}
      onClick={() => {
        dispatch({ type: Actions.GET('landingpad'), payload: { time: Date.now(), landingId } })
        getFromServer('landingpad', landingId)
      }
    }
    >
      Landing Pad
    </Button>
  )
}

LandingButton.propTypes = {
  landingId: PropTypes.string.isRequired,
}