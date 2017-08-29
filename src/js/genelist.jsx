import React from "react";


export class Genelist extends React.Component{

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onCall(this.state.value.split("\n"));

  }

  render(){
    return(
        <form className="well" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="genes">Gene List</label>
            <textarea className="form-control" rows="16" id="genes" value={this.state.value} onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="curcluster">Current Enrichment Map cluster</label>
            <input className="form-control" min="1" value="1" type="number" id="curcluster" />
          </div>
          <div className="form-group">
            <label htmlFor="curclusterpath">Current Cluster Path</label>
            <select className="form-control" id="curclusterpath">
              <option>Path1</option>
              <option>Path2</option>
              <option>Path3</option>
              <option>Path4</option>
            </select>
          </div>
          <button type="submit" className="btn btn-default">Submit</button>
        </form>
    );
  }
}
