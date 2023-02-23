import React,{useState} from 'react';
import Posts from './components/post/Posts';
import './App.css';
import Newpost from './components/newpost/newpost';
import NavigationBar from './components/Navbar/NavigationBar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


let DUMMY_POST = [
  {
    id: 1,
    image: "https://picsum.photos/seed/picsum/600/300",
    type: "Article",
    title: "Global Warming",
    description: "This is the current scenario of the world. If this continues the world will soon end.",
    userprofile: "https://picsum.photos/35/35?grayscale",
    username: "Richard Josh"
  },
  {
    id: 2,
    image: "https://picsum.photos/400/200?grayscale",
    type: "Education",
    title: "Global Warming",
    description: "This is the current scenario of the world. If this continues the world will soon end.",
    userprofile: "https://picsum.photos/35/35?grayscale",
    username: "Richa Josh"
  },
  {
    id: 3,
    image: "https://picsum.photos/id/237/600/300",
    type: "Politics",
    title: "Global Warming",
    description: "This is the current scenario of the world. If this continues the world will soon end.",
    userprofile: "https://picsum.photos/35/35?grayscale",
    username: "Richa Ghosh"
  }
];

const App=()=> {

const [posts, setPosts]= useState(DUMMY_POST);

const addPostHandler = (post)=>{
  const updatePost=[post, ...posts]
  setPosts(updatePost);
};

  return (
    <>
    <NavigationBar/>
    <Newpost onAddPost={addPostHandler}/>
    <Posts Posts={posts}/>
    </>
  )
}

export default App;
