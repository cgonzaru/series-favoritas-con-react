import React from 'react';
import Field from './Field';
import Button from './Button';

class Search extends React.Component {
  render() {
    return (
      <div className="app__search">
        <Field
          textoDelLabel={this.props.textoDelLabel}
          textoDelPlaceholder={this.props.textoDelPlaceholder}
         />
        <Button textoDelBoton={this.props.textoDelBoton}/>
      </div>
    );
  }
}

export default Search;