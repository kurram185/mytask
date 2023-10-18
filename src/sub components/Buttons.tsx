import React from 'react';
import {Image} from 'react-native';
import styled from 'styled-components/native';
const Buttons = (props: {pics: string}) => {
  const {pics} = props;
  const Button = styled.View`
    width: 36px;
    height: 36px;
    background-color: white;
    border-radius: 100px;
    align-items: center;
    justify-content: center;
    border-width: 1px;
    border-color: black;
  `;
  return (
    <Button>
      <Image source={pics} />
    </Button>
  );
};
export default Buttons;
