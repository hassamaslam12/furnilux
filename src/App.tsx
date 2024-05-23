import React from "react";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Screen from "./components/Screen/Screen";
import Screen2 from "./components/Screen2/Screen2";
import Screen3 from "./components/Screen3/Screen3";
import Screen4 from "./components/Screen4/Screen4";
import Screen5 from "./components/Screen5/Screen5";
import Footer from "./components/Footer/Footer";

function App() {
  return (
   <div style={{
    overflowX: 'hidden'
   }}>
      <Navbar />
      <Home/>
      <Screen />
      <Screen2/>
      <Screen3/>
      <Screen4/>
      <Screen5/>
      <Footer/>
   </div>
  );
}

export default App;
