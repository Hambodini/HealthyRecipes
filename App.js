import React, { Component, useState } from 'react';
import { Text, View, Button, Image, TextInput, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const styles = StyleSheet.create({
  img: {
    paddingTop: 50,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 35,
  },
  subTitle: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  regText: {
    fontWeight: 'bold',
    fontSize: 10,
  },
  button: {
    paddingTop: 50,
  },
  textInput: {
    color: 'grey',
    textAlign: 'center',
    width: 200,
  },
});

function HomeScreen({ navigation }) {
  const [Tickets, setTickets] = useState(null);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.title}>Bruschetta Recipe</Text>
      <Image style={styles.img} source={require('./assets/bruschetta.png')} />
      <TextInput
        style={styles.textInput}
        placeholder="Enter the Number of Servings"
        onChangeText={(newText) => setTickets(newText)}
        defaultValue={Tickets}
      />
      <Button
        style={styles.button}
        title="View Recipe"
        onPress={() => {
          navigation.navigate('Details', {
            servings: Tickets,
          });
        }}
      />
    </View>
  );
}

function DetailsScreen({ route }) {
  /* 2. Get the param */
  const { servings } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.title}>Bruschetta</Text>
      <Text style={styles.subTitle}>Ingredients</Text>
      <Text style={styles.regText}>{servings * 4} plum tomatoes</Text>
      <Text style={styles.regText}>{servings * 6} basil leaves</Text>
      <Text style={styles.regText}>{servings * 3} garlic cloves, chopped</Text>
      <Text style={styles.regText}>{servings * 3} TB olive oil</Text>
      <Text style={styles.subTitle}>Directions</Text>
      <Text style={styles.regText}>Combine the ingredients add salt to taste. Top French bread slices with mixture</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          title: 'Healthy Recipes',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Details"
          title="Healthy Recipes"
          component={DetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
