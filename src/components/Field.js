import React from 'react';

class Field extends React.Component {
  render() {
    return (
      <React.Fragment>
        <label htmlFor="search">{this.props.textoDelLabel}</label>
        <input id="search" name="search" type="text" placeholder={this.props.textoDelPlaceholder} />
      </React.Fragment>
    );
  }
}

export default Field;