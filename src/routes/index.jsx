import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from "../pages/Welcome";
import SignIn from "../pages/SignIn";
import Home from "../pages/Home";
import Maintenance from "../pages/Materials/Maintenance"
import Project from "../pages/Materials/Project";


const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{headerShown: false}}
            />
            <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{headerShown: false}}
            />
            <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
            />
            <Stack.Screen
            name="Maintenance"
            component={Maintenance}
            options={{headerShown: false}}
            />
            <Stack.Screen
            name="Project"
            component={Project}
            options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
}