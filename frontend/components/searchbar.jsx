import { Box, Button, TextField, InputAdornment } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import './searchbar.css'

export const Searchbar = () => {
    return (
        <Box sx = {{display: 'flex', paddingTop: '16px', alignItems: 'center'}}>
            <Box sx={{
                height: '60px',
                display: 'flex',
                alignItems: 'center', 
                paddingLeft: '10px',
                width: '100vw'
            }}>
                <Button variant="outlined"
                sx = {{
                    height: '40px',
                    borderRadius: '8px',
                    color: 'orange',
                    borderColor: 'orange',
                    borderWidth: '2px',
                    margin: '0'
                }}>
                    <span className="material-symbols-outlined">
                        filter_alt  
                    </span>
                    Filters
                </Button>

                <TextField 
                        variant="outlined" 
                        label="Search for a building..." 
                        size="small"
                        sx={{
                            width: "40%",
                            position: 'absolute',
                            left:'50%',
                            transform: 'translateX(-50%)',
                        }}
                        slotProps={{
                            input: {
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                            },
                        }}
                    />
            </Box>

            <Button variant="outlined"
                sx = {{
                    height: '40px',
                    borderRadius: '8px',
                    color: 'orange',
                    borderColor: 'orange',
                    borderWidth: '2px',
                    margin: '0',
                    position: 'absolute',
                    right: '10px'
                }}>
                    <span class="material-symbols-outlined">
                        filter_list
                    </span>
                    Sort
                </Button>
        </Box>
    );
};
