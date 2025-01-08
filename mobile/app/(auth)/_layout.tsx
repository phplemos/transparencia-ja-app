import { Drawer } from "expo-router/drawer";

export default function Layout(){
    return(
        <Drawer screenOptions={{}}>
            <Drawer.Screen name="home" />
            <Drawer.Screen name="feed" />
        </Drawer>
    );
}