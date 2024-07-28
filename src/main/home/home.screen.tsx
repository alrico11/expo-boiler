import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HomeHeaders from '../../components/headers';

export default function HomeScreen() {
  return (
    <View>
      <HomeHeaders role='Admin' name="Asep" totalNotification={12} thumbnail="https://fastly.picsum.photos/id/1/200/300.jpg?hmac=jH5bDkLr6Tgy3oAg5khKCHeunZMHq0ehBZr6vGifPLY" />
      {/* content */}
      <View>
        <Text>HOME</Text>
      </View>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "#FFFF",
//     flexDirection: 'row',
//   },
// });
