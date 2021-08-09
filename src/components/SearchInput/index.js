import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SearchInput = ({ value, onChange, onErase }) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={onChange}
        placeholder="Pesquise aqui..."
        style={styles.input}
      />
      {value !== '' && (
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.6}
          onPress={onErase}>
          <Icon name="close-circle-outline" color="#a1a2d5" size={20} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 8,
    paddingVertical: 6,
    backgroundColor: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 8,
    paddingLeft: 12,
    paddingRight: 36,
    fontFamily: 'Georama-Regular',
  },
  button: {
    position: 'absolute',
    right: 18,
    top: 20,
  },
});

SearchInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onErase: PropTypes.func,
};

SearchInput.defaultProps = {
  onErase: () => {},
};

export default SearchInput;
