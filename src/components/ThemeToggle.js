import React, { Component } from 'react';
import {ThemeContext} from '../context/themeContext';

export default class ThemeToggle extends Component {
    static contextType = ThemeContext;
    render() {
        const {changeTheme} = this.context;
        return (
            <button  onClick={changeTheme}>
                Toggle the theme
            </button>
        )
    }
}
