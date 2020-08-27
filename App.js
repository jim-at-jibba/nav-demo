import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  WelcomeScreen,
  ChooseYourLanguageScreen,
  HowToUseThisAppScreen,
} from "./screens";

const AppTabs = createBottomTabNavigator();

const AppTabsNavigator = () => {
  return (
    <AppTabs.Navigator
      AppTabsBarOptions={{
        labelStyle: {
          fontSize: 15,
          fontWeight: "600",
          marginBottom: 8,
        },
      }}
    >
      <AppTabs.Screen name="Home" component={HomeScreen} />
      <AppTabs.Screen name="App Menu" component={AppMenuScreen} />
    </AppTabs.Navigator>
  );
};

const OnBoarding = createStackNavigator();

const OnBoardingNavigator = () => {
  return (
    <OnBoarding.Navigator>
      <OnBoarding.Screen
        name="Choose Your Language"
        component={ChooseYourLanguageScreen}
      />
      <OnBoarding.Screen name="Welcome" component={WelcomeScreen} />
      <OnBoarding.Screen
        name="HowToUseThisApp"
        component={HowToUseThisAppScreen}
      />
    </OnBoarding.Navigator>
  );
};

const RootStack = createStackNavigator();

function App() {
  const [hasCompletedIntro, setHasCompletedIntro] = React.useState(false);
  // const [hasSelectedLanguage, setHasSelectedLanguage] = React.useState(false);
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        {hasCompletedIntro ? (
          <RootStack.Screen name="Home" component={AppTabsNavigator} />
        ) : (
          <RootStack.Screen name="OnBoarding" component={OnBoardingNavigator} />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
