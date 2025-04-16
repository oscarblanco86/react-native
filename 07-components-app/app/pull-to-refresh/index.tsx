import { useState } from 'react';
import ThemedText from '@/presentation/shared/ThemedText';
import ThemedView from '@/presentation/shared/ThemedView';
import { View, Text, ScrollView, RefreshControl } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';
import { red } from 'react-native-reanimated/lib/typescript/Colors';

const PullToRefreshScreen = () => {
  const primaryColor = useThemeColor({}, 'primary')
  const backgroundColor = useThemeColor({
    dark: 'black', light: 'white'
  }, 'background')
  const [isRefreshing, setIsRefreshing] = useState(false)
  const onRefresh = async () => {
    setIsRefreshing(true)

    setTimeout(() => {
      
      setIsRefreshing(false)
    }, 4000);
  }
  return (
    <ScrollView 
    refreshControl={
      <RefreshControl 
        refreshing={isRefreshing}
        onRefresh={onRefresh}
        colors={[ primaryColor, 'red', 'orange', 'green']}
        progressBackgroundColor={backgroundColor}
      />
    }>
      <ThemedView margin>
        <ThemedText>PullToRefreshScreen</ThemedText>

      </ThemedView>
    </ScrollView>
  );
};
export default PullToRefreshScreen;
