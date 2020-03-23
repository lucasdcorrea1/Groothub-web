import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

// images
import Logo from "../../assets/Images/groot.png";

// styles
import './styles.css';
import {
  Placeholder,
  Notification,
  Button,
  Alert,
} from 'rsuite';

// Component
import Header from '../../components/Header';

// services
import api from "../../services/Api";
import { login, logout } from "../../services/Auth";
import validate from "../../services/Validate";

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

class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };

  handleSignIn = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    const validateData = [
      {
        value: email,
        mensage: 'Informe seu E-mail'
      },
      {
        value: password,
        mensage: 'Informe sua senha'
      }]

    const itemData = await validate.validateMandatoryValues(validateData);
    if (itemData) {
      Alert.warning(`${itemData.mensage}`);
      // openNotification('warning', `${itemData.mensage}`);
      return false;
    }

    try {
      const response = await api.post('auth/Auth.jsenticate', {
        email,
        password
      });
      login(response.data);
      Alert.success('Bem-Vindo!');
      // openNotification('success', 'Bem-Vindo!');
      this.props.history.push("/app");
    } catch (err) {
      Alert.error('Erro ao realizar login!');
      // openNotification('error', `Erro ao realizar login!`)
    };
  };

  render() {
    logout();
    return (
      <div>
        <Header />
        <div className="div-form">
          <form
            className='form-signin'
            onSubmit={this.handleSignIn}>
            <img src={Logo} alt="Groothublogo" />
            <input
              placeholder="E-mail"
              name="email"
              type="email"
              onChange={e => this.setState({ email: e.target.value })}
            />
            <input
              className='input-signin'
              placeholder="Password"
              name="password"
              type="password"
              onChange={e => this.setState({ password: e.target.value })}
            />
            <Button appearance="primary" type="submit">Submit</Button>
            <hr />
            <Link to="/signup">Criar conta grátis</Link>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SignIn);