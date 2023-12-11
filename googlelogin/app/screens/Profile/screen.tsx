import React, {useCallback} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import {RootStackParamList} from '../../../@types/routes';

type ProfileScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'signup'>;
};

const ProfileScreen: React.FC<ProfileScreenProps> = ({navigation}) => {
  const date = new Date();
  const {reset} = navigation || {};

  const logoutHandler = useCallback(() => {
    if (!reset) {
      return;
    }
    reset({
      index: 0,
      routes: [{name: 'signup'}],
    });
  }, [reset]);

  return (
    <View style={styles.container}>
      <View style={styles.avatarView}>
        <Image
          style={styles.avatar}
          source={require('../../../assets/images/peep.png')}
        />
      </View>
      <Text style={styles.avatarName}>John Doe</Text>
      <Text style={styles.dateText}>{date.toDateString()}</Text>

      <View style={styles.buttonView}>
        <Pressable style={styles.pressable} onPress={logoutHandler}>
          <Text style={styles.logoutText}>Logout</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 45,
  },
  avatarName: {
    fontSize: 28,
    marginTop: 24,
    color: '#02040E',
    fontWeight: 'bold',
  },
  avatarView: {
    width: 130,
    height: 130,
    borderRadius: 28,
    backgroundColor: '#BEDCD7',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  avatar: {
    width: 120,
    resizeMode: 'contain',
  },
  dateText: {
    fontSize: 14,
    color: '#646466',
  },
  buttonView: {
    flex: 1,
    paddingVertical: 20,
    justifyContent: 'flex-end',
  },
  pressable: {
    height: 55,
    width: '100%',
    marginBottom: 25,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1E56C3',
  },
  logoutText: {
    fontSize: 14,
    color: '#ffffff',
    fontWeight: '800',
  },
});

export default ProfileScreen;
