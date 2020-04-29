import React, { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

const Viewer = styled.section`
  display: grid;
  grid-area: main;
  background-color: rgba(40, 40, 40, 0.8);
  height: 100%;
  width: 100%;
  border-right: 1px solid black;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  padding: 4px;
  text-align: justify;
  overflow: auto;
  white-space: pre-wrap;

  @media (min-width: 769px) {
    border: 1px solid black;
    margin: auto;
  }
`

const Pre = styled.pre`
  font-size: 14px;
  overflow: auto;
  color: greenyellow;
`

const Code = styled.code`
  white-space: pre-wrap;
`

const rotate = keyframes`
  0% { 
    transform: perspective(120px) rotateX(0deg) rotateY(0deg);    
  } 50% { 
    transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
  } 100% { 
    transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
  }
`

const Spin = styled.div`
  width: 40px;
  height: 40px;
  background-color: rgba(80, 80, 80, 0.8);
  margin: auto;
  animation: ${rotate} 1.2s infinite ease-in-out;
`

const Spinner = () => <Spin data-testid='spinner'></Spin>

export const ViewConsole = () => {
  const fullshop = useSelector((store) => store)
  const [currentView, setCurrentView] = useState(fullshop)
  const error = useSelector((store) => store.meta.isError)
  const loading = useSelector((store) => store.meta.loading)

  useEffect(() => {
    setCurrentView(fullshop)
  }, [fullshop])

  return (
    <Viewer>
      {!error && loading && <Spinner />}
      {!error && !loading && (
        <Pre>
          <Code data-testid='code'>{JSON.stringify(currentView, null, 2)}</Code>
        </Pre>
      )}
      {!loading && error && (
        <div>I'm sorry there was an error please try refreshing the page.</div>
      )}
    </Viewer>
  )
}

ViewConsole.propTypes = {}
