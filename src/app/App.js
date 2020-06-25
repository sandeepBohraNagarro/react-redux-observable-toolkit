import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">Employer UI</header>
      </div>
    </Provider>
  );
}

export default App;
