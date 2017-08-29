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
import { Cluster } from './js/cluster.jsx';
var axios = require('axios');
const mountElement = $('#epout').get(0);
const mountCytoscape = $('#cp').get(0);
const mountcurCy = $('#emout').get(0);
const mountGenelist = $('#emr').get(0);
const mountCluster = $('#cgout').get(0);

export class EMroot extends React.Component {

	constructor(props) {
		super(props);
		this.state = {call: {
			"data":{
				"egmt":{},
				"curPathwayCyNetwork":{},
				"geneCountDf":{},
				"eMapCyNetwork":{}
			}
	}};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(apidata) {
		var self = this;
		$("#loader").show();
		axios.post('http://127.0.0.1:40/ocpu/library/enrichmentmap/R/getEnrichmentMap/json', {
        genes: apidata,
      })
      .then(function (response) {
				self.setState({call:response});
				$("#loader").hide();
      })
      .catch(function (error) {
        alert(error);
      });

  }

	render(){
    return(
			<div>
				<div className="col-sm-4 input_pane" id="form">
					<Genelist onCall={this.handleChange}/>
				</div>
				<div className="col-sm-8">

										 <div className="row">
											 <div className="col-sm-3">
												 <h4>Recurrent Terms</h4>
												 <div className="RT_out"></div>
											 </div>
											 <div className="col-sm-3">
												 <h4>Cluster Genes</h4>
												 <div className="CG_out" id="cgout">
													 <Cluster geneCountDF={this.state.call.data.geneCountDf} />
												 </div>
											 </div>
											 <div className="col-sm-6">
												 <h4>Enrichment Plot</h4>
												 <div className="EP_out" id="epout">
													 <Egmt plotdata={this.state.call.data.egmt}/>
												 </div>
											 </div>
										 </div>
										 <div className="row">
											 <div className="col-sm-6">
												 <h4>Enrichment Map</h4>
												 <div className="curPathwayCyNetwork" id="emout">
													 <Cytoscape elements={this.state.call.data.curPathwayCyNetwork}/>
												 </div>
											 </div>
											 <div className="col-sm-6">
												 <h4>Current Pathway</h4>
												 <div className="CP_out" id="cp">
													 <Cytoscape elements={this.state.call.data.eMapCyNetwork}/>
												 </div>
											 </div>
										 </div>

			 </div>
		 </div>
    );
  }
}

ReactDOM.render(<EMroot/>, mountGenelist);
