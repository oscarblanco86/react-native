import { View, Text, Pressable, Image, StyleSheet} from 'react-native';

import { Movie } from '@/infraestructure/interface/movie.interface';
import { router } from 'expo-router';

interface Props {
    id: number;
    poster: string;
    title?: string;
    smallPoster?: boolean;
    className?: string;
    // imgClassName?: string
}

const MoviePoster = ({ id, poster, smallPoster = false, title = '', className }: Props) => {
    return (
        <Pressable
            className={`active:opacity-90 px-2 ${MoviePoster}`}
            onPress={() => console.log('button pressed')}
        >
            <Image
                source={{ uri: poster }}
                // className="shadow-lg rounded-2xl w-full h-full"
                style={[{
                    width: smallPoster ? 85 : 150,
                    height: smallPoster ? 130 : 350,
                },
                styles.image,]
            }
                resizeMode="cover"
            />
        </Pressable>
    );
};

const styles = StyleSheet.create({
    image: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        borderRadius: 16, // rounded-2xl equivalent
    },
})
export default MoviePoster;