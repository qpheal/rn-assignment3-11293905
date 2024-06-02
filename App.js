import { SafeAreaView, ScrollView, StyleSheet,Image, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={{backgroundColor:"#F7F0E8", padding:30, flex:1 }}>
    <ScrollView style={{marginTop:15}}>
    
      <View style={{gap: 20}}>
      {/**Header */}
      <View style={{display:"flex", flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
       <View>
        <Text style={{fontWeight:700, fontSize:32}}>Hello, Dev</Text>
        <Text style={{fontSize:12}}>14 tasks devs</Text>
       </View>

       <TouchableOpacity style={{backgroundColor:"white", borderRadius:50, padding:5}}>
       <Image source={require("./assets/person.png")} />
       </TouchableOpacity>
      </View>


      
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
