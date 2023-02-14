
import { View, Text, Image, Button ,TouchableOpacity, StyleSheet} from 'react-native'
import React from 'react'

export default function Home({ navigation }) {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#ffc107',
            width: "100%",
            height: "100%",
        }}>


            <Image
                style={{ width: "90%", height: "15%", marginBottom: 40, }}
                source={{
                    uri: 'https://d1myhw8pp24x4f.cloudfront.net/company_logo/1572017277633_b_168.jpg',
                }}
            />
            <TouchableOpacity onPress={() => navigation.navigate('Details')} style={styles.button}>
               <Text style={{fontSize:20,color:'white'}}>Detail Page</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles=StyleSheet.create({
    button:{
        alignItems: 'center',
        backgroundColor: 'skyblue',
        padding: 10,
        width:350,
    }
})