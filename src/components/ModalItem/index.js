import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  Modal,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  Linking,
  Platform,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Moment from 'moment';

Moment.locale('pt-BR');

const { width } = Dimensions.get('screen');

const ModalItem = ({ open, item, onClose }) => {
  const handleCell = async number => {
    let url = '';

    if (Platform.OS === 'ios') url = `telprompt:${String(number).trim()}`;
    else url = `tel:${String(number).trim()}`;

    const canOpen = await Linking.canOpenURL(url);

    if (canOpen) {
      Linking.openURL(url);
    } else {
      Alert.alert('Ops...', 'URL não pode ser aberta.');
    }
  };

  const handleEmail = async email => {
    const url = `mailto:${email}`;

    const canOpen = await Linking.canOpenURL(url);

    if (canOpen) {
      Linking.openURL(url);
    } else {
      Alert.alert('Ops...', 'URL não pode ser aberta.');
    }
  };

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
          <View style={styles.topContainer}>
            <View>
              <Image
                source={{ uri: item?.picture?.medium }}
                style={styles.image}
              />
            </View>
            <View style={{ marginLeft: 6 }}>
              <Text style={styles.textName}>
                {item?.name?.first} {item?.name?.last}
              </Text>
              <Text style={styles.emailText}>{item?.email}</Text>
              <View style={styles.dataContainer}>
                <View style={{ marginRight: 12 }}>
                  <Text style={styles.label}>Nascimento</Text>
                  <Text style={styles.infoAge}>
                    {Moment(item?.dob?.date).utc(true).format('DD/MM/YYYY')}
                  </Text>
                </View>
                <View>
                  <Text style={styles.label}>Idade</Text>
                  <Text style={styles.infoAge}>{item?.dob?.age}</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.addressContainer}>
            <Text style={styles.labelAddress}>Endereço</Text>
            <Text style={styles.textAddress}>
              Rua: {item?.location?.street?.name},{' '}
              {item?.location?.street?.number} - {item?.location?.city} -{' '}
              {item?.location?.country}
            </Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.buttonCall}
              activeOpacity={0.6}
              onPress={() => handleCell(item?.cell)}>
              <Text style={styles.textButton}>Ligar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonEmail}
              activeOpacity={0.6}
              onPress={() => handleEmail(item?.email)}>
              <Text style={[styles.textButton, { color: '#fff' }]}>
                Enviar E-mail
              </Text>
            </TouchableOpacity>
          </View>
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
    zIndex: 100,
  },
  topContainer: {
    flexDirection: 'row',
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 8,
  },
  dataContainer: {
    width: 180,
    padding: 8,
    flexDirection: 'row',
    backgroundColor: '#a1a2d5',
    borderRadius: 8,
  },
  textName: {
    fontFamily: 'Georama-Bold',
    fontSize: 14,
    marginBottom: 2,
    textAlign: 'left',
  },
  emailText: {
    fontFamily: 'Georama-Regular',
    fontSize: 12,
    marginBottom: 8,
    color: '#888',
  },
  label: {
    fontFamily: 'Georama-Bold',
    fontSize: 12,
    marginBottom: 2,
  },
  infoAge: {
    fontFamily: 'Georama-Regular',
    fontSize: 12,
  },
  addressContainer: {
    width: '100%',
    marginTop: 10,
  },
  labelAddress: {
    fontFamily: 'Georama-Bold',
    fontSize: 12,
  },
  textAddress: {
    fontFamily: 'Georama-Regular',
    fontSize: 12,
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  buttonCall: {
    width: '47%',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#a1a2d5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonEmail: {
    width: '47%',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: '#a1a2d5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    fontFamily: 'Georama-Bold',
    fontSize: 14,
  },
});

ModalItem.propTypes = {
  open: PropTypes.bool.isRequired,
  item: PropTypes.any.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ModalItem;
