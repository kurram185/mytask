import styled from 'styled-components/native';

export const Header = styled.View`
  background-color: #000066;
  align-items: center;
  height: 50px;
  justify-content: space-between;
  flex-direction: row;
  padding-horizontal: 10px;
`;

export const CardSection = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const SearchBar = styled.View`
  border-width: 1px;
  border-color: black;
  flex-direction: row;
  width: 250px;
  height: 50px;
  justify-content: space-between;
`;

export const SearchSection = styled.View`
  flex-direction: row;
  margin-top: 15px;
  padding-horizontal: 10px;
  justify-content: space-between;
  align-items: center;
`;

export const SearchButton = styled.TouchableOpacity`
  background-color: #49b0ab;
  justify-content: center;
  align-items: center;
  width: 48px;
`;

export const SearchInput = styled.TextInput`
  width: 200px;
`;

export const InfoContainer = styled.View`
  border-color: rgb(215, 215, 193);
  border-bottom-width: 1px;
  width: 95%;
  align-self: center;
  padding-vertical: 8px;
  padding-horizontal: 5px;
  flex-direction: row;
  margin-top: 10px;
`;

export const Info = styled.View`
  margin-left: 10px;
`;

export const InfoCardLeftSection = styled.View`
  flex-direction: row;
  width: 95%;
`;

export const Loader = styled.ActivityIndicator`
  margin-top: 20px;
`;
