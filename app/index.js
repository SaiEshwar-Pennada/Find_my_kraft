import { View,ScrollView,SafeAreaView } from 'react-native';
import { useState } from 'react';
import { Stack, useRouter} from 'expo-router';
import { COLORS, icons, images, SIZES } from '../constants';
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome} from '../components'
export default function Home() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("")
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen 
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerTitle: "Find My Kraft",
          headerTitleAlign: 'center',
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
          ),
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
          <Welcome 
            searchTerm={searchTerm} 
            setSearchTerm={setSearchTerm}
            handleClick={() => {
              if(searchTerm){
                router.push(`/search/${searchTerm}`)
              }
            }}
          />
          <Popularjobs />
          <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}