import { FlatList, Image, Text, View } from 'react-native';
import styles from './ResultStyle';
import { useFonts } from 'expo-font';

export default function Result({ route, navigation }: {route: any, navigation: any}) {
  const data = route.params.response.products
  const [fontsLoaded] = useFonts({
		'GoogleFontBold': require('../../../assets/fonts/product-sans-bold.ttf'),
		'GoogleFont': require('../../../assets/fonts/product-sans-regular.ttf'),
	});

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      {route.params.response.total === 0 ? 
        <Text style={styles.emptyResult}>Pas de résultats</Text>
        :
        <FlatList
          data={data}
          renderItem={({item, index}) => (
            <View style={styles.product}>
              {index%2 === 0 && 
                <Image 
                  source={{
                    uri: item.thumbnail
                  }}
                  style={styles.thumbnail}
                />
              }
              <View style={styles.complementInformations}>
                <Text style={[styles.title, {fontFamily: 'GoogleFontBold'}]}>{item.title}</Text>
                <Text style={[styles.description, {fontFamily: 'GoogleFont'}]}>{item.description}</Text>
                <Text style={[styles.price, {fontFamily: 'GoogleFont'}]}>{item.price}€</Text>
              </View>
              {index%2 !== 0 && 
                <Image 
                  source={{
                    uri: item.thumbnail
                  }}
                  style={styles.thumbnail}
                />
              }
            </View>
          )}
        />
      }
    </View>
  );
}

