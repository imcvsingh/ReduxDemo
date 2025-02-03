import React from 'react';
import { Text, Button, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setUser, clearUser } from '../redux/slices/userSlice';

const HomeScreen = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  const handleSetUser = () => {
    dispatch(setUser({ name: 'John Doe', email: 'john@example.com' }));
  };

  const handleClearUser = () => {
    dispatch(clearUser());
  };

  return (
    <View>
      <Text>Name: {user.name}</Text>
      <Text>Email: {user.email}</Text>
      <Button title="Set User" onPress={handleSetUser} />
      <Button title="Clear User" onPress={handleClearUser} />
    </View>
  );
};

export default HomeScreen;
