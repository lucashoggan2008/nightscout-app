import { View, Text } from 'react-native'
import React from 'react'
import styles from '../Styles'
import { StatusBar } from 'expo-status-bar';

const Home = () => {
  return (
    <View style={styles.home.page}>
        <StatusBar backgroundColor={styles.home.header.backgroundColor} />
        <View style={styles.home.header}>
            <Text style={styles.home.header.text}>Nightscout-App</Text>
        </View>
    </View>
  )
}

export default Home