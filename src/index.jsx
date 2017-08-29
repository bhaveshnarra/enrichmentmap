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
const mountGenelist = $('#form').get(0);
const mountCluster = $('#cgout').get(0);

export class EMroot extends React.Component {

	constructor(props) {
		super(props);
		this.state = {call: []};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(apidata) {
		var self = this;
		axios.post('http://127.0.0.1:40/ocpu/library/enrichmentmap/R/getEnrichmentMap/json', {
        genes: apidata,
      })
      .then(function (response) {
				self.setState({call:response});
        console.log(self.state.call["data"]);
      })
      .catch(function (error) {
        console.log(error);
      });

  }

	render(){
    return(
				<Genelist onCall={this.handleChange}/>
    );
  }
}

var eles = {
	"nodes": [
		{
			"data": {
				"id": ["BRAP"],
				"name": ["BRAP"],
				"color": ["#888888"],
				"shape": ["ellipse"],
				"href": ["http://www.genecards.org/cgi-bin/carddisp.pl?gene=BRAP&keywords=BRAP"],
				"height": ["70"],
				"width": ["70"],
				"nodeLabelColor": ["#FFFFFF"]
			}
		},
		{
			"data": {
				"id": ["JAK2"],
				"name": ["JAK2"],
				"color": ["#888888"],
				"shape": ["ellipse"],
				"href": ["http://www.genecards.org/cgi-bin/carddisp.pl?gene=JAK2&keywords=JAK2"],
				"height": ["70"],
				"width": ["70"],
				"nodeLabelColor": ["#FFFFFF"]
			}
		},
		{
			"data": {
				"id": ["MAP2K1"],
				"name": ["MAP2K1"],
				"color": ["#888888"],
				"shape": ["ellipse"],
				"href": ["http://www.genecards.org/cgi-bin/carddisp.pl?gene=MAP2K1&keywords=MAP2k1"],
				"height": ["70"],
				"width": ["70"],
				"nodeLabelColor": ["#FFFFFF"]
			}
		},
		{
			"data": {
				"id": ["MAP2K2"],
				"name": ["MAP2K2"],
				"color": ["#888888"],
				"shape": ["ellipse"],
				"href": ["http://www.genecards.org/cgi-bin/carddisp.pl?gene=MAP2K2&keywords=MAP2k1"],
				"height": ["70"],
				"width": ["70"],
				"nodeLabelColor": ["#FFFFFF"]
			}
		},
		{
			"data": {
				"id": ["MAP3K11"],
				"name": ["MAP3K11"],
				"color": ["#888888"],
				"shape": ["ellipse"],
				"href": ["http://www.genecards.org/cgi-bin/carddisp.pl?gene=MAP3K11&keywords=MAP3k11"],
				"height": ["70"],
				"width": ["70"],
				"nodeLabelColor": ["#FFFFFF"]
			}
		},
		{
			"data": {
				"id": ["MARK3"],
				"name": ["MARK3"],
				"color": ["#888888"],
				"shape": ["ellipse"],
				"href": ["http://www.genecards.org/cgi-bin/carddisp.pl?gene=MARK3&keywords=MARK3"],
				"height": ["70"],
				"width": ["70"],
				"nodeLabelColor": ["#FFFFFF"]
			}
		},
		{
			"data": {
				"id": ["PHB"],
				"name": ["PHB"],
				"color": ["#888888"],
				"shape": ["ellipse"],
				"href": ["http://www.genecards.org/cgi-bin/carddisp.pl?gene=PHB&keywords=PHB"],
				"height": ["70"],
				"width": ["70"],
				"nodeLabelColor": ["#FFFFFF"]
			}
		},
		{
			"data": {
				"id": ["PPP2CA"],
				"name": ["PPP2CA"],
				"color": ["#888888"],
				"shape": ["ellipse"],
				"href": [""],
				"height": ["70"],
				"width": ["70"],
				"nodeLabelColor": ["#FFFFFF"]
			}
		},
		{
			"data": {
				"id": ["PPP2CB"],
				"name": ["PPP2CB"],
				"color": ["#888888"],
				"shape": ["ellipse"],
				"href": ["http://www.genecards.org/cgi-bin/carddisp.pl?gene=PPP2CA&keywords=PPP2cA"],
				"height": ["70"],
				"width": ["70"],
				"nodeLabelColor": ["#FFFFFF"]
			}
		},
		{
			"data": {
				"id": ["PPP2R1A"],
				"name": ["PPP2R1A"],
				"color": ["#888888"],
				"shape": ["ellipse"],
				"href": ["http://www.genecards.org/cgi-bin/carddisp.pl?gene=PPP2R1A&keywords=PPP2R1A"],
				"height": ["70"],
				"width": ["70"],
				"nodeLabelColor": ["#FFFFFF"]
			}
		},
		{
			"data": {
				"id": ["PPP2R1B"],
				"name": ["PPP2R1B"],
				"color": ["#888888"],
				"shape": ["ellipse"],
				"href": ["http://www.genecards.org/cgi-bin/carddisp.pl?gene=PPP2R1B&keywords=PPP2R1B"],
				"height": ["70"],
				"width": ["70"],
				"nodeLabelColor": ["#FFFFFF"]
			}
		},
		{
			"data": {
				"id": ["PPP2R5A"],
				"name": ["PPP2R5A"],
				"color": ["#888888"],
				"shape": ["ellipse"],
				"href": ["http://www.genecards.org/cgi-bin/carddisp.pl?gene=PPP2R5A&keywords=PPP2R5A"],
				"height": ["70"],
				"width": ["70"],
				"nodeLabelColor": ["#FFFFFF"]
			}
		},
		{
			"data": {
				"id": ["PPP2R5B"],
				"name": ["PPP2R5B"],
				"color": ["#888888"],
				"shape": ["ellipse"],
				"href": ["http://www.genecards.org/cgi-bin/carddisp.pl?gene=PPP2R5B&keywords=PPP2R5B"],
				"height": ["70"],
				"width": ["70"],
				"nodeLabelColor": ["#FFFFFF"]
			}
		},
		{
			"data": {
				"id": ["PPP2R5C"],
				"name": ["PPP2R5C"],
				"color": ["#888888"],
				"shape": ["ellipse"],
				"href": ["http://www.genecards.org/cgi-bin/carddisp.pl?gene=PPP2R5C&keywords=PPP2R5C"],
				"height": ["70"],
				"width": ["70"],
				"nodeLabelColor": ["#FFFFFF"]
			}
		},
		{
			"data": {
				"id": ["PPP2R5D"],
				"name": ["PPP2R5D"],
				"color": ["#888888"],
				"shape": ["ellipse"],
				"href": ["http://www.genecards.org/cgi-bin/carddisp.pl?gene=PPP2R5D&keywords=PPP2R5D"],
				"height": ["70"],
				"width": ["70"],
				"nodeLabelColor": ["#FFFFFF"]
			}
		},
		{
			"data": {
				"id": ["PPP2R5E"],
				"name": ["PPP2R5E"],
				"color": ["#888888"],
				"shape": ["ellipse"],
				"href": ["http://www.genecards.org/cgi-bin/carddisp.pl?gene=PPP2R5E&keywords=PPP2R5E"],
				"height": ["70"],
				"width": ["70"],
				"nodeLabelColor": ["#FFFFFF"]
			}
		},
		{
			"data": {
				"id": ["SRC"],
				"name": ["SRC"],
				"color": ["#888888"],
				"shape": ["ellipse"],
				"href": ["http://www.genecards.org/cgi-bin/carddisp.pl?gene=SRC&keywords=SRC"],
				"height": ["70"],
				"width": ["70"],
				"nodeLabelColor": ["#FFFFFF"]
			}
		},
		{
			"data": {
				"id": ["ARAF"],
				"name": ["ARAF"],
				"color": ["#888888"],
				"shape": ["ellipse"],
				"href": ["http://www.genecards.org/cgi-bin/carddisp.pl?gene=ARAF&keywords=ARAF"],
				"height": ["70"],
				"width": ["70"],
				"nodeLabelColor": ["#FFFFFF"]
			}
		},
		{
			"data": {
				"id": ["BRAF"],
				"name": ["BRAF"],
				"color": ["#888888"],
				"shape": ["ellipse"],
				"href": ["http://www.genecards.org/cgi-bin/carddisp.pl?gene=BRAF&keywords=BRAF"],
				"height": ["70"],
				"width": ["70"],
				"nodeLabelColor": ["#FFFFFF"]
			}
		},
		{
			"data": {
				"id": ["HRAS"],
				"name": ["HRAS"],
				"color": ["#888888"],
				"shape": ["ellipse"],
				"href": ["http://www.genecards.org/cgi-bin/carddisp.pl?gene=HRAS&keywords=HRAS"],
				"height": ["70"],
				"width": ["70"],
				"nodeLabelColor": ["#FFFFFF"]
			}
		},
		{
			"data": {
				"id": ["KRAS"],
				"name": ["KRAS"],
				"color": ["#888888"],
				"shape": ["ellipse"],
				"href": ["http://www.genecards.org/cgi-bin/carddisp.pl?gene=KRAS&keywords=KRAS"],
				"height": ["70"],
				"width": ["70"],
				"nodeLabelColor": ["#FFFFFF"]
			}
		},
		{
			"data": {
				"id": ["KSR1"],
				"name": ["KSR1"],
				"color": ["#888888"],
				"shape": ["ellipse"],
				"href": ["http://www.genecards.org/cgi-bin/carddisp.pl?gene=KSR1&keywords=KSR1"],
				"height": ["70"],
				"width": ["70"],
				"nodeLabelColor": ["#FFFFFF"]
			}
		},
		{
			"data": {
				"id": ["NRAS"],
				"name": ["NRAS"],
				"color": ["#888888"],
				"shape": ["ellipse"],
				"href": ["http://www.genecards.org/cgi-bin/carddisp.pl?gene=NRAS&keywords=NRAS"],
				"height": ["70"],
				"width": ["70"],
				"nodeLabelColor": ["#FFFFFF"]
			}
		},
		{
			"data": {
				"id": ["RAF1"],
				"name": ["RAF1"],
				"color": ["#888888"],
				"shape": ["ellipse"],
				"href": ["http://www.genecards.org/cgi-bin/carddisp.pl?gene=RAF1&keywords=RAF1"],
				"height": ["70"],
				"width": ["70"],
				"nodeLabelColor": ["#FFFFFF"]
			}
		},
		{
			"data": {
				"id": ["YWHAB"],
				"name": ["YWHAB"],
				"color": ["#888888"],
				"shape": ["ellipse"],
				"href": ["http://www.genecards.org/cgi-bin/carddisp.pl?gene=YWHAB&keywords=YWHAB"],
				"height": ["70"],
				"width": ["70"],
				"nodeLabelColor": ["#FFFFFF"]
			}
		}
	],
	"edges": [
		{
			"data": {
				"source": ["BRAP"],
				"target": ["ARAF"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["BRAP"],
				"target": ["BRAF"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["BRAP"],
				"target": ["HRAS"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["BRAP"],
				"target": ["KRAS"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["BRAP"],
				"target": ["KSR1"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["BRAP"],
				"target": ["MARK3"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["BRAP"],
				"target": ["NRAS"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["BRAP"],
				"target": ["RAF1"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["BRAP"],
				"target": ["YWHAB"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["JAK2"],
				"target": ["ARAF"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["JAK2"],
				"target": ["BRAF"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["JAK2"],
				"target": ["HRAS"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["JAK2"],
				"target": ["KRAS"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["JAK2"],
				"target": ["KSR1"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["JAK2"],
				"target": ["MARK3"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["JAK2"],
				"target": ["NRAS"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["JAK2"],
				"target": ["RAF1"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["JAK2"],
				"target": ["YWHAB"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["MAP2K1"],
				"target": ["ARAF"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["MAP2K1"],
				"target": ["BRAF"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["MAP2K1"],
				"target": ["HRAS"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["MAP2K1"],
				"target": ["KRAS"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["MAP2K1"],
				"target": ["KSR1"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["MAP2K1"],
				"target": ["MARK3"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["MAP2K1"],
				"target": ["NRAS"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["MAP2K1"],
				"target": ["RAF1"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["MAP2K1"],
				"target": ["YWHAB"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["MAP2K2"],
				"target": ["ARAF"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["MAP2K2"],
				"target": ["BRAF"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["MAP2K2"],
				"target": ["HRAS"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["MAP2K2"],
				"target": ["KRAS"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["MAP2K2"],
				"target": ["KSR1"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["MAP2K2"],
				"target": ["MARK3"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["MAP2K2"],
				"target": ["NRAS"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["MAP2K2"],
				"target": ["RAF1"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["MAP2K2"],
				"target": ["YWHAB"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["MAP3K11"],
				"target": ["ARAF"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["MAP3K11"],
				"target": ["BRAF"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["MAP3K11"],
				"target": ["HRAS"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["MAP3K11"],
				"target": ["KRAS"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["MAP3K11"],
				"target": ["KSR1"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["MAP3K11"],
				"target": ["MARK3"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["MAP3K11"],
				"target": ["NRAS"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["MAP3K11"],
				"target": ["RAF1"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["MAP3K11"],
				"target": ["YWHAB"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["MARK3"],
				"target": ["KSR1"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["PHB"],
				"target": ["ARAF"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["PHB"],
				"target": ["BRAF"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["PHB"],
				"target": ["HRAS"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["PHB"],
				"target": ["KRAS"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["PHB"],
				"target": ["KSR1"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["PHB"],
				"target": ["NRAS"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["PHB"],
				"target": ["RAF1"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["PHB"],
				"target": ["YWHAB"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["PPP2CA"],
				"target": ["ARAF"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["PPP2CA"],
				"target": ["BRAF"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["PPP2CA"],
				"target": ["KSR1"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["PPP2CA"],
				"target": ["MARK3"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["PPP2CA"],
				"target": ["RAF1"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["PPP2CA"],
				"target": ["YWHAB"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["PPP2CB"],
				"target": ["ARAF"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["PPP2CB"],
				"target": ["BRAF"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["PPP2CB"],
				"target": ["KSR1"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["PPP2CB"],
				"target": ["MARK3"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["PPP2CB"],
				"target": ["RAF1"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["PPP2CB"],
				"target": ["YWHAB"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["PPP2R1A"],
				"target": ["ARAF"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["PPP2R1A"],
				"target": ["BRAF"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["PPP2R1A"],
				"target": ["KSR1"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["PPP2R1A"],
				"target": ["MARK3"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["PPP2R1A"],
				"target": ["RAF1"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["PPP2R1A"],
				"target": ["YWHAB"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["PPP2R1B"],
				"target": ["ARAF"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["PPP2R1B"],
				"target": ["BRAF"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["PPP2R1B"],
				"target": ["KSR1"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["PPP2R1B"],
				"target": ["MARK3"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["PPP2R1B"],
				"target": ["RAF1"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["PPP2R1B"],
				"target": ["YWHAB"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["PPP2R5A"],
				"target": ["ARAF"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["PPP2R5A"],
				"target": ["BRAF"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["PPP2R5A"],
				"target": ["KSR1"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["PPP2R5A"],
				"target": ["MARK3"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["PPP2R5A"],
				"target": ["RAF1"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["PPP2R5A"],
				"target": ["YWHAB"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["PPP2R5B"],
				"target": ["ARAF"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["PPP2R5B"],
				"target": ["BRAF"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["PPP2R5B"],
				"target": ["KSR1"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["PPP2R5B"],
				"target": ["MARK3"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["PPP2R5B"],
				"target": ["RAF1"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["PPP2R5B"],
				"target": ["YWHAB"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["PPP2R5C"],
				"target": ["ARAF"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["PPP2R5C"],
				"target": ["BRAF"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["PPP2R5C"],
				"target": ["KSR1"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["PPP2R5C"],
				"target": ["MARK3"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["PPP2R5C"],
				"target": ["RAF1"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["PPP2R5C"],
				"target": ["YWHAB"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["PPP2R5D"],
				"target": ["ARAF"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["PPP2R5D"],
				"target": ["BRAF"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["PPP2R5D"],
				"target": ["KSR1"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["PPP2R5D"],
				"target": ["MARK3"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["PPP2R5D"],
				"target": ["RAF1"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["PPP2R5D"],
				"target": ["YWHAB"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["PPP2R5E"],
				"target": ["ARAF"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["PPP2R5E"],
				"target": ["BRAF"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["PPP2R5E"],
				"target": ["KSR1"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["PPP2R5E"],
				"target": ["MARK3"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["PPP2R5E"],
				"target": ["RAF1"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["PPP2R5E"],
				"target": ["YWHAB"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["SRC"],
				"target": ["ARAF"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["SRC"],
				"target": ["BRAF"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["SRC"],
				"target": ["HRAS"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["SRC"],
				"target": ["KRAS"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["SRC"],
				"target": ["KSR1"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["SRC"],
				"target": ["MARK3"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["SRC"],
				"target": ["NRAS"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["SRC"],
				"target": ["RAF1"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["SRC"],
				"target": ["YWHAB"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		}
	]
};

var emapcy =  {
	"nodes": [
		{
			"data": {
				"id": ["SUMOylation of transcription factors"],
				"name": ["SUMOylation of transcription factors"],
				"color": ["#888888"],
				"shape": ["ellipse"],
				"href": [""],
				"height": ["70"],
				"width": ["70"],
				"nodeLabelColor": ["#000000"]
			}
		},
		{
			"data": {
				"id": ["Regulation of TP53 Activity through Methylation"],
				"name": ["Regulation of TP53 Activity through Methylation"],
				"color": ["#888888"],
				"shape": ["ellipse"],
				"href": [""],
				"height": ["70"],
				"width": ["70"],
				"nodeLabelColor": ["#000000"]
			}
		},
		{
			"data": {
				"id": ["Oncogene Induced Senescence"],
				"name": ["Oncogene Induced Senescence"],
				"color": ["#888888"],
				"shape": ["ellipse"],
				"href": [""],
				"height": ["70"],
				"width": ["70"],
				"nodeLabelColor": ["#000000"]
			}
		},
		{
			"data": {
				"id": ["Regulation of TP53 Degradation"],
				"name": ["Regulation of TP53 Degradation"],
				"color": ["#888888"],
				"shape": ["ellipse"],
				"href": [""],
				"height": ["70"],
				"width": ["70"],
				"nodeLabelColor": ["#000000"]
			}
		},
		{
			"data": {
				"id": ["Regulation of TP53 Activity through Phosphorylation"],
				"name": ["Regulation of TP53 Activity through Phosphorylation"],
				"color": ["#888888"],
				"shape": ["ellipse"],
				"href": [""],
				"height": ["70"],
				"width": ["70"],
				"nodeLabelColor": ["#000000"]
			}
		},
		{
			"data": {
				"id": ["Oxidative Stress Induced Senescence"],
				"name": ["Oxidative Stress Induced Senescence"],
				"color": ["#888888"],
				"shape": ["ellipse"],
				"href": [""],
				"height": ["70"],
				"width": ["70"],
				"nodeLabelColor": ["#000000"]
			}
		},
		{
			"data": {
				"id": ["TP53 Regulates Transcription of Caspase Activators and Caspases"],
				"name": ["TP53 Regulates Transcription of Caspase Activators and Caspases"],
				"color": ["#888888"],
				"shape": ["ellipse"],
				"href": [""],
				"height": ["70"],
				"width": ["70"],
				"nodeLabelColor": ["#000000"]
			}
		},
		{
			"data": {
				"id": ["TP53 Regulates Transcription of Death Receptors and Ligands"],
				"name": ["TP53 Regulates Transcription of Death Receptors and Ligands"],
				"color": ["#888888"],
				"shape": ["ellipse"],
				"href": [""],
				"height": ["70"],
				"width": ["70"],
				"nodeLabelColor": ["#000000"]
			}
		},
		{
			"data": {
				"id": ["AKT phosphorylates targets in the cytosol"],
				"name": ["AKT phosphorylates targets in the cytosol"],
				"color": ["#888888"],
				"shape": ["ellipse"],
				"href": [""],
				"height": ["70"],
				"width": ["70"],
				"nodeLabelColor": ["#000000"]
			}
		},
		{
			"data": {
				"id": ["CREB phosphorylation through the activation of Ras"],
				"name": ["CREB phosphorylation through the activation of Ras"],
				"color": ["#888888"],
				"shape": ["ellipse"],
				"href": [""],
				"height": ["70"],
				"width": ["70"],
				"nodeLabelColor": ["#000000"]
			}
		}
	],
	"edges": [
		{
			"data": {
				"source": ["SUMOylation of transcription factors"],
				"target": ["Regulation of TP53 Activity through Methylation"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["SUMOylation of transcription factors"],
				"target": ["Oncogene Induced Senescence"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["Regulation of TP53 Activity through Methylation"],
				"target": ["Oncogene Induced Senescence"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["SUMOylation of transcription factors"],
				"target": ["Regulation of TP53 Degradation"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["Regulation of TP53 Activity through Methylation"],
				"target": ["Regulation of TP53 Degradation"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["Oncogene Induced Senescence"],
				"target": ["Regulation of TP53 Degradation"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["SUMOylation of transcription factors"],
				"target": ["Regulation of TP53 Activity through Phosphorylation"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["Regulation of TP53 Activity through Methylation"],
				"target": ["Regulation of TP53 Activity through Phosphorylation"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["Oncogene Induced Senescence"],
				"target": ["Regulation of TP53 Activity through Phosphorylation"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["Regulation of TP53 Degradation"],
				"target": ["Regulation of TP53 Activity through Phosphorylation"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["SUMOylation of transcription factors"],
				"target": ["Oxidative Stress Induced Senescence"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["Regulation of TP53 Activity through Methylation"],
				"target": ["Oxidative Stress Induced Senescence"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["Oncogene Induced Senescence"],
				"target": ["Oxidative Stress Induced Senescence"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["Regulation of TP53 Degradation"],
				"target": ["Oxidative Stress Induced Senescence"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["Regulation of TP53 Activity through Phosphorylation"],
				"target": ["Oxidative Stress Induced Senescence"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["SUMOylation of transcription factors"],
				"target": ["TP53 Regulates Transcription of Caspase Activators and Caspases"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["Regulation of TP53 Activity through Methylation"],
				"target": ["TP53 Regulates Transcription of Caspase Activators and Caspases"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["Oncogene Induced Senescence"],
				"target": ["TP53 Regulates Transcription of Caspase Activators and Caspases"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["Regulation of TP53 Degradation"],
				"target": ["TP53 Regulates Transcription of Caspase Activators and Caspases"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["Regulation of TP53 Activity through Phosphorylation"],
				"target": ["TP53 Regulates Transcription of Caspase Activators and Caspases"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["Oxidative Stress Induced Senescence"],
				"target": ["TP53 Regulates Transcription of Caspase Activators and Caspases"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["SUMOylation of transcription factors"],
				"target": ["TP53 Regulates Transcription of Death Receptors and Ligands"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["Regulation of TP53 Activity through Methylation"],
				"target": ["TP53 Regulates Transcription of Death Receptors and Ligands"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["Oncogene Induced Senescence"],
				"target": ["TP53 Regulates Transcription of Death Receptors and Ligands"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["Regulation of TP53 Degradation"],
				"target": ["TP53 Regulates Transcription of Death Receptors and Ligands"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["Regulation of TP53 Activity through Phosphorylation"],
				"target": ["TP53 Regulates Transcription of Death Receptors and Ligands"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["Oxidative Stress Induced Senescence"],
				"target": ["TP53 Regulates Transcription of Death Receptors and Ligands"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["TP53 Regulates Transcription of Caspase Activators and Caspases"],
				"target": ["TP53 Regulates Transcription of Death Receptors and Ligands"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["SUMOylation of transcription factors"],
				"target": ["AKT phosphorylates targets in the cytosol"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["Regulation of TP53 Activity through Methylation"],
				"target": ["AKT phosphorylates targets in the cytosol"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["Oncogene Induced Senescence"],
				"target": ["AKT phosphorylates targets in the cytosol"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["Regulation of TP53 Degradation"],
				"target": ["AKT phosphorylates targets in the cytosol"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["Regulation of TP53 Activity through Phosphorylation"],
				"target": ["AKT phosphorylates targets in the cytosol"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		},
		{
			"data": {
				"source": ["Oxidative Stress Induced Senescence"],
				"target": ["AKT phosphorylates targets in the cytosol"],
				"color": ["#888888"],
				"edgeSourceShape": ["none"],
				"edgeTargetShape": ["triangle"]
			}
		}
	]
};

var plotdata = [{
      "ID": "SUMOylation of transcription factors",
      "Description": "SUMOylation of transcription factors",
      "GeneRatio": "2/3",
      "BgRatio": "14/9057",
      "pvalue": 6.651e-06,
      "p.adjust": 0.0002,
      "geneID": "TP53/MDM2",
      "Count": 2,
      "_row": "SUMOylation of transcription factors"
    },
    {
      "ID": "Regulation of TP53 Activity through Methylation",
      "Description": "Regulation of TP53 Activity through Methylation",
      "GeneRatio": "2/3",
      "BgRatio": "19/9057",
      "pvalue": 0,
      "p.adjust": 0.0002,
      "geneID": "TP53/MDM2",
      "Count": 2,
      "_row": "Regulation of TP53 Activity through Methylation"
    },
    {
      "ID": "Oncogene Induced Senescence",
      "Description": "Oncogene Induced Senescence",
      "GeneRatio": "2/3",
      "BgRatio": "30/9057",
      "pvalue": 0,
      "p.adjust": 0.0004,
      "geneID": "TP53/MDM2",
      "Count": 2,
      "_row": "Oncogene Induced Senescence"
    },
    {
      "ID": "Regulation of TP53 Degradation",
      "Description": "Regulation of TP53 Degradation",
      "GeneRatio": "2/3",
      "BgRatio": "35/9057",
      "pvalue": 0,
      "p.adjust": 0.0004,
      "geneID": "TP53/MDM2",
      "Count": 2,
      "_row": "Regulation of TP53 Degradation"
    },
    {
      "ID": "Regulation of TP53 Activity through Phosphorylation",
      "Description": "Regulation of TP53 Activity through Phosphorylation",
      "GeneRatio": "2/3",
      "BgRatio": "89/9057",
      "pvalue": 0.0003,
      "p.adjust": 0.002,
      "geneID": "TP53/MDM2",
      "Count": 2,
      "_row": "Regulation of TP53 Activity through Phosphorylation"
    },
    {
      "ID": "Oxidative Stress Induced Senescence",
      "Description": "Oxidative Stress Induced Senescence",
      "GeneRatio": "2/3",
      "BgRatio": "120/9057",
      "pvalue": 0.0005,
      "p.adjust": 0.003,
      "geneID": "TP53/MDM2",
      "Count": 2,
      "_row": "Oxidative Stress Induced Senescence"
    },
    {
      "ID": "TP53 Regulates Transcription of Caspase Activators and Caspases",
      "Description": "TP53 Regulates Transcription of Caspase Activators and Caspases",
      "GeneRatio": "1/3",
      "BgRatio": "12/9057",
      "pvalue": 0.004,
      "p.adjust": 0.0122,
      "geneID": "TP53",
      "Count": 1,
      "_row": "TP53 Regulates Transcription of Caspase Activators and Caspases"
    },
    {
      "ID": "TP53 Regulates Transcription of Death Receptors and Ligands",
      "Description": "TP53 Regulates Transcription of Death Receptors and Ligands",
      "GeneRatio": "1/3",
      "BgRatio": "12/9057",
      "pvalue": 0.004,
      "p.adjust": 0.0122,
      "geneID": "TP53",
      "Count": 1,
      "_row": "TP53 Regulates Transcription of Death Receptors and Ligands"
    },
    {
      "ID": "AKT phosphorylates targets in the cytosol",
      "Description": "AKT phosphorylates targets in the cytosol",
      "GeneRatio": "1/3",
      "BgRatio": "13/9057",
      "pvalue": 0.0043,
      "p.adjust": 0.0122,
      "geneID": "MDM2",
      "Count": 1,
      "_row": "AKT phosphorylates targets in the cytosol"
    },
    {
      "ID": "CREB phosphorylation through the activation of Ras",
      "Description": "CREB phosphorylation through the activation of Ras",
      "GeneRatio": "1/3",
      "BgRatio": "13/9057",
      "pvalue": 0.0043,
      "p.adjust": 0.0122,
      "geneID": "BRAF",
      "Count": 1,
      "_row": "CREB phosphorylation through the activation of Ras"
    },
    {
      "ID": "TP53 Regulates Transcription of Genes Involved in G1 Cell Cycle Arrest",
      "Description": "TP53 Regulates Transcription of Genes Involved in G1 Cell Cycle Arrest",
      "GeneRatio": "1/3",
      "BgRatio": "13/9057",
      "pvalue": 0.0043,
      "p.adjust": 0.0122,
      "geneID": "TP53",
      "Count": 1,
      "_row": "TP53 Regulates Transcription of Genes Involved in G1 Cell Cycle Arrest"
    },
    {
      "ID": "Regulation of TP53 Activity through Association with Co-factors",
      "Description": "Regulation of TP53 Activity through Association with Co-factors",
      "GeneRatio": "1/3",
      "BgRatio": "14/9057",
      "pvalue": 0.0046,
      "p.adjust": 0.0122,
      "geneID": "TP53",
      "Count": 1,
      "_row": "Regulation of TP53 Activity through Association with Co-factors"
    },
    {
      "ID": "TP53 regulates transcription of several additional cell death genes whose specific roles in p53-dependent apoptosis remain uncertain",
      "Description": "TP53 regulates transcription of several additional cell death genes whose specific roles in p53-dependent apoptosis remain uncertain",
      "GeneRatio": "1/3",
      "BgRatio": "14/9057",
      "pvalue": 0.0046,
      "p.adjust": 0.0122,
      "geneID": "TP53",
      "Count": 1,
      "_row": "TP53 regulates transcription of several additional cell death genes whose specific roles in p53-dependent apoptosis remain uncertain"
    },
    {
      "ID": "Spry regulation of FGF signaling",
      "Description": "Spry regulation of FGF signaling",
      "GeneRatio": "1/3",
      "BgRatio": "16/9057",
      "pvalue": 0.0053,
      "p.adjust": 0.0122,
      "geneID": "BRAF",
      "Count": 1,
      "_row": "Spry regulation of FGF signaling"
    },
    {
      "ID": "Formation of Senescence-Associated Heterochromatin Foci (SAHF)",
      "Description": "Formation of Senescence-Associated Heterochromatin Foci (SAHF)",
      "GeneRatio": "1/3",
      "BgRatio": "17/9057",
      "pvalue": 0.0056,
      "p.adjust": 0.0122,
      "geneID": "TP53",
      "Count": 1,
      "_row": "Formation of Senescence-Associated Heterochromatin Foci (SAHF)"
    },
    {
      "ID": "Trafficking of AMPA receptors",
      "Description": "Trafficking of AMPA receptors",
      "GeneRatio": "1/3",
      "BgRatio": "17/9057",
      "pvalue": 0.0056,
      "p.adjust": 0.0122,
      "geneID": "MDM2",
      "Count": 1,
      "_row": "Trafficking of AMPA receptors"
    },
    {
      "ID": "TP53 Regulates Transcription of Genes Involved in G2 Cell Cycle Arrest",
      "Description": "TP53 Regulates Transcription of Genes Involved in G2 Cell Cycle Arrest",
      "GeneRatio": "1/3",
      "BgRatio": "18/9057",
      "pvalue": 0.006,
      "p.adjust": 0.0122,
      "geneID": "TP53",
      "Count": 1,
      "_row": "TP53 Regulates Transcription of Genes Involved in G2 Cell Cycle Arrest"
    },
    {
      "ID": "TP53 Regulates Transcription of Genes Involved in Cytochrome C Release",
      "Description": "TP53 Regulates Transcription of Genes Involved in Cytochrome C Release",
      "GeneRatio": "1/3",
      "BgRatio": "19/9057",
      "pvalue": 0.0063,
      "p.adjust": 0.0122,
      "geneID": "TP53",
      "Count": 1,
      "_row": "TP53 Regulates Transcription of Genes Involved in Cytochrome C Release"
    },
    {
      "ID": "TP53 regulates transcription of additional cell cycle genes whose exact role in the p53 pathway remain uncertain",
      "Description": "TP53 regulates transcription of additional cell cycle genes whose exact role in the p53 pathway remain uncertain",
      "GeneRatio": "1/3",
      "BgRatio": "21/9057",
      "pvalue": 0.0069,
      "p.adjust": 0.0128,
      "geneID": "TP53",
      "Count": 1,
      "_row": "TP53 regulates transcription of additional cell cycle genes whose exact role in the p53 pathway remain uncertain"
    },
    {
      "ID": "Regulation of TP53 Activity through Acetylation",
      "Description": "Regulation of TP53 Activity through Acetylation",
      "GeneRatio": "1/3",
      "BgRatio": "23/9057",
      "pvalue": 0.0076,
      "p.adjust": 0.0131,
      "geneID": "TP53",
      "Count": 1,
      "_row": "Regulation of TP53 Activity through Acetylation"
    },
    {
      "ID": "Constitutive Signaling by AKT1 E17K in Cancer",
      "Description": "Constitutive Signaling by AKT1 E17K in Cancer",
      "GeneRatio": "1/3",
      "BgRatio": "25/9057",
      "pvalue": 0.0083,
      "p.adjust": 0.0131,
      "geneID": "MDM2",
      "Count": 1,
      "_row": "Constitutive Signaling by AKT1 E17K in Cancer"
    },
    {
      "ID": "RAF activation",
      "Description": "RAF activation",
      "GeneRatio": "1/3",
      "BgRatio": "25/9057",
      "pvalue": 0.0083,
      "p.adjust": 0.0131,
      "geneID": "BRAF",
      "Count": 1,
      "_row": "RAF activation"
    },
    {
      "ID": "Pre-NOTCH Transcription and Translation",
      "Description": "Pre-NOTCH Transcription and Translation",
      "GeneRatio": "1/3",
      "BgRatio": "29/9057",
      "pvalue": 0.0096,
      "p.adjust": 0.0146,
      "geneID": "TP53",
      "Count": 1,
      "_row": "Pre-NOTCH Transcription and Translation"
    },
    {
      "ID": "MAP2K and MAPK activation",
      "Description": "MAP2K and MAPK activation",
      "GeneRatio": "1/3",
      "BgRatio": "38/9057",
      "pvalue": 0.0125,
      "p.adjust": 0.0173,
      "geneID": "BRAF",
      "Count": 1,
      "_row": "MAP2K and MAPK activation"
    },
    {
      "ID": "Negative regulation of MAPK pathway",
      "Description": "Negative regulation of MAPK pathway",
      "GeneRatio": "1/3",
      "BgRatio": "38/9057",
      "pvalue": 0.0125,
      "p.adjust": 0.0173,
      "geneID": "BRAF",
      "Count": 1,
      "_row": "Negative regulation of MAPK pathway"
    },
    {
      "ID": "Association of TriC/CCT with target proteins during biosynthesis",
      "Description": "Association of TriC/CCT with target proteins during biosynthesis",
      "GeneRatio": "1/3",
      "BgRatio": "39/9057",
      "pvalue": 0.0129,
      "p.adjust": 0.0173,
      "geneID": "TP53",
      "Count": 1,
      "_row": "Association of TriC/CCT with target proteins during biosynthesis"
    },
    {
      "ID": "G2/M Checkpoints",
      "Description": "G2/M Checkpoints",
      "GeneRatio": "1/3",
      "BgRatio": "50/9057",
      "pvalue": 0.0165,
      "p.adjust": 0.021,
      "geneID": "TP53",
      "Count": 1,
      "_row": "G2/M Checkpoints"
    },
    {
      "ID": "Autodegradation of the E3 ubiquitin ligase COP1",
      "Description": "Autodegradation of the E3 ubiquitin ligase COP1",
      "GeneRatio": "1/3",
      "BgRatio": "51/9057",
      "pvalue": 0.0168,
      "p.adjust": 0.021,
      "geneID": "TP53",
      "Count": 1,
      "_row": "Autodegradation of the E3 ubiquitin ligase COP1"
    },
    {
      "ID": "The role of GTSE1 in G2/M progression after G2 checkpoint",
      "Description": "The role of GTSE1 in G2/M progression after G2 checkpoint",
      "GeneRatio": "1/3",
      "BgRatio": "59/9057",
      "pvalue": 0.0194,
      "p.adjust": 0.0234,
      "geneID": "TP53",
      "Count": 1,
      "_row": "The role of GTSE1 in G2/M progression after G2 checkpoint"
    },
    {
      "ID": "TP53 Regulates Transcription of DNA Repair Genes",
      "Description": "TP53 Regulates Transcription of DNA Repair Genes",
      "GeneRatio": "1/3",
      "BgRatio": "61/9057",
      "pvalue": 0.0201,
      "p.adjust": 0.0234,
      "geneID": "TP53",
      "Count": 1,
      "_row": "TP53 Regulates Transcription of DNA Repair Genes"
    },
    {
      "ID": "DNA Damage/Telomere Stress Induced Senescence",
      "Description": "DNA Damage/Telomere Stress Induced Senescence",
      "GeneRatio": "1/3",
      "BgRatio": "64/9057",
      "pvalue": 0.0211,
      "p.adjust": 0.0238,
      "geneID": "TP53",
      "Count": 1,
      "_row": "DNA Damage/Telomere Stress Induced Senescence"
    },
    {
      "ID": "Recruitment and ATM-mediated phosphorylation of repair and signaling proteins at DNA double strand breaks",
      "Description": "Recruitment and ATM-mediated phosphorylation of repair and signaling proteins at DNA double strand breaks",
      "GeneRatio": "1/3",
      "BgRatio": "75/9057",
      "pvalue": 0.0246,
      "p.adjust": 0.027,
      "geneID": "TP53",
      "Count": 1,
      "_row": "Recruitment and ATM-mediated phosphorylation of repair and signaling proteins at DNA double strand breaks"
    },
    {
      "ID": "G2/M DNA damage checkpoint",
      "Description": "G2/M DNA damage checkpoint",
      "GeneRatio": "1/3",
      "BgRatio": "84/9057",
      "pvalue": 0.0276,
      "p.adjust": 0.0287,
      "geneID": "TP53",
      "Count": 1,
      "_row": "G2/M DNA damage checkpoint"
    },
    {
      "ID": "TP53 Regulates Metabolic Genes",
      "Description": "TP53 Regulates Metabolic Genes",
      "GeneRatio": "1/3",
      "BgRatio": "85/9057",
      "pvalue": 0.0279,
      "p.adjust": 0.0287,
      "geneID": "TP53",
      "Count": 1,
      "_row": "TP53 Regulates Metabolic Genes"
    },
    {
      "ID": "Factors involved in megakaryocyte development and platelet production",
      "Description": "Factors involved in megakaryocyte development and platelet production",
      "GeneRatio": "1/3",
      "BgRatio": "111/9057",
      "pvalue": 0.0363,
      "p.adjust": 0.0363,
      "geneID": "TP53",
      "Count": 1,
      "_row": "Factors involved in megakaryocyte development and platelet production"
    }];

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

ReactDOM.render(<Egmt plotdata={plotdata}/>, mountElement);
ReactDOM.render(<Cytoscape elements={eles}/>, mountcurCy);
ReactDOM.render(<Cytoscape elements={emapcy}/>, mountCytoscape);
ReactDOM.render(<EMroot/>, mountGenelist);
ReactDOM.render(<Cluster geneCountDF={geneCountDF} />, mountCluster);
