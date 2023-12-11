import React, {useCallback} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';

import {RootStackParamList} from '../../../@types/routes';

type SignupScreenProps = {
  navigation: StackNavigationProp<RootStackParamList>;
};

const SignupScreen: React.FC<SignupScreenProps> = ({navigation}) => {
  const {reset} = navigation || {};

  const loginHandler = useCallback(() => {
    if (!reset) {
      return;
    }
    reset({
      index: 0,
      routes: [{name: 'profile'}],
    });
  }, [reset]);

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../../assets/images/abstract.png')}
      />

      <View style={styles.titleView}>
        <Text style={styles.textTitle}>Improve your skills with us</Text>
      </View>

      <Pressable style={styles.pressable} onPress={loginHandler}>
        <Image
          style={styles.icon}
          source={require('../../../assets/images/google.png')}
        />
        <Text style={styles.text}>Continue with Google</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 24,
    justifyContent: 'flex-end',
    backgroundColor: '#090B0D',
  },
  image: {
    top: 50,
    zIndex: -1,
    height: 340,
    position: 'absolute',
    resizeMode: 'contain',
  },
  text: {
    fontSize: 16,
  },
  titleView: {
    width: '100%',
  },
  textTitle: {
    fontSize: 32,
    maxWidth: '80%',
    color: '#ffffff',
    marginBottom: 40,
    fontWeight: 'bold',
  },
  pressable: {
    height: 55,
    width: '100%',
    borderRadius: 12,
    marginBottom: 45,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#FFF',
    justifyContent: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 24,
  },
});

export default SignupScreen;
