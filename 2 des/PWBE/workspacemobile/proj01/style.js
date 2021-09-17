import { StyleSheet } from 'react-native'

var padding = "20px";
export default  StyleSheet.create(
    {
      container: {
        flex: 1,
        backgroundColor: '#C542F5',
        alignItems: 'center',
        justifyContent: 'center'
      },
      title: {
        color: '#F5D142',
        fontSize: '1.5rem',
        fontWeight: 'bold'
      },
      card: {
          backgroundColor: '#919191',
          width: '90%',
          borderRadius: '10px',
          height: '8%',
          marginTop: '3%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingLeft: padding,
          paddingRight: padding
      },
      nomeLoja: {
          color: '#FFF',
          fontWeight: 'bold',
          fontSize: '1.25rem'
      },
      notaloja: {
          color:'#E5E5E5',
          fontWeight: 'bold',
          fontSize: '1rem'
      },
      star:{
          width: '20px',
          height: '20px',
          marginLeft: '5px'
      },
      nota: {
          flexDirection: 'row'
      }
    }
  );