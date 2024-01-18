const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import MobileBiTp from "./screens/MobileBiTp";
import MobileThnhCng from "./screens/MobileThnhCng";
import MobileXa from "./screens/MobileXa";
import MobileThnhCng1 from "./screens/MobileThnhCng1";
import MobileChnhS from "./screens/MobileChnhS";
import MobileThnhCng2 from "./screens/MobileThnhCng2";
import MobileGiao from "./screens/MobileGiao";
import MobileThnhCng3 from "./screens/MobileThnhCng3";
import MobileToLpHc from "./screens/MobileToLpHc";
import IPhone1415ProMax from "./screens/IPhone1415ProMax";
import IPhone1415ProMax1 from "./screens/IPhone1415ProMax1";
import MobileXaLpThnhCng from "./screens/MobileXaLpThnhCng";
import MobileXaLp from "./screens/MobileXaLp";
import MobileChinhSaThnhCng from "./screens/MobileChinhSaThnhCng";
import MobileChnhSaLp from "./screens/MobileChnhSaLp";
import MobileThnhCng4 from "./screens/MobileThnhCng4";
import MobileKtThcLpThnhCng from "./screens/MobileKtThcLpThnhCng";
import MobileKtThcLp from "./screens/MobileKtThcLp";
import MobileLpHcHinTi from "./screens/MobileLpHcHinTi";
import MobileThnhCng5 from "./screens/MobileThnhCng5";
import MobileChnhS1 from "./screens/MobileChnhS1";
import MobileChung from "./screens/MobileChung";
import MobileThnhCng6 from "./screens/MobileThnhCng6";
import MobileGiao1 from "./screens/MobileGiao1";
import MobileThnhCng7 from "./screens/MobileThnhCng7";
import MobileTo from "./screens/MobileTo";
import MobileBiCaTi from "./screens/MobileBiCaTi";
import MobileTngQuan from "./screens/MobileTngQuan";
import MobileVaiTr from "./screens/MobileVaiTr";
import MobileNgNhp from "./screens/MobileNgNhp";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="MobileBiTp"
              component={MobileBiTp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MobileThnhCng"
              component={MobileThnhCng}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MobileXa"
              component={MobileXa}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MobileThnhCng1"
              component={MobileThnhCng1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MobileChnhS"
              component={MobileChnhS}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MobileThnhCng2"
              component={MobileThnhCng2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MobileGiao"
              component={MobileGiao}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MobileThnhCng3"
              component={MobileThnhCng3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MobileToLpHc"
              component={MobileToLpHc}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1415ProMax"
              component={IPhone1415ProMax}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1415ProMax1"
              component={IPhone1415ProMax1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MobileXaLpThnhCng"
              component={MobileXaLpThnhCng}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MobileXaLp"
              component={MobileXaLp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MobileChinhSaThnhCng"
              component={MobileChinhSaThnhCng}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MobileChnhSaLp"
              component={MobileChnhSaLp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MobileThnhCng4"
              component={MobileThnhCng4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MobileKtThcLpThnhCng"
              component={MobileKtThcLpThnhCng}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MobileKtThcLp"
              component={MobileKtThcLp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MobileLpHcHinTi"
              component={MobileLpHcHinTi}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MobileThnhCng5"
              component={MobileThnhCng5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MobileChnhS1"
              component={MobileChnhS1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MobileChung"
              component={MobileChung}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MobileThnhCng6"
              component={MobileThnhCng6}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MobileGiao1"
              component={MobileGiao1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MobileThnhCng7"
              component={MobileThnhCng7}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MobileTo"
              component={MobileTo}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MobileBiCaTi"
              component={MobileBiCaTi}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MobileTngQuan"
              component={MobileTngQuan}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MobileVaiTr"
              component={MobileVaiTr}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MobileNgNhp"
              component={MobileNgNhp}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
