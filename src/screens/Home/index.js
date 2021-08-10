import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
  Header,
  PageLoading,
  ListView,
  SearchInput,
  ModalItem,
} from '../../components';
import api from '../../service/api';

const Home = () => {
  const [employees, setEmployees] = useState([]);
  const [employeesBkp, setEmployeesBkp] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [selected, setSelected] = useState({});

  const navigation = useNavigation();

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (search) {
      const filter = employees.filter(
        item =>
          String(item.email).includes(search.toLowerCase()) ||
          String(item.name?.first)
            .toLowerCase()
            .includes(search.toLowerCase()) ||
          String(item.name?.last)
            .toLowerCase()
            .includes(search.toLowerCase()) ||
          String(item.dob?.age).toLowerCase().includes(search.toLowerCase()),
      );
      setEmployees(filter);
    } else {
      setEmployees(employeesBkp);
    }
  }, [search]);

  const getData = async () => {
    try {
      const response = await api.get('/api?results=12');
      setEmployees(response.data.results);
      setEmployeesBkp(response.data.results);
      setLoading(false);
    } catch (error) {
      console.log('error->', error);
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Header title="EmployeeList" onPressIcon={() => navigation.goBack()} />
      </View>
      {loading ? (
        <PageLoading />
      ) : (
        <>
          <View>
            <SearchInput
              value={search}
              onChange={value => setSearch(value)}
              onErase={() => setSearch('')}
            />
          </View>
          <View style={{ marginBottom: 40 }}>
            <ListView
              data={employees}
              onSelectItem={value => {
                setOpenModal(true);
                setSelected(value);
              }}
            />
          </View>
        </>
      )}
      <ModalItem
        open={openModal}
        item={selected}
        onClose={() => setOpenModal(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4,
    backgroundColor: '#f1f1f1',
  },
});

export default Home;
