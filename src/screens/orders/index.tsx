import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import OrderNav from '../../components/Navbars/orderNav';
import { ordersData } from '../../utils/data';
import OrderItem from '../../components/items/OrderItem';
import HistoryItem from '../../components/items/HistoryItem';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { styles } from './style';
import { Item } from '../../components/items/CategoryItem';
import { RootStackParamList } from '../../navigation';

type OrderProps = NativeStackScreenProps<RootStackParamList, "Order">;

const OrderScreen = ({ navigation }: OrderProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleIndexChange = (index: number) => {
    setSelectedIndex(index);
  };

  const OngoingCom =()=>  <FlatList
  data={ordersData}
  keyExtractor={(item) => item.key}
  renderItem={({ item }) => (
    <OrderItem item={item} navigation={() => navigation.navigate('Tracking')} />
  )}
/>

const HistoryCom = ()=>
  <FlatList
  data={ordersData}
  keyExtractor={(item) => item.key}
  renderItem={({ item }) => <HistoryItem {...item} />}
/>


  return (
    <View style={{ flex: 1 }}>
      <OrderNav navigation={navigation} />
      <View style={styles.con1}>
        <SegmentedControlTab
          values={['Ongoing', 'History']}
          selectedIndex={selectedIndex}
          onTabPress={handleIndexChange}
          tabsContainerStyle={styles.segmentedControl}
          tabStyle={styles.segmentedTab}
          activeTabStyle={styles.activeSegmentedTab}
          tabTextStyle={styles.segmentedText}
          activeTabTextStyle={styles.activeSegmentedText}
        />
      </View>

      {selectedIndex == 0 && (
       <OngoingCom />
      )}
      {selectedIndex == 1 && (
        <HistoryCom />
      )}
    </View>
  );
};



export default OrderScreen;
