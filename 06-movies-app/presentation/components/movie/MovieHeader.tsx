import { View, Text, useWindowDimensions, Image } from 'react-native'
import React from 'react'

interface Props {
    poster: string;
    originalTitle: string;
    title: string;
}


const MovieHeader = (poster, originalTitle, title) => {
    // const { height: screenHeight } = useWindowDimensions()
    return (
        <View>
            <Text>Poster {poster}</Text>
            <Text>Original {originalTitle}</Text>
            <Text>Title {title}</Text>
        </View>
    )
}

export default MovieHeader