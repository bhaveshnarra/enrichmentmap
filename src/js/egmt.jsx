import React from "react";
import createPlotlyComponent from 'react-plotlyjs';
import Plotly from 'plotly.js/dist/plotly-cartesian';
const PlotlyComponent = createPlotlyComponent(Plotly);


export class Egmt extends React.Component {
  constructor(props) {
  super(props);
  this.state = {data: [],
                x:[],
                y:[],
                z:[]
              };
  }

  loaddata() {
    var plotdata = this.state.data;
    this.state.x = [];
    this.state.y = [];
    this.state.z = [];
    for (var i = 0; i < plotdata.length; i++) {
      this.state.x.push(plotdata[i]["ID"]);
      this.state.y.push(plotdata[i]["Count"]);
      this.state.z.push(plotdata[i]["p.adjust"] + "</br>" + plotdata[i]["BgRatio"]+ "</br>" + plotdata[i]["GeneRatio"]);
    }
  }

  componentWillReceiveProps(nextProps) {
            this.setState({data:nextProps["plotdata"]});
            console.log(this.state.data);
            this.loaddata();
  }

  render() {
      let data = [
        {
          type: 'bar',      // all "bar" chart attributes: #bar
          x: this.state.x,     // more about "x": #bar-x
          y: this.state.y,     // #bar-y
          text: this.state.z,
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
