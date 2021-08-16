import {makeStyles} from "@material-ui/core/styles"

export default makeStyles((theme)=>({
    appBar: {
        borderBottomRightRadius: 30,
        borderTopLeftRadius:30,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        background:'rgb(128,128,128)',
      },
      heading: {
        color: 'rgb(0,0,0)',
        fontSize:"50px",
        fontWeight:'bold',
        
      },
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