import React from 'react';
import ReactDOM from 'react-dom';

import Tittle from './Tittle.jsx';
import Logo from './Logo.jsx';
import ContactPhone from './Contactphone.jsx';
import ContactEmail from './Contactemail.jsx';
import Info from './Info.jsx';
import Samples from './Samples.jsx';


ReactDOM.render(<Tittle />, document.getElementById('tittle'));
ReactDOM.render(<Logo />, document.getElementById('logo'));
ReactDOM.render(<ContactPhone />, document.getElementById('contactphone'));
ReactDOM.render(<ContactEmail />, document.getElementById('contactemail'));
ReactDOM.render(<Info />, document.getElementById('info'));
ReactDOM.render(<Samples />, document.getElementById('samples'));
