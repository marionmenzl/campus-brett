import React from 'react';
import { Component } from 'react';
import SocialBar from '../../components/SocialBar';
import LinkBar from '../../components/LinkBar';
import InputLine from '../../components/InputLine';
import LargeButton from '../../components/LargeButton';
import LogoLight from '../../images/logo-light.png';
import './Login.css';

export default class Login extends Component {
    render() {
        return (
            <React.Fragment>
                <img className="logo-login-dark" src={LogoLight} alt="Campus Brett Logo" />
                <div className="container-login">
                    <InputLine type="email" placeholder="Email" name="email" id="email" />
                    <InputLine type="password" placeholder="Passwort" name="password" id="password" />
                    <LargeButton classes="button-large dark bg-light" text="EINLOGGEN" />
                </div>
                <SocialBar />
                <LinkBar text="REGISTRIEREN" path="/register" />
            </React.Fragment>
        );
    }
}
