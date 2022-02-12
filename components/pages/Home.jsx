import { View, Text } from 'react-native'
import React, {useState} from 'react'
import styles from '../Styles'
import { StatusBar } from 'expo-status-bar';
import BloodSugarWindow from '../BloodSugarWindow'
import ArrowWindow from '../ArrowWindow'

const Home = () => {
  
  const [direction, setDir] = useState("Flat")
  const [diff, setDiff] = useState(0)
  
  return (
    <React.Fragment>
      <StatusBar backgroundColor={styles.home.header.backgroundColor} />
        <View style={styles.home.header}>
            <Text style={styles.home.header.text}>Nightscout App</Text>
        </View>
    <View style={styles.home.page}>
        <View style={styles.home.body}>
            <BloodSugarWindow onDirChange={dir => setDir(dir)}  />
            <ArrowWindow direction={direction} />
        </View>
    </View>
    </ React.Fragment>
  )
}

export default Home