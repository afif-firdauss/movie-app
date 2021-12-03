import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../config/redux';
import Navigation from '../../config/navigation';

function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

export default App;