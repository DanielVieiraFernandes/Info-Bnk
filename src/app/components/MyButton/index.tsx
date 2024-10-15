import { Text, TouchableOpacity, TouchableOpacityProps, StyleProp, TextStyle } from 'react-native'
import React from 'react'
import { styles } from './styles'

type Props = TouchableOpacityProps & {
    title: string
    styleTitle?: StyleProp<TextStyle>
}

export function MyButton({title, style, styleTitle, ...rest}: Props) {
  return (
    <TouchableOpacity style={[styles.button, style]} {...rest}>
        <Text style={[styles.textBtt, styleTitle]}>{title}</Text>
    </TouchableOpacity>
  )
}