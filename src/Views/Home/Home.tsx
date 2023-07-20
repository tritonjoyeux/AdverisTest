import { Animated, Image, Pressable, Text, TextInput, View } from 'react-native';
import { useState, useRef } from 'react';
import styles from './HomeStyle';
import { useFonts } from 'expo-font';
import searchQuery from '../../Services/apiClient';

const defaultColors = [
	'#4285F4', //blue
	'#DB4437', //red
	'#F4B400', //yellow
	'#0F9D58'  //green
];

export default function Home({ navigation }: {navigation: any}) {
	const fade = useRef(new Animated.Value(1)).current;

	const fadeIn = () => {
    Animated.timing(fade, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fade, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

	let [colors, setColors] = useState([0, 1, 2, 0, 3, 1])
	let [search, setSearch] = useState('')

	const [fontsLoaded] = useFonts({
		'GoogleFontBold': require('../../../assets/fonts/product-sans-bold.ttf'),
		'GoogleFont': require('../../../assets/fonts/product-sans-regular.ttf'),
	});

	if (!fontsLoaded) {
		return null;
	}

 	return (
		<View style={styles.container}>
			<Animated.View style={[{opacity: fade}, styles.title]}>
				{
					'Google'.split('').map((el, index) => {
						return <Text key={index} style={[
							{color: defaultColors[colors[index]], fontFamily: 'GoogleFontBold'},
							styles.googleText
						]
						}>{el}</Text> 
					})
				}
			</Animated.View>
			<View style={styles.inputContainer}>
				<View style={styles.inputContent}>
					<Image source={require('../../../assets/search.png')} style={styles.imageSearch} />
					<TextInput
						style={styles.input}
						value={search}
						onChange={(e) => setSearch(e.nativeEvent.text)}
					/>
				</View>
			</View>
			<View style={styles.buttonsContainer}>
				<Pressable style={styles.button} onPress={() => {
					searchQuery(search).then((response: any) => {
						navigation.navigate('Result', {title: `Résultats(${response.total})`, response})
					})
				}}>
					<Text style={styles.textButton}>Recherche Google</Text>
				</Pressable>
				<Pressable style={styles.button} onPress={() => {
						fadeOut()
						setTimeout(() => {
							let newColors: number[] = []
							colors.forEach((_, index) => {
								let lastColor = newColors[index-1]
								let randomColor = Math.floor(Math.random() * 4)
								if(lastColor && lastColor >= 0) {
									console.log(lastColor, randomColor)
									while(lastColor === randomColor) {
										randomColor = Math.floor(Math.random() * 4)
									}
								}
								lastColor = randomColor
								newColors[index] = randomColor
							})
							setColors([...newColors])
							fadeIn()
						}, 500)
						
					}}>
					<Text style={styles.textButton}>J'ai de la chance</Text>
				</Pressable>
			</View>
		</View>
 	);
}

