import React from 'react'
import { Image, SafeAreaView, Text, View } from 'react-native'
import style from './news_card_style'
const NewsCard=({news})=>{
    console.log(news)
    return(
        <View style={style.container}>

<Text style={style.title}>{news.title}</Text>
<Text style={style.description}>{news.description}</Text>
<Image style={style.image} source={{uri:news.imageUrl}} ></Image>
        </View>
    );
}
export default NewsCard;