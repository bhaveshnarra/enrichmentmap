import _ from 'lodash';
import $ from 'jquery';
import Icon from '../public/img/pc_icon.png';
import 'bootstrap/dist/js/bootstrap';
import 'bootswatch/flatly/bootstrap.css';
import './css/index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Cytoscape } from './js/react-cytoscape.jsx';
import { Genelist } from './js/genelist.jsx';
import { Egmt } from './js/egmt.jsx';

const mountElement = $('#epout').get(0);
const mountCytoscape = $('#cp').get(0);
const mountGenelist = $('#form').get(0);


ReactDOM.render(<Egmt/>, mountElement);
ReactDOM.render(<Cytoscape/>, mountCytoscape);
ReactDOM.render(<Genelist/>, mountGenelist);
