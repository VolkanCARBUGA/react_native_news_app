import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import news_data from './news_data.json'
import NewsCard from './components/newsCard';
function App() {
  return (
    <SafeAreaView style={style.container}>
      <View>

<FlatList data={news_data}renderItem={({item})=>
<NewsCard news={item}></NewsCard>

       }></FlatList>
      </View>
    </SafeAreaView>

  );
}

const style=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#ecefff"

  }
})
export default App;

