import React, { useEffect, useRef, useState } from 'react'
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  StyleSheet,
  useColorScheme,
  TextInput,
  Image,
  Button,
  FlatList,
} from 'react-native'

export default function App(): React.ReactElement {
  const isDrkMode = useColorScheme() !== 'dark';
  const [count, setCount] = useState(0);
  const [text, setText] = useState('hello guys');
  const textRef = useRef(null);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text style={{
            color: "red",
            margin: 5,
          }}>
            Lorem ipsum
          </Text>
          <Text style={{
            color: "red",
            margin: 5,
          }}>
            Lorem ipsum
          </Text>
          <Text style={{
            color: "red",
            margin: 5,
          }}>
            Lorem ipsum
          </Text>
          <Text style={{
            color: "red",
            margin: 5,
          }}>
            Lorem ipsum
          </Text>
          <Image
            source={{
              uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
            }}
            style={{ width: 200, height: 200 }}
          />
          <TextInput style={{
            padding: 10,
            margin: 10,
            borderColor: 'black',
            borderWidth: 1,
            borderRadius: 5,
            color: 'black',
            width: 300,
          }}
            ref={textRef}
            placeholder='Enter your name'
            defaultValue={text}
            onChangeText={(text) => setText(text)}
          />

          <Text style={{ padding: 10, fontSize: 42 }}>
            {text
              .split(' ')
              .map(word => word && '🍕')
              .join(' ')}
          </Text>

          <Button
            title={`Button Pressed ${count} Times`}
            onPress={() => setCount(priv => priv + 1)}
            touchSoundDisabled={false}
            disabled={count === 15}
            color="red"
          />

        </View>
      </ScrollView>
          <FlatList
            scrollEnabled={true}
            data={[
              { key: 'Devin' },
              { key: 'Dan' },
              { key: 'Dominic' },
              { key: 'Jackson' },
              { key: 'James' },
              { key: 'Joel' },
              { key: 'John' },
              { key: 'Jillian' },
              { key: 'Jimmy' },
              { key: 'Julie' },
              { key: 'Julie1' },
              { key: 'Julie2' },
              { key: 'Julie3' },
            ]}
            renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
          />
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'visible',
    backgroundColor: "white",
    flexWrap: 'wrap',
  },
  textBlack: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'red',
  },
  textWhite: {
    fontSize: 20,
    color: 'green',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  }
})

