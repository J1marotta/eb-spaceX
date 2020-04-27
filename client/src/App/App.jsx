import { hot } from 'react-hot-loader/root';
import React from 'react';
import GlobalStyle from '../theme';
import { Controller } from './Components/ControlConsole'

// to allow .env files
require('dotenv').config()

const App = () => (
    <>
        <Controller/>
        <GlobalStyle />
    </>
);

export default hot(App);