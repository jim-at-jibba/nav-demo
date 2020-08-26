import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

function AppTabsScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ color: "black" }}>App Tab Screen</Text>
    </View>
  );
}

function WelcomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Welcome Screen</Text>
    </View>
  );
}

function ChooseYourLanguageScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>Choose Lang Screen</Text>
    </View>
  );
}
function HowToUseThisAppScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>How to use Screen</Text>
    </View>
  );
}
const RootStack = createStackNavigator();

function App() {
  const [hasCompletedIntro, setHasCompletedIntro] = React.useState(false);
  const [hasSelectedLanguage, setHasSelectedLanguage] = React.useState(false);
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        {hasCompletedIntro ? (
          <RootStack.Screen name="Home" component={AppTabsScreen} />
        ) : (
          <>
            {!hasSelectedLanguage ? (
              <RootStack.Screen
                name="Choose Your Language"
                component={ChooseYourLanguageScreen}
              />
            ) : (
              <>
                <RootStack.Screen name="Welcome" component={WelcomeScreen} />
                <RootStack.Screen
                  name="HowToUseThisApp"
                  component={HowToUseThisAppScreen}
                />
                <RootStack.Screen name="Home" component={AppTabsScreen} />
              </>
            )}
          </>
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
