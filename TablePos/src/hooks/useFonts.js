import * as Font from 'expo-font';
import { useFonts } from 'expo-font';


  
  const Fonts = () => {
 default useFonts = async () =>
    await Font.loadAsync({
      BreeSerif: require('../../assets/fonts/BreeSerif-Regular.ttf'),
      DidactGothic: require('../../assets/fonts/DidactGothic-Regular.ttf'),
      SquarePeg: require('../../assets/fonts/SquarePeg-Regular.ttf'),
  
    });

    return (
      <View>
        <Text>useFonts</Text>
      </View>
    )
  }
  
  export default Fonts
  
  const styles = StyleSheet.create({})