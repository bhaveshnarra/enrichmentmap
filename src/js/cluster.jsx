import React from "react";
import createPlotlyComponent from 'react-plotlyjs';
import Plotly from 'plotly.js/dist/plotly-cartesian';
const PlotlyComponent = createPlotlyComponent(Plotly);

var temp = [];

export class Cluster extends React.Component {

  loaddata() {
    var geneCountDF = this.props["geneCountDF"];
    temp = [];
    for (var i = 0; i < geneCountDF.length; i++) {

      temp.push(<tr key={i}><td>{geneCountDF[i]["Gene"]}</td><td>{geneCountDF[i]["Count"]}</td></tr>);
    }

  }

  componentWillReceiveProps(nextProps) {
    // You don't have to do this check first, but it can help prevent an unneeded render
    this.loaddata();
    }

  componentDidUpdate() {
    this.loaddata();
  }

  render() {
      return (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Clusters</th>
            </tr>
          </thead>
          <tbody>
            {temp}
          </tbody>
        </table>
      );
    }
}
