import { View, Text } from 'react-native'
import React, {useEffect, useState} from 'react'
import styles from './Styles'



const localStyles = styles.window

const BloodSugarWindow = (props) => {

    const [bg, setBg] = useState(0)
    const [diff, setDiff] = useState(0)
    const [timeSince, setTimeSince] = useState(0)
    const [timeOfLastReading, setTimeOfLastReading] = useState(0)

    const minutesDiffrence = (unix1, unix2) => {
      const unix1Min = Math.round(unix1/60)
      const unix2Min = Math.round(parseInt(String(unix2).slice(0, String(unix1).length))/60)
      // Math.round(parseInt(String(unix2).slice(0, String(unix1).length))/60)
      
      return unix1Min - unix2Min
    }

    const getBloodSugar = async () => {
      let prevBG = 0;
        const data = fetch("https://alhoggan.herokuapp.com/api/v2/entries?count=2")
            .then(response => response.text())
            .then(body => {
              prevBG = Math.round((parseFloat(body.split("\n")[1].split("\t")[2])/18 + Number.EPSILON) * 10) / 10
              return body.split("\n")[0]
            })
            .then(body => { 
              const dir = body.split("\t")[3].replace("\"", "").replace("\"", "")
              props.onDirChange(dir)
              setTimeOfLastReading(Math.round(parseInt(body.split(" ")[0])*100)/100)
              setDiff(Math.round((Math.round((parseFloat(body.split("\t")[2])/18 + Number.EPSILON) * 10) / 10 - prevBG)*10)/10)
              setBg(Math.round((parseFloat(body.split("\t")[2])/18 + Number.EPSILON) * 10) / 10)
            })
        
            
    }

    useEffect(() => {
        const interval = setInterval(() => getBloodSugar(), 10000)
        return () => {
            clearInterval(interval)
        }
    })

    useEffect(() => {
      const curTime = Math.round((new Date()).getTime() / 1000)
      if (timeOfLastReading !== 0) {
        setTimeSince(minutesDiffrence(curTime, timeOfLastReading))
      }
      
    })

  return (
    <View style={localStyles}>
      <Text style={localStyles.valueText}>{bg}</Text>
      <Text style={localStyles.diffText}>{diff < 0 ? diff : "+"+diff} MMO/L</Text>
      <Text style={localStyles.diffText}>{timeSince} Minutes Ago</Text>
    </View>
  )
}

export default BloodSugarWindow