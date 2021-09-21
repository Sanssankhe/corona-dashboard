import { makeStyles, Box, Typography, CircularProgress, Grid  } from "@material-ui/core";
import Card  from './Card';


const useStyles = makeStyles({
  component:{
    flexDirection:'column',
    alignItems: 'center',
    margin: '50px 0',
    display: 'flex',

  },
  container:{
    color: '#8aca2b',
    marginBottom: 40,
  }
}
)
const Cards = ({data: {confirmed, recovered, deaths, lastUpdate }}) => {
  const classes = useStyles();

  if(!confirmed){
    return <CircularProgress />;
  }
  return(
    <Box className= {classes.component}>
      <Typography className = {classes.container} variant="h3">Covid-19 Cases Globally</Typography>
      <Grid container spacing={3} justify="center">
       <Card
         cardtitle="Infected"
         value={confirmed.value}
         desc="Number Of People Infected By Covid-19"
         lastUpdate={lastUpdate}
        />
       <Card
         cardtitle="Recovered"
         value={recovered.value}
         desc="Number Of People Recovered Cases From Covid-19"
         lastUpdate={lastUpdate}
         />
       <Card
         cardtitle="Deaths"
         value={deaths.value}
         desc="Number Of Deaths Caused By Covid-19"
         lastUpdate={lastUpdate}npm i react-countup
         />
      </Grid>

    </Box>
  )
}

export default Cards;