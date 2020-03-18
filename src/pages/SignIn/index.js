import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import './styles.css';
import Logo from "../../assets/images/groot.png";
import api from "../../services/api";
import { login, logout } from "../../services/auth";
import {
  FormControl,
  Placeholder,
  Notification,
  Button
} from 'rsuite';
const { Paragraph } = Placeholder;

function open(funcName, description) {
  Notification[funcName]({
    title: funcName,
    description:
      <div>
        <h6>{description}</h6>
        <Paragraph style={{ width: 320 }} rows={1} />
        <Paragraph style={{ width: 280 }} rows={1} />
      </div>
  });
}

class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };

  handleSignIn = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    if (!email || !password) {
      open('warning', 'Preencha e-mail e senha para continuar!');
    } else {
      try {
        const response = await api.post("auth/authenticate", { email, password });
        login(response.data);
        open('success', 'Ola User!');
        this.props.history.push("/app");
      } catch (err) {
        console.log(err)
        open('error', `Erro ao realizar login!`)
      }
    }
  };

  render() {
    logout();
    return (
      <container className="div-form">
        <form
          className='form-signin'
          onSubmit={this.handleSignIn}>
          <img src={Logo} alt="Airbnb logo" />
          <input
            placeholder="Default Input"
            name="email"
            type="email"
            onChange={e => this.setState({ email: e.target.value })}
          />
          <input
            class='input-signin'
            placeholder="Default Input"
            name="password"
            type="password"
            onChange={e => this.setState({ password: e.target.value })}
          />
          <Button appearance="primary" type="submit">
            Submit
          </Button>
          <hr />
          <Link to="/signup">Criar conta grátis</Link>
        </form>
      </container>
    );
  }
}

export default withRouter(SignIn);