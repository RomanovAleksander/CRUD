import React from 'react';
import ReactDOM from 'react-dom';
import { Loader } from './Loader';

it('should render Loader component', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Loader />, div);
  ReactDOM.unmountComponentAtNode(div);
});
