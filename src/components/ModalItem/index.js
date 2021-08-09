import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  Modal,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('screen');

const ModalItem = ({ open, item, onClose }) => {
  return (
    <Modal
      visible={open}
      onRequestClose={onClose}
      transparent={true}
      animationType="slide">
      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity style={styles.close} onPress={onClose}>
            <Icon name="close-outline" color="#000" size={20} />
          </TouchableOpacity>
          <Text>ModalItem</Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00000080',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    width: width - 70,
    minHeight: 200,
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 12,
  },
  close: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 20,
    height: 20,
    zIndex: 100
  },
});

ModalItem.propTypes = {
  open: PropTypes.bool.isRequired,
  item: PropTypes.any.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ModalItem;
