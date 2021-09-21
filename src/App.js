import { Component} from 'react';
import { Box, Typography, withStyles } from '@material-ui/core';
import logo from './images/covid-19.jpg';
import Cards from './components/Cards';
import { fetchData } from './service/api';
import Countries from './components/Countries';
import Chart from './components/Chart';


const style = {
  container:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  header:{
    background: '#f5f5f5',
    width: 400,
    textAlign: 'center',
    fontSize: 20,
    padding: 10,
    color: '#777',

  },
  lastUpdate:{
    color: '#777',
    fontSize: 12,

  }
}


class App extends Component{

 state={
    data:{},
    country: ''
  }


  async componentDidMount(){
    const fetchedData = await fetchData();
    this.setState({data: fetchedData})
    console.log(fetchedData);
  }

  handleCountryChange = async(country) => {
    const fetchedData = await fetchData(country);
    this.setState({data: fetchedData, country: country})
    console.log(fetchedData);
  }


  render(){
    const {data} = this.state;
    return(
    <Box className={this.props.classes.container}>
         <Box className={this.props.classes.header}>COVID-19 CORONAVIRUS PANDEMIC </Box>
         <Typography className={this.props.classes.l}>Last Update: {data.lastUpdate && new Date(data.lastUpdate).toDateString()}</Typography>
         <img src={logo} alt="Covid Logo" style={{width:350}} />
         <Cards data={data} />
         <Countries handleCountryChange={this.handleCountryChange} />
         <Chart data={data}/>
    </Box>
    )
  }
}

export default withStyles(style)(App) ;
