import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const InputBasic = ({
  label,
  isPassword,
  thisRef,
  value,
  onChange,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(isPassword);
  const [iconName, setIconName] = useState("eye-outline");

  const handleShowPassword = () => {
    setIconName(iconName === "eye-outline" ? "eye-off-outline" : "eye-outline");
    setShowPassword(!showPassword);
  }

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        ref={thisRef}
        value={value}
        onChangeText={onChange}
        style={styles.input}
        secureTextEntry={showPassword}
        {...props}
      />
      {isPassword && (
        <TouchableOpacity onPress={handleShowPassword} style={styles.iconContainer}>
          <Icon name={iconName} size={22} color="#999" />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    borderColor: '#bbb',
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#dde',
    paddingLeft: 12,
    fontFamily: 'Georama-Medium',
  },
  label: {
    marginBottom: 2,
    fontFamily: 'Georama-Bold',
  },
  iconContainer: {
    position: 'absolute',
    right: 18,
    top: 36
  },
});

InputBasic.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  isPassword: PropTypes.bool,
  isPassword: PropTypes.any,
};

InputBasic.defaultProps = {
  label: '',
  isPassword: false,
  thisRef: null,
};

export default InputBasic;
