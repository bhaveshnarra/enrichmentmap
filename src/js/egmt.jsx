import React from "react";
import createPlotlyComponent from 'react-plotlyjs';
import Plotly from 'plotly.js/dist/plotly-cartesian';
const PlotlyComponent = createPlotlyComponent(Plotly);

const x = [];
const y = [];
const z = [];

export class Egmt extends React.Component {


  loaddata() {
    var plotdata = this.props["plotdata"];
    for (var i = 0; i < plotdata.length; i++) {
      x.push(plotdata[i]["ID"]);
      y.push(plotdata[i]["Count"]);
      z.push(plotdata[i]["p.adjust"] + "</br>" + plotdata[i]["BgRatio"]+ "</br>" + plotdata[i]["GeneRatio"]);
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
          text: z,
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
