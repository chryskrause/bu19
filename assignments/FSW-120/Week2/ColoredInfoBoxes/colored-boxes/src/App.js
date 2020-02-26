import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Boxes from "./Boxes"

function App() {
  return (
    <div className="App">
      <Boxes 
        Title="Box 1"
        Subtitle="Blue Box" 
        Information="This box is preacful, and calm." 
        style={{backgroundColor: "blue"}}
        />
      <Boxes 
        Title="Box 2" 
        Subtitle="Red Box" 
        Information="This is the box of strength and war." 
        style={{backgroundColor: "red"}}
      />
      <Boxes 
        Title="Box 3" 
        Subtitle="Purple Box" 
        Information="This is the box of royalty and honor." 
        style={{backgroundColor: "purple"}}
      />
      <Boxes 
        Title="Box 4" 
        Subtitle="Black Box" 
        Information="This is the box of power and depth" 
        style={{backgroundColor: "black", color: "white"}}
      />
      <Boxes 
        Title="Box 5" 
        Subtitle="Yellow Box" 
        Information="This is the box of both joy and cowardice" 
        style={{backgroundColor: "yellow"}}
      />
      <Boxes 
        Title="Box 6" 
        Subtitle="Pink box" 
        Information="This is the box of romance and acceptance." 
        style={{backgroundColor: "pink"}}
      />
      <Boxes 
        Title="Box 7" 
        Subtitle="Green Box" 
        Information="This is the box of nature and envy." 
        style={{backgroundColor: "green"}}
      />
      <Boxes 
        Title="Box 8" 
        Subtitle="Gray Box" 
        Information="This is the box of security and intelligence." 
        style={{backgroundColor: "gray"}}
      />
      <Boxes 
        Title="Box 9" 
        Subtitle="Orange Box" 
        Information="This is the box of enery and demanding attention." 
        style={{backgroundColor: "orange"}}
      />
      <Boxes 
        Title="Box 10" 
        Subtitle="Brown Box" 
        Information="This is the box of Earth and home." 
        style={{backgroundColor: "brown"}}
      />
    </div>
  );
}

export default App;

// Create a component that you can reuse 10 times. This component should be able to receive props for:

// Background Color
// Title
// Subtitle
// Information
// This component should be styled and built out well.

// Manually pass in props for each component from a parent component
