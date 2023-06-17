import React from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const cards = [
  {
    id: 1,
    name: "Card 1",
    attackPower: 10,
    defense: 5,
    intelligence: 8,
  },
  {
    id: 2,
    name: "Card 2",
    attackPower: 5,
    defense: 8,
    intelligence: 10,
  },
  {
    id: 3,
    name: "Card 3",
    attackPower: 8,
    defense: 10,
    intelligence: 5,
  },
];

const DashboardPage = () => {
  


const renderCards = () =>{
  return cards.map((card) =>(
    <View key={card.name} style={styles.card}>
          <Text style={styles.cardTitle}>{card.name}</Text>
          <Text style={styles.cardValue}>Attack Power: {card.attackPower}</Text>
          <Text style={styles.cardValue}>Defense: {card.defense}</Text>
          <Text style={styles.cardValue}>Intelligence: {card.intelligence}</Text>
    </View>
  ))
}

return (
    <SafeAreaView style={styles.container}>
      {renderCards()}
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0000FF',
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    margin: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardValue: {
    fontSize: 16,
    marginBottom: 4,
  },
  button: {
    backgroundColor: '#007aff',
    padding: 16,
    borderRadius: 8,
    marginTop: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default DashboardPage;
