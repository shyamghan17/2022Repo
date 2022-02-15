import React from 'react'
import {Text, View, TouchableOpacity} from 'react-native'
import styles from './Style'
const CustomButton =({title, onPress}) =>{

    return(
       

            <TouchableOpacity
            style={styles.wrapper}
            onPress={onPress}
            >
                <Text>{title}</Text>
            </TouchableOpacity>

    )
}

export default CustomButton