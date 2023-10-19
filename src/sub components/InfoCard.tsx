import React from 'react';
import {Info, InfoCardLeftSection, InfoContainer} from '../styles';
import {Image, Text, View} from 'react-native';
import {useSwipeable} from 'react-swipeable';

const InfoCard = (props: {name; aidPicture; schedule}) => {
  const {name, aidPicture, schedule} = props;

  return (
    <InfoContainer>
      <InfoCardLeftSection>
        <Image
          source={{
            uri: aidPicture,
          }}
          style={{borderColor: '#49b0ab', borderWidth: 2, borderRadius: 2}}
          width={50}
          height={50}
        />
        <Info>
          <Text
            style={{
              fontFamily: 'Rubik',
              fontWeight: '500',
              fontSize: 16,
              color: '#1A1C1E',
            }}>
            {name}
          </Text>
          <Text
            style={{
              fontFamily: 'Rubik',
              fontWeight: '400',
              fontSize: 16,
              color: '#1A1C1E',
            }}>
            {schedule}
          </Text>
        </Info>
      </InfoCardLeftSection>
      <Image
        source={require('../assets/arrow.png')}
        style={{alignSelf: 'center'}}
      />
    </InfoContainer>
  );
};

export default InfoCard;
