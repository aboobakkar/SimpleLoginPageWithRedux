import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Dimensions} from 'react-native'

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  button: {
    marginTop: 30,
    alignSelf:'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.5,
    height: height * 0.07,
    borderWidth: 0,
    borderRadius: 10,
    backgroundColor: '#EBA834',
  },
  text: {
    fontSize: 18,
    color: '#323031'
  }
})

type ButtonProps = {
  children?: any,
  onPress: () => void
}

export const Button = (props: ButtonProps) => {
  const { children, onPress } = props

  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <View>
        <Text>{children}</Text>
      </View>
    </TouchableOpacity>
  )
}