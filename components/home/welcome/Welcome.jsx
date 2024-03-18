import { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, FlatList} from 'react-native';
import { useRouter } from 'expo-router';
import styles from './welcome.style';
import { icons, SIZES } from '../../../constants';
const jobType = ["Full-Time", "Part-Time", "Contractor", "Freelancer"];
export default function Welcome({searchTerm, setSearchTerm, handleClick}) {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState("Full-Time");

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.userName}>Hello Sai</Text>
        <Text style={styles.welcomeMessage}>Find your perfect Kraft Job</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            placeholder="What are you looking for?"
            placeholderTextColor="#666"
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
        <FlatList 
          data={jobType}
          renderItem={({item}) => (
            <TouchableOpacity 
              style={styles.tab(activeJobType, item)} 
              onPress={() => {
                setActiveJobType(item);
                router.push(`/search/${item}`);
              }}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item}
          contentContainerStyle={{columnGap: SIZES.small}}
          horizontal
        />
    </View>
  )
}