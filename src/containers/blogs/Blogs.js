import React, {useState, useEffect, useContext} from "react";
import "./Blog.scss";
// import BlogCard from "../../components/blogCard/BlogCard";
// import { blogSection } from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Blogs() {
  const {isDark} = useContext(StyleContext);
  const [mediumBlogs, setMediumBlogs] = useState([]);
  function setMediumBlogsFunction(array) {
    setMediumBlogs(array);
  }

  // function extractTextContent(html) {
  //   return typeof html === "string"
  //     ? html
  //         .split(/<\/p>/i)
  //         .map(part => part.split(/<p[^>]*>/i).pop())
  //         .filter(el => el.trim().length > 0)
  //         .map(el => el.replace(/<\/?[^>]+(>|$)/g, "").trim())
  //         .join(" ")
  //     : NaN;
  // }

  useEffect(() => {
    // if (blogSection.displayMediumBlogs === "true") {
    //   const getProfileData = () => {
    //     fetch("/blogs.json")
    //       .then(result => {
    //         if (result.ok) {
    //           return result.json();
    //         }
    //       })
    //       .then(response => {
    //         setMediumBlogsFunction(response.items);
    //       })
    //       .catch(function (error) {
    //         console.error(
    //           `${error} (because of this error Blogs section could not be displayed. Blogs section has reverted to default)`
    //         );
    //         setMediumBlogsFunction("Error");
    //         blogSection.displayMediumBlogs = "false";
    //       });
    //   };
    //   getProfileData();
    // }
  }, []);

  // if (!blogSection.display) {
  //   return null;
  // }

  return null; // Return null as Blogs section is commented out
}
