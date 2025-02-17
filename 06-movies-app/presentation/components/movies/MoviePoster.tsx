import { View, Text, Pressable, Image } from 'react-native';

// import { Movie } from '@/infrastructure/interface/movie.interface';

interface Props {
    id: number;
    poster: string;
    title?: string;
    smallPoster?: boolean;
    className?: string;
    imgClassName?: string
}

const MoviePoster = ({ id, poster, smallPoster = false, title = '', className, imgClassName }: Props) => {
    return (
        <Pressable
            className={`active:opacity-90 px-2 ${MoviePoster}`}
            onPress={() => console.log('button pressed')}
        >
            <Image
                className="shadow-lg rounded-2xl w-full h-full"
                source={{ uri: poster }}
                style={{
                    width: smallPoster ? 85 : 150,
                    height: smallPoster ? 130 : 350,
                    // border-radius: 1rem
                }}
                // resizeMode="cover"
            />
            {/* {title && <Text className=''>{title}</Text>} */}
        </Pressable>
    );
};
export default MoviePoster;