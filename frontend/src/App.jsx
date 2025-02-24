import { useState } from 'react'
import './App.css'
import { Header } from '../components/header'
import { minHeight, minWidth } from '@mui/system'
import { Box, colors } from "@mui/material";
import { Searchbar } from '../components/searchbar';
import { List } from '../components/list';

function App() {
  return (
    <>
      <Box sx ={{
        minHeight: '100vh',
      }}>
        <Header />
        <Box sx = {{
          height: '60px',
          width: '100vw',
        }}></Box>
        <Searchbar />
        <List />
      </Box>
    </>
  )
}

export default App
