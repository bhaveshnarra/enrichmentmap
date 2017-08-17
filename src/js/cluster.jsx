import React from "react";
import createPlotlyComponent from 'react-plotlyjs';
import Plotly from 'plotly.js/dist/plotly-cartesian';
const PlotlyComponent = createPlotlyComponent(Plotly);


export class Cluster extends React.Component {
  constructor(props) {
  super(props);
  this.state = {rows: []};
  this.loaddata();
  }

  loaddata() {
    for (var i = 0; i < geneCountDF.length; i++) {
      var ele = {
        id: i,
        Gene: geneCountDF[i]["Gene"],
        Count: geneCountDF[i]["Count"]
      }
      this.state.rows.push(ele);
    }

  }


  render() {
    let list = this.state.rows.map(p =>{
         return (
              <tr>
                <td>{p.Gene}</td>
                <td>{p.Count}</td>
              </tr>
         );
    });
      return (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Clusters</th>
            </tr>
          </thead>
          <tbody>
            {list}
          </tbody>
        </table>
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
