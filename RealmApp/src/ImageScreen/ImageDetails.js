import React from 'react'
import {Text, View, Image} from 'react-native'
import CustomButton from '../Components/Button'
import ImageComponent from '../Components/ImageComponent'
import styles from '../Components/Style'
const ImageDetails =({title, details}) =>{

    return(
       
        <View >
            <Text>{details}</Text>
          
         
        </View>
          

    )
}

export default ImageDetails