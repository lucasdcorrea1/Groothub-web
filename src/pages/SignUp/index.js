import React, { Component } from "react";
import { Link } from "react-router-dom";

// Component
import Header from '../../components/Header';

// image
import Logo from "../../assets/Images/groot.png";
// css
import './styles.css';

// services
import api from "../../services/Api";
import { validateMandatoryValues } from "../../services/Validate";

import {
  Placeholder,
  Notification,
  Alert
} from 'rsuite';
const { Paragraph } = Placeholder;

function openNotification(funcName, description) {
  Notification[funcName]({
    title: funcName,
    description:
      <div>
        <h6>{description}</h6>
        <Paragraph style={{ width: 320 }} rows={1} />
        <Paragraph style={{ width: 280 }} rows={1} />
      </div>
  });
};

class SignUp extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    error: "",
  };

  handleSignUp = async e => {
    e.preventDefault();
    const { username, email, password } = this.state;
    const validateData = [
      {
        value: username,
        mensage: 'Informe seu usuário do Github'
      },
      {
        value: email,
        mensage: 'Informe seu E-mail'
      },
      {
        value: password,
        mensage: 'Informe sua senha'
      }];

    const itemData = await validateMandatoryValues(validateData);
    if (itemData) {
      Alert.warning(`${itemData.mensage}`);
      // openNotification('warning', `${itemData.mensage}`);
      return false;
    };

    try {
      await api.post("/users", { username, email, password });
      Alert.sucess(`'Usuário registrado com sucesso'`);
      // openNotification('sucess', 'Usuário registrado com sucesso');
      this.props.history.push("/");
    } catch (err) {
      console.log(err);
      Alert.error(`Ocorreu um erro ao registrar sua conta Groothub`);
      // openNotification('error', 'Ocorreu um erro ao registrar sua conta Groothub');
    };
  };

  render() {
    return (
      <div> <Header />
        <div className="div-form">
          <form
            className="form-signup"
            onSubmit={this.handleSignUp}>
            <img src={Logo} alt="Groothublogo" />
            <input
              type="text"
              placeholder="Nome de usuário"
              onChange={e => this.setState({ username: e.target.value })}
            />
            <input
              type="email"
              placeholder="Endereço de e-mail"
              onChange={e => this.setState({ email: e.target.value })}
            />
            <input
              type="password"
              placeholder="Senha"
              onChange={e => this.setState({ password: e.target.value })}
            />
            <button type="submit">Cadastrar grátis</button>
            <hr />
            <Link to="/signin">Fazer login</Link>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;