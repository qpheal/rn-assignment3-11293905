import {
  SafeAreaView,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  FlatList,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { categoryData } from "./mockData/categoryData";
import { taskData } from "./mockData/taskData";

export default function App() {
  return (
    <SafeAreaView style={{ backgroundColor: "#F7F0E8", padding: 30, flex: 1 }}>
      <ScrollView
        style={{ marginTop: 15 }}
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={{ gap: 20 }}>
          {/**Header */}
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View>
              <Text style={{ fontWeight: 700, fontSize: 32 }}>Hello, Dev</Text>
              <Text style={{ fontSize: 12 }}>14 tasks devs</Text>
            </View>

            <TouchableOpacity
              style={{ backgroundColor: "white", borderRadius: 50, padding: 5 }}
            >
              <Image source={require("./assets/person.png")} />
            </TouchableOpacity>
          </View>

          {/**Search Bar */}
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                backgroundColor: "white",
                padding: 10,
                borderRadius: 50,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 7,
              }}
            >
              <AntDesign name="search1" size={24} color="black" />
              <TextInput
                placeholder="Search"
                placeholderTextColor="black"
                style={{
                  fontSize: 16,
                  fontWeight: "400",
                  width: "70%",
                  height: 30,
                }}
              />
            </View>

            <TouchableOpacity
              style={{
                backgroundColor: "#F0522F",
                padding: 7,
                borderRadius: 10,
              }}
            >
              <Image source={require("./assets/Vector.png")} />
            </TouchableOpacity>
          </View>

          {/**Categories */}
          <View style={{ gap: 10 }}>
            <Text style={{ fontWeight: "700", fontSize: 20 }}>Categories</Text>

            <FlatList
              data={categoryData}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <View
                  style={{
                    gap: 10,
                    backgroundColor: "white",
                    marginRight: 5,
                    padding: 10,
                    borderRadius: 20,
                  }}
                >
                  <View>
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: "700",
                        marginBottom: 1,
                      }}
                    >
                      {item.name}
                    </Text>
                    <Text>{item.description}</Text>
                  </View>
                  <Image source={item.image} />
                </View>
              )}
            />
          </View>

          {/**Ongoing  Tasks*/}
          <View style={{ gap: 15 }}>
            <Text style={{ fontWeight: "700", fontSize: 20 }}>
              Ongoing Tasks
            </Text>

            <FlatList
              data={taskData}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <View
                  style={{
                    gap: 10,
                    backgroundColor: "white",
                    borderWidth: 1,
                    borderStyle: "solid",
                    borderColor: "#E8D1BA",
                    padding: 25,
                    borderRadius: 20,
                    marginBottom: 6,
                    justifyContent: "center",
                  }}
                >
                  <View>
                    <Text style={{ fontSize: 18, fontWeight: "400" }}>
                      {item.name}
                    </Text>
                  </View>
                </View>
              )}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
