import {makeStyles} from "@material-ui/core/styles"

export default makeStyles((theme)=>({
      image: {
        marginLeft: '15px',
      },
      toolBar:{
        background:'rgb(128,128,128)',
        padding:'10px',
        margin:'30px 10px 0px',
        borderRadius: 15,
        
      },
      [theme.breakpoints.down("xs")]:{
        mainContainer: {
          flexDirection: 'column-reverse',
          
        },
        heading:{
          fontSize:"30px",
        }
      }
      
      
}));