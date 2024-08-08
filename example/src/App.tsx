import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  initMetricSdk,
  initVerification,
} from 'react-native-awesome-metric-africa-library';

export default function App() {
  const CLIENT_KEY = '';
  const CLIENT_SECRET = '';
  useEffect(() => {
    initMetricSdk(CLIENT_KEY, CLIENT_SECRET, false).then(() => {
      initVerification('')
        .then(() => {})
        .catch((e: any) => console.log(e));
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
