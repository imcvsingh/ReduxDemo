import React from 'react';
import { Provider } from 'react-redux';
// import store from './src/redux/store';
import HomeScreen from './src/screens/HomeScreen';
import store from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
};

export default App;
