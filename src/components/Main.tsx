import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  mainContainerStyle: {
    padding: 10,
    width: '100%',
    height: '100%',
  },

  textContainerStyle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },

  titleStyle: {
    fontSize: 30,
    textAlign: 'center',
    paddingBottom: 5,
    color: '#363636',
  },

  textStyle: {
    paddingBottom: 2,
  },

  imageStyle: {
    width: '90%',
    height: '80%',
    padding: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

export const Main = () => {
  const sum = 2 + 2;
  const vector = [10, 20, 30, 40, 50];

  return (
    <View style={styles.mainContainerStyle}>
      <Text style={styles.titleStyle}>Bem-Vindo ao Meu App!</Text>

      <View style={styles.textContainerStyle}>
        <Text>
          Esse app é pra dizer que 2+2 pode ser igual a {sum}
          (as vezes não é)
        </Text>
        <Text>Vetor: {vector.join(' - ')}</Text>
        <Text>Um outro vetor:</Text>
        <Image
          style={styles.imageStyle}
          source={require('../assets/im_vector.jpeg')}
        />
      </View>
    </View>
  );
};
