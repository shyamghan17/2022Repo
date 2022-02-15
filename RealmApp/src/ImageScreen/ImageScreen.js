import React from 'react'
import {Text, View, Image} from 'react-native'
import CustomButton from '../Components/Button'
import ImageComponent from '../Components/ImageComponent'
import styles from '../Components/Style'
import ImageDetails from './ImageDetails'
const ImageScreen =({navigation, }) =>{

    return(
       
        <View >
            
            <ImageDetails
            details='forest'
            />
            
            <ImageDetails
            details='mountain'
            />
            
            <ImageDetails
            details='beach'
            />
            <View style={styles.ImageContainer}>

         
            <ImageComponent
            title='man & horse'
            source={require('../Images/pexels.jpg')}
            score='63'
            />
             <ImageComponent
            title='plant'
            source={require('../Images/images.jpeg')}
            score='6'

            />

         </View>

            <CustomButton
            title='press Image'
            onPress={()=>navigation.navigate('FlatList')}
            score='8'

            />

        </View>
          

    )
}

export default ImageScreen