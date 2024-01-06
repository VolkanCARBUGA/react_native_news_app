import React from 'react'
import { Image, SafeAreaView, Text, View } from 'react-native'
import style from './news_card_style'
const NewsCard = ({ news }) => {
    console.log(news)
    return (
        <View style={style.container}>
            <Image style={style.image} source={{ uri: news.imageUrl }} ></Image>
            <View style={style.inner_container}>
                <Text style={style.title}>{news.title}</Text>
                <Text style={style.description}>{news.description}</Text>
                <Text style={style.author}>{news.author}</Text>
            </View>


        </View>
    );
}
export default NewsCard;