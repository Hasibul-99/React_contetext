import React, { Component } from 'react';
import {ThemeContext} from '../context/themeContext';

export default class BookList extends Component {
    static contextType = ThemeContext;
        
    render() {
        console.log (this.context);
        const {dark, light, isLightTheme} = this.context;
        const theme = isLightTheme ? light : dark;
        return (
            <div className="book-list" style={{background: theme.bg, color: theme.syntex}}>
                <ul>
                    <li>The way of kings </li>
                    <li>The way of the winf</li>
                    <li>The final empire</li>
                </ul>
            </div>
        )
    }
}
