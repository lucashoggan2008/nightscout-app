import { View} from 'react-native'
import React from 'react'
import styles from './Styles'
import {SvgXml} from 'react-native-svg'


const Arrow = () => {
    const svgMarkup = `<?xml version="1.0" encoding="iso-8859-1"?>
    <!-- Generator: Adobe Illustrator 18.1.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
        y="0px" viewBox="0 0 195.055 195.055" style="enable-background:new 0 0 195.055 195.055;" xml:space="preserve">
        <g>
            <g>
                <polygon style="fill:#f4edea;" points="33.138,94.882 73.787,54.245 70.047,50.501 23.025,97.527 70.047,144.55 73.787,140.813 
                33.138,100.165 166.837,100.165 166.837,94.882 		" />
                <path style="fill:#f4edea;"
                    d="M97.529,0C43.753,0,0.005,43.751,0.005,97.531c0,53.769,43.748,97.524,97.524,97.524
                s97.52-43.755,97.52-97.524C195.049,43.751,151.305,0,97.529,0z M97.529,190.441c-51.231,0-92.914-41.679-92.914-92.911
                c0-51.242,41.683-92.925,92.914-92.925c51.228,0,92.914,41.683,92.914,92.921C190.443,148.759,148.757,190.441,97.529,190.441z" />
            </g>
        </g>
    </svg>`

    const SvgImage = () => <SvgXml xml={svgMarkup} />
    return <SvgImage />
}

const ArrowWindow = (props) => {
    const rotateMatches = {
        FortyFiveUp:"135deg",
        Flat:"180deg",
        FortyFiveDown:"225deg",
        SingleUp:"90deg",
        SingleDown:"-90deg"
    }
    return (
    <View style={styles.window}>
      <View style={[styles.window.arrowContainer, {transform:[{rotate:rotateMatches[props.direction]}]}]}>
          <Arrow style = {[styles.window.svg, {rotate:rotateMatches[props.direction]}]} />
      </View>
    </View>
  )
}

export default ArrowWindow