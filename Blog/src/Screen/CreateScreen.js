import React, { useContext } from "react";

import { Context } from "../Context/BlogContext";
import BlogPostForm from "../Component/BlogPostForm";

  
const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(Context);


  return (
    <BlogPostForm

    onSubmit={(title, content) => {
        addBlogPost(title, content, () => navigation.navigate("IndexScreen"));
      }}
    />
  );
};

export default CreateScreen;
