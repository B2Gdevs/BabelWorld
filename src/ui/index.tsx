import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {BabelDataComponent} from './components/babel-data';
import '../styles.css';

const App = () => {
  // Get the data from babel.json
  const babelData = window.babelData;

  return <BabelDataComponent data={babelData} />;
};

ReactDOM.render(<App />, document.getElementById('root'));