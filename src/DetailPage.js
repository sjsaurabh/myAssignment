
import { View, Text, FlatList, StyleSheet ,ScrollView,Button,TouchableOpacity} from 'react-native'
import React, { useEffect, useState } from 'react'

export default function DetailPage({navigation}) {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch('https://api.nationalize.io/?name=nathaniel')
      .then((res) => res.json())
      .then((data) => setUser(data.country),

      )
      .catch((e) => console.log(e))
  }, [])
  return (
  
    <View style={styles.container}>
      <Text style={styles.text1}>COUNTRY DETAILS</Text>

      <FlatList
        data={user}
        renderItem={({ item }) =><Text style={styles.item}>PROBABIITY:{item.probability} COUNTRY_id:{item.country_id} </Text>}
        keyExtractor={({id})=>id}
        
      />
      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.button}>
      <Text style={{fontSize:20}}>Go To Home</Text>
      </TouchableOpacity>
      
     
    </View>
 
  )
}
let styles=StyleSheet.create({
  container:{
   flex:1,
   justifyContent:'center',
   alignItems:'center',
   backgroundColor:'#61dafb' ,
  },
  text1:{
    fontSize:30,
    marginTop:60,
    color:'white',
    // fontFamily:"sans-serif-light",
    // backgroundColor:'black',
  },
  text2:{

  },
  item:{
    fontSize:18,
    backgroundColor:"red",
    marginTop:30,
    padding:20,
    color:'white',
  },
  button:{
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width:335,
    height:50,
    marginBottom:30,
    justifyContent:'center'
}
})

//-----------------------------------------------------------
// {user && user.length > 0 && user.map((userObj, index) => (
      //   <Text key={index}>{userObj.country_id}  {userObj.probability}</Text>
      // ))}