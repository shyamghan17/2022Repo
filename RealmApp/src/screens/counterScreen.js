import React, {useReducer} from 'react'
import {Text, View, Image} from 'react-native'
import CustomButton from '../Components/Button'
import ImageComponent from '../Components/ImageComponent'
import styles from '../Components/Style'


const reducer = (state, action) =>{
    switch (action.type){
        case 'increment':
            return{...state, count: state.count + action.payload}

        case 'decrement':
                return{...state, count: state.count - action.payload}

        default:

        return state;
    }
}

const CounsterScreeen =() =>{
    const [state, dispatch ]= useReducer(reducer, {count: 0})

    return(
       
        <View style={{justifyContent:'center', alignItems:'center'}} >
            
       


            <CustomButton
            title='press here to increase'
            onPress={()=>dispatch({ type: 'increment', payload:1})}
            score='8'

            />
             <CustomButton
            title='press here to decrease'
            onPress={()=> dispatch({type: 'decrement', payload: 1})}
            score='8'

            />
          <View>
            <Text>the number is: {state.count}</Text>
           </View>

        </View>
          

    )
}

export default CounsterScreeen