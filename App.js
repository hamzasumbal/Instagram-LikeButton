import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LikeButton from './src/components/LikeButton'

export default function App() {
  return (
    <View style={styles.container}>
      <View style = {styles.buttonContainer}>
      <LikeButton
        size={{ width: 45, height: 42 }}
        status={true}
        onLiked={() => { console.log("liked!") }}
        onUnliked={() => { console.log("unliked!") }}
        likeImage={require('./assets/liked.png')}
        unlikeImage={require('./assets/like.png')}
      />

      <LikeButton
        size={{ width: 45, height: 42 }}
        status={true}
        onLiked={() => { console.log("liked!") }}
        onUnliked={() => { console.log("unliked!") }}
        likeImage={require('./assets/heartActive.png')}
        unlikeImage={require('./assets/heartInactive.png')}
      />
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  buttonContainer : {
    flexDirection : "row",
    width : "40%",
    justifyContent : "space-between",
  }
});
