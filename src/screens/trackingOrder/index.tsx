import { Dimensions, Image, PermissionsAndroid, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { BottomDrawer } from '../../components/BottomDrawer';
import { mapImg } from '../../../assets/images';
import CartNav from '../../components/Navbars/cartNav';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_API_KEY } from '../../utils/data';

type TrackingProps = NativeStackScreenProps<RootStackParamList, 'Tracking'>;

const OrderTracking = ({ navigation }: TrackingProps) => {
  const [yourLatitude,setLatitude] = useState<number>(21.1557);
  const [yourLongitude,setLongitude] = useState<number>(79.0849);
  
  useEffect(()=>{
    const requestCameraPermission = async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'LOCATION Permission',
            message:
              'App need permission for tracking order Location',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('You can use the camera');
        } else {
          console.log('Location permission denied');
        }
      } catch (err) {
        console.log(err);
        
      }
    };
    requestCameraPermission()
    getLocation()
  },[])
  
  const yourLocationPoint = { latitude:yourLatitude , longitude:yourLongitude  };
  const startingPoint = { latitude: 21.1565, longitude: 79.0717 }; 


  const getLocation = ()=>{
    Geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        setLatitude(position.coords.latitude)
        setLongitude(position.coords.longitude)
      },
      (error) => {
        console.log(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
  );
  }

  return (
    <View style={styles.mainCon}>
      <View style={styles.NavCon}>
        <CartNav navigation={navigation} NavName='Track Order' LeftIconBgColor='black' LeftIconColor='white' />
      </View>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 21.1466,
          longitude: 79.0882,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      > 
        <Marker
          coordinate={yourLocationPoint}
          title="Your Location"
          description="Your order will be delivered here"
          pinColor="red"
        />

        <Marker
          coordinate={startingPoint}
          title="Restaurant Location"
          description="Your order starts from here"
          pinColor="green"
        />
        <MapViewDirections
        origin={startingPoint}
        destination={yourLocationPoint}
        apikey={GOOGLE_API_KEY}
        strokeWidth={2}
        strokeColor='blue'
      />
      </MapView>
      <BottomDrawer/>
    </View>
  );
};

export default OrderTracking;

const styles = StyleSheet.create({
  mainCon: {
    flex: 1,
    marginTop: -Dimensions.get('window').height * 0.08,
  },
  NavCon: {
    zIndex: 5,
    position: 'relative',
    top: Dimensions.get('window').height * 0.08,
  },
  map: {
    zIndex: 3,
    height: Dimensions.get('window').height * 0.85,
    width: Dimensions.get('window').width * 1,
  },
  getlocation:{
    width:Dimensions.get('window').width * 0.9,
    height:50,
    alignSelf:"center",
    position:"absolute",
    bottom:50,
    backgroundColor:"orange"
  }
});
