import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const { height } = Dimensions.get('screen');

const ListView = ({ data, onSelectItem }) => {
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.itemContainer}
        activeOpacity={0.6}
        onPress={() => onSelectItem(item)}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: item.picture?.thumbnail }}
            style={styles.image}
          />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>
            {item.name?.first} {item.name?.last}
          </Text>
          <Text style={styles.subtitle}>{item.email}</Text>
          <Text style={styles.subtitle}>Idade: {item.dob?.age}</Text>
        </View>
        <View style={styles.chevron}>
          <Icon name="chevron-forward-outline" color="#AAA" size={20} />
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item, index) => String(index)}
      style={{ maxHeight: height - 250 }}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    borderRadius: 22,
  },
  chevron: {
    position: 'absolute',
    top: 30,
    right: 8,
  },
  imageContainer: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
  },
  itemContainer: {
    height: 80,
    width: '100%',
    flexDirection: 'row',
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    backgroundColor: '#FFF',
  },
  infoContainer: {
      justifyContent: 'center'
  },
  title: {
    fontFamily: 'Georama-Bold',
    textAlign: 'left'
  },
  subtitle: {
    fontFamily: 'Georama-Regular',
    textAlign: 'left'
  }
});

ListView.propTypes = {
  data: PropTypes.array.isRequired,
  onSelectItem: PropTypes.func,
};

ListView.defaultProps = {
  onSelectItem: (item) => {},
};

export default ListView;
