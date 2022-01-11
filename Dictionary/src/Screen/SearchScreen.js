import React, {useState, useEffect} from 'react';
import {Text, ScrollView, View} from 'react-native';

import SearchBar from '../Components/searchBar';
import useResult from '../hooks/useResult';

const SearchScreen = ({navigation}) => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResult();

  return (
    <>
      <SearchBar
    term={term}
 onTermChange={setTerm}
 onTermSubmit={() => searchApi(term)}
  />
    {errorMessage ? <Text>{errorMessage}</Text> : null} 
      <ScrollView>

      </ScrollView>
    </>
  );
};

export default SearchScreen;
