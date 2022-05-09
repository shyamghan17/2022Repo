import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState} from 'react';

const Search = ({placeholder}) => {
  const [text, setText] = useState('');
  return (
    <View>
      <TextInput
        placeholder={placeholder}
        style={styles.textInput}
        value={text}
        onChangeText={newtext => setText(newtext)}
      />
      <Text>Search {text}</Text>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  textInput: {
    height: 50,
    borderColor: '#232335',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 20,
    margin: 20,
    fontSize: 18,
  },
});
