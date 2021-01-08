import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { useFonts, Redressed_400Regular } from '@expo-google-fonts/redressed';
import AppLoading from 'expo-app-loading';


const LandingPage = () => {
  return (
    <View>
    <Text style={{fontFamily: 'Redressed_400Regular', fontSize: 40}}>Landing Page</Text>
    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
    </View>
  )
}

const HomePage = () => {
  return (
    <View>
    <Text style={{fontFamily: 'Redressed_400Regular', fontSize: 40}}>Home Page</Text>
    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
    </View>
  )
}

export default function App() {
  const [page,setPage] = React.useState("landing");

  let [fontsLoaded] = useFonts({
    Redressed_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }


  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity onPress={
          () => {
            setPage('home');
          }
        }>
        <Ionicons name="md-home" size={24} color="black" />
        </TouchableOpacity>
        <Text>Header</Text>
        <Ionicons name="md-menu" size={24} color="black" />
      </View>

      <ScrollView>
      <View style={styles.content}>

        { (() => {
          switch (page) {
            case 'landing':
              return <LandingPage />
            case 'home':
              return <HomePage />
            default:
              return <LandingPage />
          }
        })()
        }
        
      </View>
      </ScrollView>

      <View style={styles.footer}>
      <FontAwesome name="phone" size={24} color="black" />
      <Ionicons name="md-logo-instagram" size={24} color="black" />
      <Ionicons name="mail" size={24} color="black" />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    /* backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center', */
  },
  header:{
    height: 100,
    padding: 20,
    borderBottomColor: 'black',
    borderBottomWidth: 3,
    flexDirection: 'row',
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  content:{
    flex: 4,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    height: 80,
    padding: 20,
    borderTopColor: 'black',
    borderTopWidth: 3,
    flexDirection: 'row',
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
});
