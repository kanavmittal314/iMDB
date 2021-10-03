import React from "react";
import { SafeAreaView, Text, Image, ScrollView, View } from "react-native";
import { styles } from "./MovieDetailScreen.styles";

export default function MovieDetailScreen({ route }) {
  // TODO: Recieve the movieItem by destructuring route params.
  const posterurl = route.params.item.posterurl;
  const title = route.params.item.title;
  const year = route.params.item.year;
  const genres = route.params.item.genres.join(", ").trimEnd();
  const actors = route.params.item.actors.join(", ").trimEnd();
  const storyline = route.params.item.storyline.replace(
    "                ",
    "\n"
  );
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <View style={{ alignItems: "center" }}>
          <Image
            source={{ uri: posterurl }}
            style={{ height: 240, width: 162, resizeMode: "contain" }}
          />
        </View>
        <Text style={styles.h1}>{title}</Text>
        <Text style={styles.h2}>{"Released " + year}</Text>
        <Text style={styles.h2}>{genres}</Text>
        <Text style={styles.h3}>{actors}</Text>
        <Text style={styles.h4}>{storyline}</Text>
        {/* TODO: Configure this screen to have an image and appropriate text describing the movie. 
                See the example on the spec for design inspiration.
                Feel free to use the styles below. */}
      </ScrollView>
    </SafeAreaView>
  );
}
