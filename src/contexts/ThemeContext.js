// Context Provider
import React, { Component, createContext } from "react";

export const ThemeContext = createContext();

export class ThemeProvider extends Component {
  constructor(props) {
    super(props);
    this.state = { isDarkMode: false };
    this.toggleTheme = this.toggleTheme.bind(this);
  }

  toggleTheme() {
    this.setState({ isDarkMode: !this.state.isDarkMode });
  }

  render() {
    // Provides children with value: One value per context
    return (
      <ThemeContext.Provider
        value={{
          ...this.state,
          tastesLikeChicken: true,
          toggleTheme: this.toggleTheme,
        }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeProvider;
