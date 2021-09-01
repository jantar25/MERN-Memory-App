import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
  appBar: {
    borderBottomRightRadius: 30,
    borderTopLeftRadius:30,
    margin: '30px 0',
    padding: '10px 50px',
    background:'rgb(128,128,128)',
  },
  container:{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  
  image: {
    marginLeft: '10px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '300px',
    
  },
  heading: {
    color: 'rgb(0,0,0)',
    fontSize:"40px",
    fontWeight:'bold',
    textDecoration:'none',
  },
  signIn:{
    fontWeight:'bold',
    color:'Black',
    padding:'10px 30px',
    borderRadius:'15px',
    background:'rgb(110,110,110)',
  },
  logout:{
    fontWeight:'bold',
    color:'Black',
    padding:'10px 30px',
    borderRadius:'15px',
    background:'rgb(110,110,110)',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
    color:'rgb(0,0,0)',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  purple: {
    color: theme.palette.getContrastText('rgb(0,0,0)'),
    backgroundColor: 'black',
  },
  [theme.breakpoints.down("sm")]:{
    appBar: {
      padding: '10px',  
    },
    heading: {
      display:'none',
    },
    
  },
  [theme.breakpoints.down("xs")]:{
    userName: {
      display:'none',
    },
    profile: {
      width: '200px', 
    },
  },
}));