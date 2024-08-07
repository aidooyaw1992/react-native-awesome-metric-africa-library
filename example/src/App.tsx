import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';

import { initMetricSdk } from 'react-native-awesome-metric-africa-library';

export default function App() {
  useEffect(() => {
    initMetricSdk('CLIENT_ID', 'CLIENT_SECRET', true).then(() => {
      console.log('Awesome Metric Africa SDK initialized');
    });
  }, []);

  return <View style={styles.container} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
