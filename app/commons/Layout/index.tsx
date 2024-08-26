import React, { PropsWithChildren } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <SafeAreaView edges={['top', 'bottom']} style={styles.container}>
      {children}
    </SafeAreaView>
  );
};

export default Layout;
