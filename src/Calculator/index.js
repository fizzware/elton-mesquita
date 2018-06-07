import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from './redux';
import './styles.css';

class Calculator extends Component {
  render() {
    return (
      <div className="outer">
      </div>
    );
  }
}

Calculator.propTypes = {
}

const mapStateToProps = state => ({ calculator: state.calculator });
const mapDispatchToProps = { ...actions };

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
