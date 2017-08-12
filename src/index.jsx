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
const mountcurCy = $('#emout').get(0);
const mountGenelist = $('#form').get(0);



var eles = {
	"nodes": [
		{
			"data": {
				"id": ["BRAP"],
				"name": ["BRAP"],
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
				"id": ["JAK2"],
				"name": ["JAK2"],
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
				"id": ["MAP2K1"],
				"name": ["MAP2K1"],
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
				"id": ["MAP2K2"],
				"name": ["MAP2K2"],
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
				"id": ["MAP3K11"],
				"name": ["MAP3K11"],
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
				"id": ["MARK3"],
				"name": ["MARK3"],
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
				"id": ["PHB"],
				"name": ["PHB"],
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
				"href": [""],
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
				"href": [""],
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
				"href": [""],
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
				"href": [""],
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
				"href": [""],
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
				"href": [""],
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
				"href": [""],
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
				"href": [""],
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
				"href": [""],
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
				"href": [""],
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
				"href": [""],
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
				"href": [""],
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
				"href": [""],
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
				"href": [""],
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
				"href": [""],
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
				"href": [""],
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
				"href": [""],
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

ReactDOM.render(<Egmt/>, mountElement);
ReactDOM.render(<Cytoscape elements={eles}/>, mountcurCy);
ReactDOM.render(<Cytoscape elements={emapcy}/>, mountCytoscape);
ReactDOM.render(<Genelist/>, mountGenelist);
