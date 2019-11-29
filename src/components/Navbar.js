import React, {Component} from 'react';
import {ThemeContext} from '../context/themeContext';
import { AuthContext } from '../context/AuthContext';

export default class Navbar extends Component{
    render() {
        return (
            <AuthContext.Consumer>{(authContext) => {
                console.log('asa', authContext);
                return (
                    <ThemeContext.Consumer>{(context) => {
                        const {isAuthenticated, authToggle} = authContext;
                        const {isLightTheme, light, dark} = context;
                        const theme = isLightTheme ? light : dark;
                        return (
                            <nav style= {{background: theme.ui, color: theme.syntax}}>
                                <h1>Context App</h1>
                                <div onClick={authToggle}>
                                    {isAuthenticated ? 'LogIn' : 'Log out'}
                                </div>
                                <ul>
                                    <li>Home</li>
                                    <li>About</li>
                                    <li>Contact</li>
                                </ul>
                            </nav>
                        )
                    }}
                    </ThemeContext.Consumer>
                )
            }}
            </AuthContext.Consumer>
        )
    }
}