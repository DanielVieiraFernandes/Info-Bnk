import { View, Text } from 'react-native'
import React from 'react'
import { useEffect, useState } from 'react';
import auth from "@react-native-firebase/auth"
import firestore, { FirebaseFirestoreTypes } from "@react-native-firebase/firestore"
import { MyButton } from '../../components/MyButton';

export function HomeScreen() {

    const[userCredentials, setUser] = useState<FirebaseFirestoreTypes.DocumentData | null>()

    useEffect(() => {
        async function fetchUserDoc() {
            auth().onAuthStateChanged(async (userId) => {
                const userDoc = await firestore().collection("users").doc(userId?.uid).get();
                if(userDoc){
                    setUser(userDoc.data())
                }
            })
        }
        fetchUserDoc()
    }, [])

    console.log(userCredentials)
    
    return (
    <View style={{justifyContent: 'center', flex: 1}}>
      <MyButton title='Deslogar' onPress={() => auth().signOut()} />
        <Text>{userCredentials?.nome}</Text>
    </View>
  )
}