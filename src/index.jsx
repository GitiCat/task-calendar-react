import React from 'react';
import { render } from 'react-dom'
import App from './app/app';
import '../public/styles/styles.scss';

render((
    <App/>
), document.getElementById('renderer'));