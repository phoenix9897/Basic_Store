import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Details from "./src/Pages/DetailsScreen/Details.tsx";
import Product from "./src/Pages/ProductsScreen/Products.tsx";
import {AppRegistry} from "react-native";


const Stack = createStackNavigator();
AppRegistry.registerComponent('MyApp', () => MyApp);



const MyApp = () => {
    return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Products" component={Product} options={{
                        title:"Dükkan",
                        headerStyle:{backgroundColor:"#90caf9"},
                        headerTitleStyle:{color:"white"},
                        headerTintColor:"white",
                    }}/>
                    <Stack.Screen name="Details" component={Details} options={{
                        title:"Detay",
                        headerStyle:{backgroundColor:"#90caf9"},
                        headerTitleStyle:{color:"white"},
                        headerTintColor:"white",
                    }}/>
                </Stack.Navigator>
            </NavigationContainer>
    )
}

export default MyApp;
