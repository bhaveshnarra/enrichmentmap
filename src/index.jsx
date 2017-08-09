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
ReactDOM.render(<Cytoscape elements={eles}/>, mountCytoscape);
ReactDOM.render(<Genelist/>, mountGenelist);

var eles = [
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
]
