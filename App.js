import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const getData = async () => {
    setLoading(true);
    const data = await fetch('https://jsonplaceholder.typicode.com/posts');
    const myPost = await data.json();
    setLoading(false);
    setPosts(myPost);

  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <ScrollView style={styles.container}>
     <Image
        source={{
          uri: 'https://cdn.dribbble.com/users/1647667/screenshots/9849363/media/01890923f178ea5693c3816aa0bc65e2.jpg',
        }}
        style={{ width: '100%', height: 250, backgroundColor: "#112233" }}
      /> 
      {
        posts?.slice(0,15)?.map(post => {
          return (
            <View key={post.id}>
              <Text style={styles.title} >{post.id == 1 ? "Hr Meheraj" : post.title}</Text>
              <Text style={styles.text}>{post.body}</Text>
            </View>
          )
        })
      }
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop : 50,
    marginBottom: 20,
  },
  title: {
    fontSize: 25,
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    marginBottom: 20
  }
});
