import { hot } from 'react-hot-loader/root';
import React from 'react';
import GlobalStyle from '../theme';
import { Controller } from './ControlConsole'

const App = () => (
    <>
        <Controller/>
        <GlobalStyle />
    </>
);

export default hot(App);