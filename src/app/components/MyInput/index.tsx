import { View, Text, ViewProps, TextInputProps, TextInput } from 'react-native'
import React from 'react'
import { Controller, ControllerProps } from 'react-hook-form'
import { styles } from './styles'
import { theme } from '../../../theme'

export function MyInput({children, style}:ViewProps) {
  return (
    <View style={[style]}>
      {children}
    </View>
  )
}

type Props = ControllerProps & TextInputProps

function ControlledInput({control, rules, name, ...rest}: Props){
    return(
        <Controller
        control={control}
        rules={rules}
        name={name}
        render={({ field: { onChange, onBlur, value },
        fieldState: {error} }
        ) => (
          <View style={styles.container}>
            <TextInput
            style={styles.txtInput}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholderTextColor={theme.colors.grayColor}
            {...rest}
          />
          </View>
         
        )}
        
      />
    )
}

MyInput.ControlledInput = ControlledInput;
