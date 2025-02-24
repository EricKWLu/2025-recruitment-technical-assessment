import { Box, Typography, Button } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import './header.css'

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

    return (
        <Box sx={{
            height: '60px',
            borderBottom: '1px solid',
            borderColor: 'grey',
            width: '100vw',
            display: 'flex',
            alignItems: 'center', 
            padding: '0 16px' 
        }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <img 
                    className="mainLogo" 
                    src="../assets/freeRoomsLogo.png" 
                    alt="Freerooms Logo" 
                    style={{ height: '40px' }} 
                />
                <h2 className="headerText" 
                style={{ marginLeft: '10px' , color: 'orange'}}>Freerooms</h2>
            </Box>

            <Box sx={{
                display: 'flex',
                alignItems: 'center', 
                height: '100%',
                position: 'absolute',
                right: '16px',
            }}>
                <ThemeProvider theme = {buttonTheme}>
                    <Button variant="outlined">
                        <span className="material-symbols-outlined">
                            search
                        </span>
                    </Button>
                    <Button variant="outlined">
                        <span className="material-symbols-outlined">
                            view_cozy
                        </span>
                    </Button>
                    <Button variant="outlined">
                        <span className="material-symbols-outlined">
                            map
                        </span>
                    </Button>
                    <Button variant="outlined">
                        <span className="material-symbols-outlined">
                        dark_mode
                        </span>
                    </Button>
                </ThemeProvider>
            </Box>
        </Box>
    );
};
