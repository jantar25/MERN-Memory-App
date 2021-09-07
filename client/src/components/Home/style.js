import {makeStyles} from "@material-ui/core/styles"

export default makeStyles((theme)=>({
  appBarSearch: {
    borderRadius: 4,
    marginBottom: '1rem',
    display: 'flex',
    padding: '16px',
    background:'rgb(128,128,128)',
  },
  pagination: {
    borderRadius: 4,
    marginTop: '1rem',
    padding: '8px',
    background:'#000000',
  },
  searchButton:{
    background:'#000000',
    color:'#808080',
  },
      [theme.breakpoints.down("xs")]:{
        gridContainer: {
          flexDirection: 'column-reverse',  
        },
       
      },     
}));