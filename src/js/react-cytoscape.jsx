import React from "react";
import PropTypes from "prop-types";
import cytoscape from "cytoscape";
import styled from "styled-components";

const Wrapper = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
`;

const defaultNodeStyle = {
  selector: "node",
  style: {
    content: "data(id)",
    "font-size": 20,
    "background-color": "data(color)",
    "width": "data(height)",
    "shape": "data(shape)"
  },
};

const defaultEdgeStyle = {
  selector: "edge",
  style: {
    "curve-style": "haystack",
    "haystack-radius": 0,
    width: 5,
    opacity: 0.666,
    "line-color": "data(color)",
    'target-arrow-shape': 'data(edgeTargetShape)',
  },
};

const defaultStyle = [defaultNodeStyle, defaultEdgeStyle];

const defaultLayout = {
  name: 'cose',

  fit: true, // whether to fit the viewport to the graph
  padding: 15, // the padding on fit
  boundingBox: undefined, // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
  avoidOverlap: true, // prevents node overlap, may overflow boundingBox and radius if not enough space
  nodeDimensionsIncludeLabels: false, // Excludes the label when calculating node bounding boxes for the layout algorithm
  spacingFactor: undefined, // Applies a multiplicative factor (>0) to expand or compress the overall area that the nodes take up
  radius: undefined, // the radius of the circle
  startAngle: 3 / 2 * Math.PI, // where nodes start in radians
  sweep: undefined, // how many radians should be between the first and last node (defaults to full circle)
  clockwise: true, // whether the layout should go clockwise (true) or counterclockwise/anticlockwise (false)
  sort: undefined, // a sorting function to order the nodes; e.g. function(a, b){ return a.data('weight') - b.data('weight') }
  animate: false, // whether to transition the node positions
  animationDuration: 500, // duration of animation in ms if enabled
  animationEasing: undefined, // easing of animation if enabled
  ready: undefined, // callback on layoutready
  stop: undefined // callback on layoutstop
};

export class Cytoscape extends React.Component {
  runCytoscape() {
    const { style, elements, layout } = this.props;

    if (Object.keys(elements).length) {
      var x = elements["nodes"];
      var y = elements["edges"];
      var nodes = [];
      var edges = [];
      for (var i = 0; i < x.length; i++) {
        var obj = {
          data:{
            id: x[i]["data"]["id"][0],
            name: x[i]["data"]["name"][0],
            color: x[i]["data"]["color"][0],
            shape: x[i]["data"]["shape"][0],
            href: x[i]["data"]["href"][0],
            height: x[i]["data"]["height"][0],
            width: x[i]["data"]["width"][0],
            nodeLabelColor: x[i]["data"]["nodeLabelColor"][0]
          }
        };
        nodes.push(obj);
      }
      for (var i = 0; i < y.length; i++) {
        var obj = {
          data:{
            source: y[i]["data"]["source"][0],
            target: y[i]["data"]["target"][0],
            color: y[i]["data"]["color"][0],
            edgeSourceShape: y[i]["data"]["edgeSourceShape"][0],
            edgeTargetShape: y[i]["data"]["edgeTargetShape"][0]
          }
        };
        edges.push(obj);
      }
      elements["nodes"] = nodes;
      elements["edges"] = edges;
      var cy = cytoscape({ style, elements, layout, container: this.div });
      cy.on('tap', 'node', function(){
       try { // your browser may block popups
       window.open( this.data('href') );
     } catch(e){ // fall back on url change
       window.location.href = this.data('href');
     }
   });
    }
  }

  componentDidMount() {
    this.runCytoscape();

  }

  componentDidUpdate() {
    this.runCytoscape();
  }

  render() {
    return (
      <Wrapper
        innerRef={c => (this.div = c)}
        height={this.props.height}
        width={this.props.width}
      />
    );
  }
}

Cytoscape.defaultProps = {
  height: "40vh",
  layout: defaultLayout,
  style: defaultStyle,
  width: "100%",
};

Cytoscape.propTypes = {
  elements: PropTypes.object.isRequired,
};
