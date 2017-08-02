import React from "react";
import createPlotlyComponent from 'react-plotlyjs';
import Plotly from 'plotly.js/dist/plotly-cartesian';
const PlotlyComponent = createPlotlyComponent(Plotly);


const x = [];
const y = [];

export class Egmt extends React.Component {

  loaddata() {
    for (var i = 0; i < plotdata.length; i++) {
      x.push(plotdata[i]["ID"]);
      y.push(plotdata[i]["Count"]);
    }
    console.log(x)
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
