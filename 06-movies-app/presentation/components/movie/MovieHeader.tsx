import { View, Text, useWindowDimensions, Image, StyleSheet, Pressable } from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import { router } from 'expo-router'
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
            <View style={{
                position: 'absolute',
                zIndex: 99,
                elevation: 9,
                top: 35,
                left: 10,
            }}>
                <Pressable onPress={() => router.back()}>
                    <Ionicons name='arrow-back'
                    size={30}
                    color="white"
                    className="shadow"
                    />
                </Pressable>
            </View>
        
            <View 
                style={{ height: screenHeight * 0.7}}
                className='shadow-xl shadow-black/20'>
                <View 
                    className='flex-1 rounded-b-[25px] overflow-hidden'>
                    <Image 
                        source={{ uri: poster}}
                        resizeMode='cover'
                        className='flex-1'
                        style={[{
                            borderBottomRightRadius: 25,
                            borderBottomLeftRadius: 25,
                            overflow: 'hidden'
                            // borderRadius: 25
                            }]}/>
                </View>

                <View className='px-5 mt-5'>
                    {/* <Text>Poster {poster}</Text> */}
                    <Text 
                        className='font-normal'
                        style={[{
                            fontWeight: '400',

                        }]}
                        >
                    Original {originalTitle}</Text>
                    <Text 
                        className='font-semibold text-2xl'
                        style={[{
                            fontWeight: '600',
                            fontSize: 16,
                            // lineHeight: 2,
                        },
                        // styles.text2xl,
                    ]}
                        >
                    Title {title}</Text>
                </View>
            </View>
        </>
    )
}
// const styles = StyleSheet.create({
//     text2xl: {
//         font-size: 1,
//         line-height: 2removeEventListener,
//     },
// })

export default MovieHeader