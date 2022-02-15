import React, {useState} from 'react'
import {Text, View, Image, FlatList} from 'react-native'
import CustomButton from '../Components/Button'
import ImageComponent from '../Components/ImageComponent'
import styles from '../Components/Style'



const CustomColor =() =>{

    const [colors, setColors] = useState([])
    
    // const currentColor =() =>{
    //     setColors([...colors, randomRgb()])
    // }
    // console.log('colors>>', colors )

    const randomRgb=()=>{
        const red = Math.floor(Math.random() * 256)
        const green = Math.floor(Math.random() * 256)
        const blue = Math.floor(Math.random() * 256)
        return `rgb(${red}, ${green}, ${blue})`
        
    }

    return(
       
        <View >
              <CustomButton
            title='press here to change colors'
            onPress={()=>{
                setColors([...colors, randomRgb()])
            }}
            score='8'

            />

            <FlatList
            data={colors}
            keyExtractor={item => item}
            renderItem={({item})=>{
                return <View style={{height:100, width:100, backgroundColor:item}} />

            }}
             />
            
  
        </View>
          

    )
}

export default CustomColor