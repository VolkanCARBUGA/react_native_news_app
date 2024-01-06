import { Dimensions, StyleSheet } from 'react-native'
const style = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor:"grey",


        },
        image: {
height:Dimensions.get("window").height/4,
resizeMode:"stretch",
padding:10,
width:Dimensions.get("window").width/3,
alignContent:"center",
justifyContent:"center",
alignSelf:"center"
        },
        title: {
            fontSize: 20,
        },
        description: {
            marginTop: 5,
        }
    }
)
export default style

