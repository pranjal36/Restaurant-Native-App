/* eslint-disable react-hooks/exhaustive-deps */
import {default as React, useEffect} from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchMenuItems, selectMenuItems} from '../store/actions';

const HomeScreen = ({navigation}: any) => {
  const menuItems = useSelector(selectMenuItems);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMenuItems() as any);
  }, []);

  const renderItem = ({item}: any) => (
    <TouchableOpacity
      style={styles.menuItem}
      onPress={() => navigation.navigate('Details', {itemId: item.id})}>
      <View style={styles.menuContainer}>
        <Text style={styles.menuItemName}>{item.name}</Text>
        <Text style={styles.menuItemPrice}>{item.price}</Text>
      </View>
      <View style={styles.button}>
        <Button title="Add to Cart" />
        <Button
          title="View details"
          onPress={() => navigation.navigate('Details', {itemId: item.id})}
        />
      </View>
    </TouchableOpacity>
  );

  if (!menuItems) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={menuItems}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.menuList}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuList: {
    width: '100%',
    paddingHorizontal: 16,
  },
  menuItem: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  menuItemName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    flexGrow: 1,
  },
  menuItemPrice: {
    fontSize: 18,
    color: '#777',
  },
  menuContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
