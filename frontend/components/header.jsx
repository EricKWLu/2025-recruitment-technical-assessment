import { Box, Typography, Button } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './header.css';
import React, { useState } from "react";

export const Header = () => {
    const buttonTheme = createTheme({
        components: {
            MuiButton: {
                styleOverrides: {
                    root: {
                        margin: '4px',
                        borderRadius: '10px',
                        borderWidth: '1px',
                        borderColor: 'orange',
                        height: '45px',
                        width: '45px',
                        padding: '0',
                        minWidth: '0',
                    }
                }
            }
        }
    })
    
    const [isOpen, setIsOpen] = useState(true);

    const openLogo = "../assets/freeRoomsLogo.png";
    const closedLogo = "../assets/freeroomsDoorClosed.png";

    const toggleImage = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <Box sx={{
            height: '60px',
            borderBottom: '1px solid',
            borderColor: 'grey',
            backgroundColor: 'white',
            width: '100vw',
            display: 'flex',
            alignItems: 'center', 
            padding: '0 16px',
            position: 'fixed',
            top: '0px',
            zIndex: '999',
        }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <img 
                    className='mainLogo' 
                    src={isOpen ? openLogo : closedLogo}
                    onClick={toggleImage}
                    alt='Freerooms Logo' 
                    style={{ height: '40px' }} 
                />
                <h1 className='headerText' 
                style={{ 
                    marginLeft: '10px' , 
                    color: 'orange', 
                    fontFamily: "Roboto"
                }}>Freerooms</h1>
            </Box>

            <Box sx={{
                display: 'flex',
                alignItems: 'center', 
                height: '100%',
                position: 'absolute',
                right: '50px',
            }}>
                <ThemeProvider theme = {buttonTheme}>
                    <Button variant='outlined'>
                        <span className='material-symbols-outlined'>
                            search
                        </span>
                    </Button>
                    <Button variant='outlined'>
                        <span className='material-symbols-outlined'>
                            view_cozy
                        </span>
                    </Button>
                    <Button variant='outlined'>
                        <span className='material-symbols-outlined'>
                            map
                        </span>
                    </Button>
                    <Button variant='outlined'>
                        <span className='material-symbols-outlined'>
                        dark_mode
                        </span>
                    </Button>
                </ThemeProvider>
            </Box>
        </Box>
    );
};
