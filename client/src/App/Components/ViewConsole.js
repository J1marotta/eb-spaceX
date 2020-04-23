import React from 'react'
import styled from 'styled-components'

const Viewer = styled.section`
  display: grid;
  grid-area: main;
  background-color: rgba(40,40,40, 0.8);
  height:100%;
  width: 100%;
  border-right: 1px solid black;
  box-shadow:0px 8px 15px rgba(0, 0, 0, 0.1);
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
`

export const ViewConsole = ({data}) => (
  <Viewer>
    <Pre>
      <code className="language-javascript">
        {JSON.stringify(data, null, 2)}
      </code>
    </Pre>

  </Viewer>
)