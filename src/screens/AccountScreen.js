import { View, Text } from 'react-native'
import React from 'react'

const AccountScreen = () => {
  return (
    <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
      <Text
        style={{
          fontFamily: 'Montserrat-SemiBold',
          fontSize: 14,
          color: '#333333',
        }}>AccountScreen</Text>
    </View>
  )
}

export default AccountScreen