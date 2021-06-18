import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { articles: state.articles };
};// hai articles trung ten; neu state thay doi component se re-render

const ConnectedList = ({ articles }) => (
  <ul>
    {articles.map(el => (
      <li key={el.id}>{el.title}</li>
    ))}
  </ul>
);

const List = connect(mapStateToProps)(ConnectedList);
// ket noi prop trong react-stateless-component vs redux state
export default List;