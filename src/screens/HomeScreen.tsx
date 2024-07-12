import { Pressable, Text, View } from "react-native";

const HomeScreen = ({navigation}:any) => {
    const navigate = (route:string) => navigation.navigate(route)
  return (
    <View>
      <Pressable onPress={()=> navigate('Tabs1')}>
        <Text style={{padding:10,fontWeight:"800", backgroundColor:"green",color:"white"}}>Tabs 1</Text>
      </Pressable>
      {/* <Pressable onPress={()=> navigate('Tabs2')}>
        <Text>Tabs 2</Text>
      </Pressable>
      <Pressable onPress={()=> navigate('Tabs3')}>
        <Text>Tabs 3</Text>
      </Pressable> */}
    </View>
  );
};

export default HomeScreen;
