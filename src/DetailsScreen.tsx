import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {selectMenuItems} from '../store/actions';

const DetailsScreen = ({route}: any) => {
  const {itemId} = route.params;
  const menuItems = useSelector(selectMenuItems);
  const item = menuItems.find((menuItem: any) => menuItem.id === itemId);

  if (!item) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <View>
        <>
          <Text style={styles.itemPrice}>{item.name}</Text>
          <Text style={styles.itemPrice}>{item.price}</Text>
          <Text style={styles.detailsIngredients}>Ingredients Details</Text>
          {item.ingredients.map((i: string, index: number) => (
            <Text style={styles.ingredients} key={index}>
              {index + 1} {i}
            </Text>
          ))}

          <Button title="Add to Cart" />
        </>
      </View>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  itemPrice: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333',
    marginTop: 10,
  },
  detailsIngredients: {
    fontSize: 20,
    color: '#555',
    lineHeight: 28,
    fontWeight: '700',
    marginTop: 20,
  },
  ingredients: {
    fontSize: 18,
    color: '#555',
    lineHeight: 28,
    marginVertical: 10,
  },
  itemName: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333',
  },
});
