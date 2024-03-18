import { View, Text, TouchableOpacity, ActivityIndicator} from 'react-native'
import { useRouter } from 'expo-router';
import { COLORS } from '../../../constants';
import  NearbyJobCard  from '../../common/cards/nearby/NearbyJobCard';

import useFetch from '../../../hook/useFetch';
import styles from './nearbyjobs.style'
export default function Nearbyjobs() {
  const router = useRouter();

  const { data, isLoading, error } = useFetch('search', {
    query: 'React developer',
    num_pages: 1,
  });
  
  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby Jobs</Text>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          data?.map((item) => (
            <NearbyJobCard
              job={item}
              key={`nearby-job-${item?.job_id}`}
              handleNavigate={() => router.push(`/job-details/${item.job_id}`)}
            />
          ))
        )}

      </View>
    </View>
  )
}