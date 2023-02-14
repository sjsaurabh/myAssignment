// import React, {useEffect, useState} from 'react';
// import {ActivityIndicator, FlatList, Text, View} from 'react-native';

// const App = () => {
//   const [isLoading, setLoading] = useState(true);
//   const [data, setData] = useState([]);

//   const getMovies = async () => {
//     try {
//       const response = await fetch('https://reactnative.dev/movies.json');
//       const json = await response.json();
//       setData(json.movies);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     getMovies();
//   }, []);

//   return (
//     <View style={{flex: 1, padding: 24}}>
//       {isLoading ? (
//         <ActivityIndicator />
//       ) : (
//         <FlatList
//           data={data}
//           keyExtractor={({id}) => id}
//           renderItem={({item}) => (
//             <Text>
//               {item.title}, {item.releaseYear}
//             </Text>
//           )}
//         />
//       )}
//     </View>
//   );
// };

// export default App;
import { View, Text, SafeAreaView, ActivityIndicator, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'


const movieURL = "https://reactnative.dev/movies.json"
export default function App() {
  const [isLoading, setLoading] = useState(true)
  const [data1, setData] = useState(null)

  useEffect(() => {
    fetch(movieURL)
      .then((res) => res.json())
      .then((data) => setData(data.movies))
      .catch((error) => console.error(error))
      .finally(setLoading(false));
  })
  return (

    <SafeAreaView style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text>App</Text>
      {
        isLoading ? (<ActivityIndicator />) : (<FlatList
          data={data1}
          keyExtractor={({ ID }) => ID}
          renderItem={({ item }) => {
            return (
              <View>
                <Text> my title:{item.title}</Text>
              </View>
            )
          }}
        />)
      }
    </SafeAreaView>
  )
}

