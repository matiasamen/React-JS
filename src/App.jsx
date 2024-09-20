import React from "react";
import { ChakraProvider } from '@chakra-ui/react'
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";


const App = () => {
  return (
    <ChakraProvider>
    <NavBar />
    <ItemListContainer greeting="Bienvenidos a la pagina de C.M.A."/>
  </ChakraProvider>
  
  );
};

export default App;