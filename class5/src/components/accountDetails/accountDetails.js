import React, { Component } from "react";
import { Card, ListGroup, Container } from "react-bootstrap";

export default class AccountDetails extends Component {
  render() {
    return (
      <Container>
        <Card>
          <Card.Header>ERC20 Account</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>{this.props.account}</ListGroup.Item>
            <ListGroup.Item>
              Balance: <b>{this.props.balance}</b> ERC20 tokens
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Container>
    );
  }
}
