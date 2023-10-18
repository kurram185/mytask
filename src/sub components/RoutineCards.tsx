import React from 'react';
import {Image, Switch, Text} from 'react-native';
import styled from 'styled-components/native';
const RoutineCards = (props: {pics; color}) => {
  const {pics, color} = props;
  const Container = styled.View`
    margin-top: 15px;
    align-items: center;
  `;
  const CardBody = styled.View`
    width: 168px;
    height: 100px;
    background-color: ${color};
    border-radius: 12px;
    flex-direction: row;
    padding-horizontal: 10px;
    padding-vertical: 10px;
    justify-content: space-between;
  `;
  const CardLeftView = styled.View`
    height: 100%;
  `;
  const CardRightView = styled.View`
    height: 100%;
  `;
  return (
    <Container>
      <Text style={{fontWeight: '500', color: '#1A1C1E'}}>Morning Routine</Text>
      <CardBody>
        <CardLeftView>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '400',
              fontFamily: 'Rubik',
              color: pics == 27 ? '#1F1F1F' : 'white',
            }}>
            Weekdays
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '400',
              fontFamily: 'Rubik',
              color: pics == 27 ? '#1F1F1F' : 'white',
            }}>
            7:00 AM
          </Text>
          <Switch value={true} style={{alignSelf: 'flex-start', top: 15}} />
        </CardLeftView>
        <CardRightView>
          <Image
            source={pics}
            style={{position: 'absolute', alignSelf: 'flex-end'}}
          />
          {pics === 27 ? (
            <Image source={require('../assets/cloud.png')} style={{top: 15}} />
          ) : null}

          <Image
            source={require('../assets/arrow.png')}
            style={{top: pics === 27 ? 22 : 64, alignSelf: 'flex-end'}}
          />
        </CardRightView>
      </CardBody>
    </Container>
  );
};
export default RoutineCards;
