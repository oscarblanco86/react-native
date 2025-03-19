import { View, Text, FlatList, Image } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { CastInterface } from '@/infraestructure/interface/cast.interface';
import ActorCard from '../components/actor/ActorCard';

interface Props {
  cast: CastInterface[];
}


const CastHorizontalList = ({cast}:Props) => {
  if (!cast || cast.length === 0) {
    return <Text>Loading...</Text>
  }
  // console.log('Cast received in CastHorizontalList:', cast);
  return (
    <View>
      {/* <Text>Starts cast2</Text> */}
      <FlatList
          horizontal
          data={cast}
          renderItem={({ item }) => (
            <View style={{margin: 10}}>
              <Image
                source={{ uri: item.avatar }}
                style={{ width: 75, height: 75, borderRadius: 27.5 }}
              />
              <Text style={{ fontSize: 14}}>{item.name || 'Unknown Actor'}</Text>
              <Text style={{ fontSize: 12 }}>{item.character}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
          initialNumToRender={10}
          maxToRenderPerBatch={5}
          windowSize={5}
        />
      {/* <Text>Finish cast</Text> */}
    </View>
  )
}

export default CastHorizontalList