import { useState } from 'react'
import './App.css'
import { Header } from '../components/header'
import { minHeight, minWidth } from '@mui/system'
import { Box, colors } from "@mui/material";
import { Searchbar } from '../components/searchbar';

function App() {
  return (
    <>
      <Box sx ={{
        minHeight: '100vh',
      }}>
        <Header />
        <Searchbar />
      </Box>
    </>
  )
}

export default App
