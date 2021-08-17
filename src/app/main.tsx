import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

import { Button } from '../components/Button/Button';

const component = <Button>Primary Button</Button>;

ReactDOM.render(component, document.getElementById('app'));
