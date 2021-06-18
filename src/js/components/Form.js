import React, { Component } from "react";
import { connect } from "react-redux";
import { addArticle } from "../actions/index";

function mapDispatchToProps(dispatch) {
  return {
    addArticle: article => dispatch(addArticle(article))
  };
}

class ConnectedForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);// re-render thay doi state
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });// dat gia tri cua state title
  }

  handleSubmit(event) {
    event.preventDefault();
    const { title } = this.state;
    this.props.addArticle({ title });// goi props function thuc hien action thay doi state
    this.setState({ title: "" });// 2 addArticle trung ten; article la title  
  }
  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit">SAVE</button>
      </form>
    );
  }
}

const Form = connect(
  null,
  mapDispatchToProps
)(ConnectedForm);

export default Form;