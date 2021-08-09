import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = ({ title, onPressIcon }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity
        onPress={onPressIcon}
        activeOpacity={0.4}
        style={styles.button}>
        <Icon name="log-out-outline" color="#000" size={26} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: 'Anton-Regular',
    marginLeft: 8,
  },
  button: {
    marginRight: 8,
  },
});

Header.propTypes = {
  title: PropTypes.string.isRequired,
  onPressIcon: PropTypes.func,
};

Header.defaultProps = {
  onPressIcon: () => {},
};

export default Header;
