import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    borderBottomRightRadius: 30,
    borderTopLeftRadius:30,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
    background:'rgb(128,128,128)',
  },
  heading: {
    color: 'rgb(0,0,0)',
    fontSize:"40px",
    fontWeight:'bold',
    textDecoration:'none',
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
    width: '400px',
  },
  signIn:{
    fontWeight:'bold',
    color:'Black',
    padding:'10px 30px',
    borderRadius:'15px',
    background:'rgb(110,110,110)',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  [theme.breakpoints.down("xs")]:{
    heading:{
      fontSize:"25px",
    }
  }
}));