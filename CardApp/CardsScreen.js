import { View, Text, StyleSheet } from 'react-native';

export default function Cards() {
  return (
    <View style={styles.container}>
      <Text>Cards Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});