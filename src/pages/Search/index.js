import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Search() {
  return (
    <View style={styles.container}>
        <Image style={styles.img}source={require('../../img/jogadores.jpeg')}/>
    
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

