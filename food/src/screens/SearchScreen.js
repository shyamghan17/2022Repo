import React, { useState, useEffect } from 'react'
import {View, StyleSheet, Text, ScrollView} from 'react-native'
import ResultList from '../components/resultsList'
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';



const SearchScreen = ({navigation})=>{
    const [term, setTerm] = useState('')
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice=(price)=>{
        return results.filter(result=>{
            return result.price === price;
        })
    }
    return(
        <>  
        <SearchBar 
        term={term} 
        onTermChange={setTerm}
        onTermSubmit={()=>searchApi(term)} />
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        <ScrollView>
        <ResultList results={filterResultsByPrice('$')} title="Cost Effective" navigation={navigation} />
        
        <ResultList results={filterResultsByPrice('$$')} title="Bit Pricier" navigation={navigation} />
        
        <ResultList results={filterResultsByPrice('$$$')} title="Big Spender" navigation={navigation} />

        <ResultList results={filterResultsByPrice('$$$$')} title="Much Spender" navigation={navigation} />

        </ScrollView>
        </>
    )
}


export default SearchScreen