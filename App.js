import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [value, setValue] = useState(25);

  const previous = () => {
    if (value > 0)
      setValue(Number(value) - 25);
  }

  const next = () => {
    if (value < 100)
      setValue(Number(value) + 25);
  }

  return (
    <View style={styles.container}>
      <Text>
        Loading.....
      </Text>
      <View style={styles.progressBar}>
        <View style={{ backgroundColor: "#8BED4F", width: value.toString() + '%' }} />
      </View>
      <Text>{`${value}`}%</Text>
      <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-evenly' }}>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#FF6961' }]} onPress={previous}>
          <Text style={styles.label}>Anterior</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#90EE90' }]} onPress={next}>
          <Text style={styles.label}>Próximo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 14,
  },
  progressBar: {
    marginVertical: 5,
    height: 20,
    flexDirection: "row",
    width: '100%',
    backgroundColor: 'white',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5
  },
  button: {
    width: 100,
    height: 40,
    top: 20,
    padding: 8,
    borderRadius: 8,
  },
  label: {
    color: '#FFF',
    textAlign: 'center',
    textTransform: 'uppercase'
  }
});