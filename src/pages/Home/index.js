import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
        <Image style={styles.img}source={require('../../img/amarelo.jpg')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF00',
    alignItems: 'center',
    justifyContent: 'center',
  },
    img: {
      height: "80%",
      width:"80%"
    }
});