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
import createPlotlyComponent from 'react-plotlyjs';
import Plotly from 'plotly.js/dist/plotly-cartesian';

const mountElement = $('#epout').get(0);
const mountCytoscape = $('#cp').get(0);
const mountGenelist = $('#form').get(0);
const PlotlyComponent = createPlotlyComponent(Plotly);

export class App extends React.Component {
  render() {
      let data = [
        {
          type: 'scatter',  // all "scatter" attributes: https://plot.ly/javascript/reference/#scatter
          x: [1, 2, 3],     // more about "x": #scatter-x
          y: [6, 2, 3],     // #scatter-y
          marker: {         // marker is an object, valid marker keys: #scatter-marker
            color: 'rgb(16, 32, 77)' // more about "marker.color": #scatter-marker-color
          }
        },
        {
          type: 'bar',      // all "bar" chart attributes: #bar
          x: [1, 2, 3],     // more about "x": #bar-x
          y: [6, 2, 3],     // #bar-y
          name: 'bar chart example' // #bar-name
        }
      ];
      let layout = {                     // all "layout" attributes: #layout
        title: 'simple example',  // more about "layout.title": #layout-title
        xaxis: {                  // all "layout.xaxis" attributes: #layout-xaxis
          title: 'time'         // more about "layout.xaxis.title": #layout-xaxis-title
        },
        annotations: [            // all "annotation" attributes: #layout-annotations
          {
            text: 'simple annotation',    // #layout-annotations-text
            x: 0,                         // #layout-annotations-x
            xref: 'paper',                // #layout-annotations-xref
            y: 0,                         // #layout-annotations-y
            yref: 'paper'                 // #layout-annotations-yref
          }
        ]
      };
      let config = {
        showLink: false,
        displayModeBar: true
      };
      return (
        <PlotlyComponent className="whatever" data={data} layout={layout} config={config}/>
      );
    }

}


ReactDOM.render(<App/>, mountElement);
ReactDOM.render(<Cytoscape/>, mountCytoscape);
ReactDOM.render(<Genelist/>, mountGenelist);
