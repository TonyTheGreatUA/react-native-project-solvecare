/*eslint-disable*/
import React, {Component} from 'react';
import Component2 from './Component2';
import {connect} from 'react-redux';
import {RequestStatus} from '../../utils/RequestStatus';

export class Component2Container extends Component {
  render() {
    return (
      <Component2
        creditCardNumber={this.props.creditCardNumber}
        firstName={this.props.firstName}
        lastName={this.props.lastName}
        isFormShown={this.props.isFormShown}
        isLoading={this.props.isLoading}
        isError={this.props.isError}
        isFormShown={this.props.isFormShown}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    creditCardNumber: state.form.creditCardNumber,
    firstName: state.form.firstName,
    lastName: state.form.lastName,
    isFormShown: state.details.isFormShown,
    isLoading: state.details.requestStatus === RequestStatus.Request,
    isError: state.details.requestStatus === RequestStatus.Failure,
  };
};

export default connect(mapStateToProps)(Component2Container);
