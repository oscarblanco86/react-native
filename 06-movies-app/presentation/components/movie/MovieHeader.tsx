import { View, Text, useWindowDimensions, Image } from 'react-native'
import React from 'react'

interface Props {
    poster: string;
    originalTitle: string;
    title: string;
}


const MovieHeader = ({poster, originalTitle, title}: Props) => {
    console.log(poster, originalTitle, title)
    const { height: screenHeight } = useWindowDimensions()
    return (
        <>
            <View 
            style={{ height: screenHeight * 0.7}}
            className='shadow-xl shadow-black/20'>
                <View className='flex-1 rounded-b-[25px] overflow-hidden'>
                    <Image 
                    source={{ uri: poster}}
                    resizeMode='cover'
                    className='flex-1'/>
                </View>

                <View className='px-5 mt-5'>
                <Text>Poster {poster}</Text>
                    <Text className='font-normal'>Original {originalTitle}</Text>
                    <Text className='font-semibold text-2xl'>Title {title}</Text>
                </View>
            </View>
        </>
    )
}

export default MovieHeader