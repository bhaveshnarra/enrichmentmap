import React from "react";
import createPlotlyComponent from 'react-plotlyjs';
import Plotly from 'plotly.js/dist/plotly-cartesian';
const PlotlyComponent = createPlotlyComponent(Plotly);


const x = [];
const y = [];
const z = [];

export class Cluster extends React.Component {

  loaddata() {
    for (var i = 0; i < geneCountDF.length; i++) {
      x.push(geneCountDF[i]["Gene"]);
      y.push(geneCountDF[i]["Count"]);
    }
  }

  componentDidMount() {
    this.loaddata();
  }

  render() {
      let data = [
        {
          type: 'bar',      // all "bar" chart attributes: #bar
          x: x,     // more about "x": #bar-x
          y: y,     // #bar-y
          name: 'bar chart example' // #bar-name
        }
      ];
      let layout = {                     // all "layout" attributes: #layout
        title: 'simple example',  // more about "layout.title": #layout-title
        xaxis: {                  // all "layout.xaxis" attributes: #layout-xaxis
          title: 'time',
          autorange: 'true'
        },
        yaxis: {                  // all "layout.xaxis" attributes: #layout-xaxis
          title: 'time',
          autorange: 'true'
        }
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

var geneCountDF = [
  {
    "Gene": "TP53",
    "Count": 8
  },
  {
    "Gene": "MDM2",
    "Count": 7
  }
]
