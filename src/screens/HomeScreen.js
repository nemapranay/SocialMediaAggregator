// screens/HomeScreen.js
import React from 'react';
import { View, FlatList, StyleSheet, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { followInfluencer, unfollowInfluencer } from '../redux/slices/influencerSlice';
import { THEME_COLOR } from '../common/Constants';
import ThemedText from '../common/ThemedText';
import { setCurrentUser, setUser } from '../redux/slices/userSlice';

export default function HomeScreen() {
  const dispatch = useDispatch();
  const influencers = useSelector(state => state.influencers.influencers);
  const followedInfluencers = useSelector(state => state.influencers.followedInfluencers);
  const feeds = useSelector(state => state.feeds.feeds);
  const currentUser = useSelector((state) => state?.users?.currentUser)
  const currentUsersFeed = feeds?.filter((el) => { return (currentUser.followedInfluencersId.includes(el.influencerId)) })
  // const currrentFollowedInfluencers = influencers?.filter((el)=>{ return  }) followedInfluencersId


  const renderFeed = ({ item }) => (
    <View style={styles.feedItem}>
      <ThemedText>{item.content}</ThemedText>
    </View>
  );
  const noDataWithMsg = (msg) => {
    return (
      <View style={{ marginVertical: 10 }}>
        <ThemedText>{msg}</ThemedText>
      </View>
    )
  }
  console.log("currentUser==", currentUser)
  return (
    <View style={styles.container}>
      <View style={[styles.heading, { backgroundColor: 'transparent', marginVertical: 10 }]}>
        <ThemedText>Hello, {currentUser?.name}</ThemedText>
      </View>
      <View style={{ flex: 0.4 }}>
        <View style={styles.heading}>
          <ThemedText>All Influencers</ThemedText>
        </View>
        <FlatList
          data={influencers}
          keyExtractor={(item) => item.id}
          style={{ flex: 1 }}
          renderItem={({ item }) => {
            const isFollowed = currentUser?.followedInfluencersId?.includes(item.id)
            return (
              <View style={{ flexDirection: "row", justifyContent: 'center', alignItems: "center" }}>
                <ThemedText>{item.name}</ThemedText>
                <Button title={isFollowed ? "unfollow" : "Follow"} onPress={() => {
                  if (isFollowed) {
                    dispatch(unfollowInfluencer(item))
                    let tempList = [...currentUser.followedInfluencersId]
                    const index = tempList.indexOf(item?.id);
                    tempList.splice(index, 1);
                    dispatch(setCurrentUser({ followedInfluencersId: tempList }))
                  } else {
                    dispatch(followInfluencer(item))
                    dispatch(setCurrentUser({ followedInfluencersId: [...currentUser?.followedInfluencersId, ...item?.id] }))
                  }
                }} />
              </View>
            )
          }}
        />
      </View>

      <View style={{ flex: 0.6 }}>
        <View style={styles.heading}>
          <ThemedText>Latest Feeds</ThemedText>
        </View>
        {
          currentUsersFeed?.length > 0 ?
            (
              <FlatList
                data={currentUsersFeed}
                keyExtractor={(item) => item.id}
                style={{ flex: 1 }}
                renderItem={renderFeed}
              />
            )
            :
            (
              noDataWithMsg("No feeds found, please follow more influencers to see data")
            )
        }
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16, backgroundColor: 'lightgrey'
  },
  feedItem: { padding: 8, borderBottomWidth: 1, borderBottomColor: 'gray' },
  heading: {
    backgroundColor: THEME_COLOR,
    width: "100%",
    justifyContent: 'center',
    alignItems: "center",
    padding: 5
  }
});
