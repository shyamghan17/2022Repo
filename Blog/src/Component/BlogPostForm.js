import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
Button,
  TextInput,
} from "react-native";

const BlogPostForm = ({onSubmit, initialValues}) => {

  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

  return (
    <View style={styles.container}>
      <Text>Enter Title</Text>
      <TextInput value={title} style={styles.input} onChangeText={(text) => setTitle(text)} />

      <Text>Enter Content</Text>
      <TextInput
      value={content}
        style={styles.input}
        onChangeText={(text) => setContent(text)}
      />
      <Button
        title="Save Blog Post"
        onPress={() => onSubmit(title, content, ()=> navigation.navigate("IndexScreen")) }
      />
    </View>
  );
};
BlogPostForm.defaultProps= {
    initialValues: {
        title:'',
        content:'',
    }
}
const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 15,
    padding: 5,
    margin: 5,
    borderRadius: 4,
    height: 45,
  },
  container: {
    padding: 10,
  },
});

export default BlogPostForm;
