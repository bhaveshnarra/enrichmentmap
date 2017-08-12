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
    "font-size": 4,
    "background-color": "#ea8a31",
  },
};

const defaultEdgeStyle = {
  selector: "edge",
  style: {
    "curve-style": "haystack",
    "haystack-radius": 0,
    width: 5,
    opacity: 0.666,
    "line-color": "#fcc694",
  },
};

const defaultStyle = [defaultNodeStyle, defaultEdgeStyle];

const defaultLayout = {
  name: "circle",
  padding: 2,
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
      cytoscape({ style, elements, layout, container: this.div });
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
  height: "600px",
  layout: defaultLayout,
  style: defaultStyle,
  width: "100%",
};

Cytoscape.propTypes = {
  elements: PropTypes.object.isRequired,
};
