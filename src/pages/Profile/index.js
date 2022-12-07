import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Profile() {
  return (
    <View style={styles.container}>
    <Image style={styles.img}source={require('../../img/jogos.jpeg')}/>

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
