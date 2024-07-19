// screens/HomeScreen.js
import React from 'react';
import { View, FlatList, StyleSheet, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { followInfluencer, unfollowInfluencer } from '../redux/slices/influencerSlice';
import { THEME_COLOR } from '../common/Constants';
import ThemedText from '../common/ThemedText';

export default function HomeScreen() {
  const dispatch = useDispatch();
  const influencers = useSelector(state => state.influencers.influencers);
  const followedInfluencers = useSelector(state => state.influencers.followedInfluencers);
  const feeds = useSelector(state => state.feeds.feeds);

  const renderFeed = ({ item }) => (
    <View style={styles.feedItem}>
      <ThemedText>{item.content}</ThemedText>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <ThemedText>Followed Influencers</ThemedText>
      </View>
      <FlatList
        data={followedInfluencers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <ThemedText>{item.name}</ThemedText>
            <Button title="Unfollow" onPress={() => dispatch(unfollowInfluencer(item))} />
          </View>
        )}
      />
      <View style={styles.heading}>
        <ThemedText>All Influencers</ThemedText>
      </View>
      <FlatList
        data={influencers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <ThemedText>{item.name}</ThemedText>
            <Button title="Follow" onPress={() => dispatch(followInfluencer(item))} />
          </View>
        )}
      />
      <ThemedText>Latest Feeds</ThemedText>
      <FlatList
        data={feeds}
        keyExtractor={(item) => item.id}
        renderItem={renderFeed}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 16, backgroundColor: 'lightgrey', justifyContent: 'center', alignItems: "center" },
  feedItem: { padding: 8, borderBottomWidth: 1, borderBottomColor: 'gray' },
  heading: {
    backgroundColor: THEME_COLOR,
    width: "100%",
    height: "5%",
    justifyContent: 'center',
    alignItems: "center"
  }
});
