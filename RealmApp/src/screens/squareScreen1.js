import React, {useState} from "react";
import {View, Text, StyleSheet} from 'react-native'
import ColorCounter from "../Components/ColorCounter";

const COLOR_INCREMENT= 15;

const SquareScreen =()=>{

    const [red, setRed]= useState(0)
    const [green, setGreen]= useState(0)
    const [blue, setBlue]= useState(0)

    const setColor=(color, change)=>
    {
switch (color){

case 'red':
    if (red + change > 255 || red + change <0 ? null : setRed(red + change)){
    return
}
case 'green':
    if (green + change > 255 || green + change <0 ? null : setGreen(green + change)){
    return
}
case 'blue':
    if (blue + change > 255 || blue + change <0 ? null : setBlue(blue + change)){
    return
}
 else{
    setRed(red + change)
}
    return;
}
    };
    return (
         
        <View>
        <ColorCounter 
        onIncrease={()=>setColor('red', COLOR_INCREMENT)  }
        onDecrease={()=>setColor('red', -1*COLOR_INCREMENT) }

        color='Red'/>
        <ColorCounter 
          onIncrease={()=>setColor('blue', +COLOR_INCREMENT)  }
          onDecrease={()=>setColor('blue', -1* COLOR_INCREMENT) }
          color='Blue'/>
        <ColorCounter
          onIncrease={()=>setColor('green', +COLOR_INCREMENT)  }
          onDecrease={()=>setColor('green', -1* COLOR_INCREMENT) }
        color='Green'/>

        <View style={{height:150, width:150,  backgroundColor:`rgb(${red}, ${blue}, ${green})`}}/>
        </View>
    )
}

const styles = StyleSheet.create({

})
export default SquareScreen