import React from 'react';
import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import news_data from './news_data.json'
import NewsCard from './components/newsCard';
import banner_data from './news_banner_data.json'
import imageStyle from './components/newsCard/news_card_style'
function App() {

  return (
    <SafeAreaView style={style.container}>
      <Text style={imageStyle.title}> Haberler</Text>


<FlatList ListHeaderComponent={()=>(<ScrollView  horizontal={true} style={imageStyle.scrollStyle}showsVerticalScrollIndicator={true}>{
  banner_data.map(bannerNews=><Image style={imageStyle.bannerImage} source={{uri:bannerNews.imageUrl}}></Image>)}</ScrollView>)}
 keyExtractor={(item,index)=>item.u_id.toString()}
 data={news_data}renderItem={({item})=>
<NewsCard news={item}></NewsCard>

       }></FlatList>
     
    </SafeAreaView>

  );
}

const style=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"white",
    margin:5,
    borderRadius: 20,
    marginRight: 5,

  }
})
export default App;

