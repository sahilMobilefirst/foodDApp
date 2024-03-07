import React, { ReactNode } from 'react';
import { View, Text, StyleSheet, StyleProp, ViewStyle, TextStyle } from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab';

interface CustomTabsProps {
  containerStyle?: StyleProp<ViewStyle>;
  selectedIndex: number;
  setSelectedIndex: (index: number) => void;
  tabTitles: string[];
  activeTabTextStyle?: TextStyle;
  tabTextStyle?: TextStyle;
  activeTabStyle?: StyleProp<ViewStyle>;
  tabStyle?: StyleProp<ViewStyle>;
  componentAreaStyle?: StyleProp<ViewStyle>;
  component: () => ReactNode;
}

const CustomTabs: React.FC<CustomTabsProps> = (props) => {
  const {
    containerStyle,
    selectedIndex,
    setSelectedIndex,
    tabTitles,
    activeTabTextStyle,
    tabTextStyle,
    activeTabStyle,
    tabStyle,
    componentAreaStyle,
    component,
  } = props;

  return (
    <View style={[styles.containerStyle, containerStyle]}>
      <SegmentedControlTab
        values={tabTitles}
        selectedIndex={selectedIndex}
        onTabPress={(index) => {
          setSelectedIndex(index);
        }}
        activeTabTextStyle={[
          styles.activeTabTextStyle,
          activeTabTextStyle,
        ]}
        tabTextStyle={[styles.tabTextStyle, tabTextStyle]}
        activeTabStyle={[
          styles.activeTabStyle,
          activeTabStyle,
        ]}
        tabStyle={[styles.tabStyle, tabStyle]}
      />
      <View style={[styles.componentAreaStyle, componentAreaStyle]}>{component()}</View>
    </View>
  );
};

CustomTabs.defaultProps = {
  tabTitles: [],
  selectedIndex: -1,
  setSelectedIndex: () => {},
  activeTabTextStyle: {},
  activeTabStyle: {},
  tabStyle: {},
  componentAreaStyle: {},
  component: () => <Text style={styles.emptyComponent}>No Tab Content to Show</Text>,
};

const styles = StyleSheet.create({
  containerStyle: {},
  activeTabTextStyle: {
    fontSize: 20,
    fontFamily: 'Inter-Regular',
    fontWeight: '500',
    textAlign: 'left',
  },
  tabTextStyle: {
    fontSize: 20,
    fontFamily: 'Inter-Regular',
    fontWeight: '500',
    textAlign: 'left',
    color: "black",
  },
  activeTabStyle: {
    borderColor: "black",
    borderWidth: 1,
    borderBottomWidth: 2,
    backgroundColor:"orange",
  },
  tabStyle: {
    borderColor: "black",
    borderWidth: 1,
    backgroundColor: "white",
  },
  emptyComponent: {
    fontSize:20,
    fontFamily: 'Inter-Regular',
    color: "white",
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 20,
  },
  componentAreaStyle: { height: '100000%',
width:300
},
});

export default CustomTabs;
