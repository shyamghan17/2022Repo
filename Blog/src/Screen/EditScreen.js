import React, { useState, useContext } from "react";
import { Context } from "../Context/BlogContext";
import BlogPostForm from "../Component/BlogPostForm";

const EditScreen = ({ navigation, route }) => {
  const { state, editBlogPost } = useContext(Context);
  const { item } = route.params;
  
  console.log(item,"navigation")

  const blogPost = state.find((blogPost) => blogPost.item === item);

  return (
    <BlogPostForm
    initialValues={{
        title:item.title,
        content:item.content
      }}
      onSubmit={(item, content ) => {
        editBlogPost( item, content, navigation.pop())
      }}
    />
    
  );
};

export default EditScreen;
