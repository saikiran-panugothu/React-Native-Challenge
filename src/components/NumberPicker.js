import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { WheelPicker } from 'react-native-wheel-picker-android';

const wheelPickerData = Array.from({ length: 100 }, (_, index) => String(index + 1)); 

const NumberPicker = () => {
  const [selectedItem, setSelectedItem] = useState(0);

  const onItemSelected = (selectedItem) => {
    setSelectedItem(selectedItem);
  };

  return (
    <View>
      <WheelPicker
        selectedItem={selectedItem}
        data={wheelPickerData}
        onItemSelected={onItemSelected}
        style={styles.wheelPicker}
        itemTextSize={18} 
        selectedItemTextSize={28} 
        selectedItemTextColor="#333333" 
        itemTextColor="#000000" 
        indicatorColor="#333333" 
        selectedItemTextFontFamily	= 'Montserrat-SemiBold'
        itemTextFontFamily='Montserrat-Medium'
      />
    </View>
  );
};

const styles = {
  wheelPicker: {
    width: 350, 
    height: 200, 
  },
};

export default NumberPicker;
