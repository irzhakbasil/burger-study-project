import React, { Component } from "react";
import axios from "../../axios-orders";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import Spinner from "../../components/UI/Spinner/Spinner";

import Order from "../../components/Order/Order";

class Orders extends Component {
  componentDidMount = () => {
    this.props.onFetchOrders();
  };

  render() {
    let order = <Spinner />;
    if (!this.props.loading) {
      order = this.props.orders.map(order => {
        return <Order key={order.id} order={order} />;
      });
    }
    return <div>{order}</div>;
  }
}

const mapStateToProps = state => {
  return {
    orders: state.order.orders,
    loading: state.order.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchOrders: () => dispatch(actions.fetchOrders())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(Orders, axios));
