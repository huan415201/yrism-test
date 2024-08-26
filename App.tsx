import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Layout } from './app/commons';
import Navigator from './app/navigator';
import { persistor, store } from './app/redux';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout>
          <Navigator />
        </Layout>
      </PersistGate>
    </Provider>
  );
};

export default App;
