import React, { Component } from 'react';

class DeleteButton extends Component {
  render() {
    return <button type="button" data-testid="delete-btn">Deletar despesa</button>;
  }
}

export default DeleteButton;
