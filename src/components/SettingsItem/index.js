import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableOpacity, StyleSheet, Switch } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SettingsItem = ({
  iconName,
  title,
  iconColor,
  textRight,
  isSwitch,
  onPress,
}) => {
  const [enabled, setEnabled] = useState(false);

  return (
    <TouchableOpacity
      disabled={isSwitch}
      onPress={onPress}
      activeOpacity={0.6}
      style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon name={iconName} color={iconColor} size={26} />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      {isSwitch ? (
        <View style={styles.switchContainer}>
          <Switch
            trackColor={{ false: '#321aaa', true: '#789ddd' }}
            thumbColor={enabled ? '#321aaa' : '#789ddd'}
            value={enabled}
            onValueChange={setEnabled}
          />
        </View>
      ) : (
        <>
          <View style={styles.textRightContainer}>
            <Text style={styles.textRight}>{textRight}</Text>
          </View>
          <View style={styles.chevronContainer}>
            <Icon name="chevron-forward-outline" color="#AAA" size={22} />
          </View>
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 55,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    backgroundColor: '#fff',
  },
  iconContainer: {
    width: '13%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    width: '60%',
    height: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  chevronContainer: {
    position: 'absolute',
    top: 16,
    right: 8,
  },
  textRightContainer: {
    position: 'absolute',
    top: 16,
    right: 30,
  },
  title: {
    fontFamily: 'Georama-Bold',
    fontSize: 16,
  },
  textRight: {
    fontFamily: 'Georama-Regular',
    fontSize: 14,
  },
  switchContainer: {
    width: '27%',
    height: '100%',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});

SettingsItem.propTypes = {
  iconName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  iconColor: PropTypes.string,
  textRight: PropTypes.string,
  isSwitch: PropTypes.bool,
  onPress: PropTypes.func,
};

SettingsItem.defaultProps = {
  iconColor: '#000',
  textRight: '',
  isSwitch: false,
  onPress: () => {},
};

export default SettingsItem;
