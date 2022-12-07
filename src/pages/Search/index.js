import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Search() {
  return (
    <View style={styles.container}>
        <Image style={styles.img}source={require('../../img/azul.jpg')}/>
    
    </View>
  
  );

  
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#191970',
      alignItems: 'center',
      justifyContent: 'center',
    },
    img: {
      height: "80%",
      width:"80%"
    }
  });

