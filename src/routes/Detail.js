import React from "react";
import { connect } from "react-redux";

function Detail({ toDo }) {
  return (
    <>
      <h1>detail</h1>
      <h5>{toDo?.text}</h5>
    </>
  );
}

function mapStateToProps(state, ownProps) {
  const {
    match: {
      params: { id },
    },
  } = ownProps;
  return {
    toDo: state.find((toDo) => toDo.id === parseInt(id)),
  };
}

export default connect(mapStateToProps)(Detail);
