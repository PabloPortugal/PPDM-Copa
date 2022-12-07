import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
        <Image style={styles.img}source={require('../../img/capa.jpeg')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
    img: {
      height: "100%",
      width:"100%"
    }
});