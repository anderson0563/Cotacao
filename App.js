import { StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import {Brl} from './src/Brl';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <Brl/>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    marginHorizontal: 20,
  },
});
