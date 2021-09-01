import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: {
    height: 0,
    paddingTop: '56.25%',
    backgroundBlendMode: 'darken',
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
    backgroundColor: 'rgb(128,128,128)',
  },
  overlay: {
    position: 'absolute',
    top: '50px',
    left: '30px',
    color:'rgb(110,110,110, 255)',
  },
  overlay2: {
    position: 'absolute',
    top: '50px',
    right: '20px',
    
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '10px',
  },
  title: {
    padding: '0 15px',
  },
  message:{
    padding:'10px',
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
});