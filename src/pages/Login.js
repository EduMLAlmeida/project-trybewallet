import React from 'react';
import './Login.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { saveUser } from '../actions/index';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      isButtonDisabled: true,
    };
  }

  onButtonClick = () => {
    const {
      onClick,
      history,
    } = this.props;
    const {
      email,
    } = this.state;
    onClick(email);
    history.push('/carteira');
  }

  // Função para validação do e-mail retirada de: https://cursos.alura.com.br/forum/topico-como-validar-email-e-senha-em-javascript-80469?gclid=Cj0KCQjw6J-SBhCrARIsAH0yMZiPujZjNtJWahbMcsqITpSg54AO9TU6YSi4HCB5uSXB69BY6S-EzzIaAkj3EALw_wcB

  validateEmail = (email) => {
    const test = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    return test.test(email);
  }

  handleButton = () => {
    const {
      email,
      password,
    } = this.state;
    let testEmail = false;
    if (this.validateEmail(email)) {
      testEmail = true;
    } else {
      testEmail = false;
    }
    let testPassword = false;
    const minLength = 5;
    if (password.length > minLength) {
      testPassword = true;
    } else {
      testPassword = false;
    }
    if (testEmail && testPassword) {
      this.setState({ isButtonDisabled: false });
    } else {
      this.setState({ isButtonDisabled: true });
    }
  }

  onPasswordInputChange = ({ target }) => {
    const {
      value,
    } = target;
    this.setState({ password: value }, this.handleButton);
  }

  onEmailInputChange = ({ target }) => {
    const {
      value,
    } = target;
    this.setState({ email: value }, this.handleButton);
  }

  render() {
    const {
      email,
      password,
      isButtonDisabled,
    } = this.state;
    return (
      <form className="login-form">
        <label htmlFor="email" className="login-element">
          Email:
          <input
            type="email"
            name="email"
            data-testid="email-input"
            value={ email }
            onChange={ this.onEmailInputChange }
          />
        </label>
        <label htmlFor="password" className="login-element">
          Senha:
          <input
            type="password"
            name="password"
            data-testid="password-input"
            value={ password }
            onChange={ this.onPasswordInputChange }
          />
        </label>
        <button
          type="button"
          className="login-button login-element"
          onClick={ this.onButtonClick }
          disabled={ isButtonDisabled }
        >
          Entrar
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onClick: (value) => dispatch(saveUser(value)),
});

Login.propTypes = {
  onClick: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
