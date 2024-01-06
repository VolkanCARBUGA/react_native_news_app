import { Dimensions, StyleSheet } from 'react-native'
const style = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: "white",
            margin:10


        },
        image: {
            height: Dimensions.get("window").height / 5,
            resizeMode: "stretch",
          borderRadius:20,   
          
        },
        bannerImage:{
            height:Dimensions.get("window").height/6,
            width: Dimensions.get("window").width/2,
            margin:10,
            borderRadius:20,
            borderBottomEndRadius:20,
            borderBottomStartRadius:20,
           
           
        },
        title: {
            fontSize: 20,
            fontWeight:"bold",
            textAlign:"left"

        
            
        },
        scrollStyle:{
height:200,
        },
        description: {
           fontSize:15,
           fontStyle:"italic",
           fontWeight:"500",
           marginTop:10,
           textAlign:"center"
        },
        inner_container:{
            padding:10
        },
        author:{
            fontStyle:"italic",
            fontSize:20,
            textAlign:"right",
            fontWeight:"900"
            
        }
    }
)
export default style

