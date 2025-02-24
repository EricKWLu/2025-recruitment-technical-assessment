import { Box, Button, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './searchbar.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';

export const Searchbar = () => {
    const buttonTheme = createTheme({
        components: {
            MuiButton: {
                styleOverrides: {
                    root: {
                        height: '40px',
                        borderRadius: '8px',
                        color: 'orange',
                        borderColor: 'orange',
                        borderWidth: '2px',
                        margin: '0',
                        textTransform: 'none'
                    }
                }
            }
        }
    })

    return (
        <Box sx = {{display: 'flex', paddingTop: '16px', alignItems: 'center'}}>
            <Box sx={{
                height: '60px',
                display: 'flex',
                alignItems: 'center', 
                paddingLeft: '16px',
                paddingRight: '32px',
                width: '100vw'
            }}>
                <ThemeProvider theme = {buttonTheme}>
                    <Button variant='outlined'>
                        <span className='material-symbols-outlined'>
                            filter_alt  
                        </span>
                        Filters
                    </Button>
                </ThemeProvider>

                <TextField
                        variant='outlined' 
                        size='small'
                        placeholder='Search for a building...'
                        sx={{
                            width: '40%',
                            position: 'absolute',
                            left:'50%',
                            transform: 'translateX(-50%)',
                        }}
                        slotProps={{
                            input: {
                                startAdornment: (
                                    <InputAdornment position='start'>
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                            },
                        }}
                    />
            </Box>

            <ThemeProvider theme={buttonTheme}>
                <Button variant='outlined'
                    sx = {{
                        position: 'absolute',
                        right: '10px'
                    }}>
                        <span className='material-symbols-outlined'>
                            filter_list
                        </span>
                        Sort
                </Button>
            </ThemeProvider>
        </Box>
    );
};
