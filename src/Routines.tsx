import React, {useEffect, useState} from 'react';
import {Image, Text, View, FlatList, TouchableOpacity} from 'react-native';
import Buttons from './sub components/Buttons';
import Home from './assets/home.png';
import Settings from './assets/Vector.png';
import RoutineCards from './sub components/RoutineCards';
import Filter from './assets/filter_list.png';
import Search from './assets/search.png';
import Moon from './assets/moon.png';
import Sun from './assets/sun.png';
import Sort from './assets/sort.jpg';
import {
  Header,
  CardSection,
  SearchBar,
  SearchSection,
  SearchButton,
  SearchInput,
  Loader,
} from './styles';
import InfoCard from './sub components/InfoCard';
import {fetchData} from './api';

const Routines = () => {
  const [apiData, setApiData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [sorting, setSorting] = useState(true);
  // this function receives data from the function in api file
  const dataReceiving = async () => {
    const data = await fetchData();
    setApiData(data);
  };
  // this function renders card according to data receive from flatlist
  const renderingDataCard = ({item, index}) => {
    return (
      <InfoCard
        name={item.name}
        aidPicture={item.visualAidUrl}
        schedule={item.schedule.Thu}
      />
    );
  };
  // this function used for search query
  const searchData = (query: string) => {
    setSearchQuery(query);
    if (query) {
      const filtered = apiData.filter(item =>
        item.name
          .toUpperCase()
          .includes(query.toUpperCase().trim().replace(/\s/g, '')),
      );
      setApiData(filtered);
    } else {
      dataReceiving();
    }
  };
  //this function is used to sort card in accending or descending order
  const sortData = () => {
    const sortedData = [...apiData];
    sortedData.sort((a, b) => {
      const timestampA = new Date(a.createdAt).getTime();
      const timestampB = new Date(b.createdAt).getTime();
      return sorting ? timestampA - timestampB : timestampB - timestampA;
    });
    setSorting(!sorting);
    setApiData(sortedData);
  };
  useEffect(() => {
    dataReceiving();
  }, []);
  return (
    <View>
      <Header>
        <Buttons pics={Home} />
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            fontFamily: 'Rubik',
            fontWeight: '500',
          }}>
          Routines
        </Text>
        <Buttons pics={Settings} />
      </Header>
      <CardSection>
        <RoutineCards pics={Sun} color={'#cce6ff'} />
        <RoutineCards pics={Moon} color={'#000066'} />
      </CardSection>
      <SearchSection>
        <TouchableOpacity onPress={sortData}>
          <Buttons pics={Sort} />
        </TouchableOpacity>
        <SearchBar>
          <SearchInput value={searchQuery} onChangeText={searchData} />
          <SearchButton onPress={() => searchData(searchQuery)}>
            <Image source={Search} />
          </SearchButton>
        </SearchBar>

        <Buttons pics={Filter} />
      </SearchSection>
      {!apiData ? (
        <FlatList
          data={apiData}
          renderItem={renderingDataCard}
          style={{marginBottom: 270}}
          onRefresh={dataReceiving}
          refreshing={isRefreshing}
        />
      ) : (
        <Loader />
      )}
    </View>
  );
};
export default Routines;
