import { Box } from '@mui/material'
import Grid from '@mui/material/Grid2';

const buildings = [
    {
      'name': 'AGSM',
      'rooms_available': 9,
      'building_picture': '../assets/agsm.webp'
    },
    {
      'name': 'Ainsworth Building',
      'rooms_available': 16,
      'building_picture': '../assets/ainsworth.webp'
    },
    {
      'name': 'Anita B Lawrence Centre',
      'rooms_available': 44,
      'building_picture': '../assets/anitab.webp'
    },
    {
      'name': 'Biological Sciences',
      'rooms_available': 6,
      'building_picture': '../assets/biologicalScience.webp'
    },
    {
      'name': 'Biological Science (West)',
      'rooms_available': 8,
      'building_picture': '../assets/biologicalScienceWest.webp'
    },
    {
      'name': 'Blockhouse',
      'rooms_available': 42,
      'building_picture': '../assets/blockhouse.webp'
    },
    {
      'name': 'Business School',
      'rooms_available': 18,
      'building_picture': '../assets/businessSchool.webp'
    },
    {
      'name': 'Civil Engineering Building',
      'rooms_available': 8,
      'building_picture': '../assets/civilBuilding.webp'
    },
    {
      'name': 'Colombo Building',
      'rooms_available': 5,
      'building_picture': '../assets/colombo.webp'
    },
    {
      'name': 'Computer Science & Eng (K17)',
      'rooms_available': 7,
      'building_picture': '../assets/cseBuilding.webp'
    }
  ]

export const List = () =>{
    return (
        <Grid container spacing={4} sx={{ 
            padding: '16px',
            paddingRight: '32px', }}>
        {buildings.map((building, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2.4 }} key={index}>
                <Box
                    className='building-card'
                    sx={{
                        backgroundImage: `url(${building.building_picture})`,
                        backgroundSize: 'cover',
                        height: '300px',
                        backgroundPosition: 'center',
                        display: 'flex',
                        justifyContent: 'flex-end',
                        flexDirection: 'column',
                        alignItems: 'center',
                        color: 'white',
                        borderRadius: '8px',
                        padding: '16px',
                    }}
                >
                    <Box sx = {{
                        marginBottom: '220px',
                        marginLeft:'60%',
                        marginRight: '5%',
                        height: '40px',
                        backgroundColor: 'white',
                        borderRadius: '10px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        minWidth: '50%'
                    }}>
                        <img 
                            src='../assets/greenDot.png'
                            style = {{
                                height: '15px'
                            }}
                        />

                        <p style = {{
                            color: 'black',
                            fontSize: '12px',
                            fontWeight: 'bold',
                            fontFamily: 'Roboto'
                        }}> {building.rooms_available} rooms available </p>
                    </Box>

                    <Box sx = {{
                        width: '100%',
                        height: '50px',
                        borderRadius: '10px',
                        backgroundColor: 'orange',
                        alignItems: 'center',
                        display: 'flex',
                        fontFamily: 'Roboto'
                    }}>
                        <h3 style = {{
                            paddingLeft: '5%',
                            fontSize: '15px'
                        }}>{building.name}</h3>
                    </Box>
                </Box>
            </Grid>
        ))}
    </Grid>
    );
};