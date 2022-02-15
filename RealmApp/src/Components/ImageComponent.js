
import React from 'react'
import {Text, View, Image} from 'react-native'
import styles from './Style'

const ImageComponent =({title, source, score}) =>{

    return(
       
        <View style={{flexDirection:'row', justifyContent:'flex-start'}}>
           
            <Image 
                     style={styles.imageView}
                     source={source}
                
            />
             <Text style={styles.imageTitle}>{title}</Text>
             <Text style={styles.imageTitle}>{score}</Text>


        </View>
          

    )
}

export default ImageComponent