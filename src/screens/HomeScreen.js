// screens/HomeScreen.js
import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { followInfluencer, unfollowInfluencer } from '../redux/slices/influencerSlice';
import { THEME_COLOR } from '../common/Constants';
import ThemedText from '../common/ThemedText';
import { setCurrentUser, setUser } from '../redux/slices/userSlice';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function HomeScreen() {

  const [selectedPlatforms, setSelectedPlatforms] = useState(['facebook', 'instagram', 'twitter', 'yahoo']);
  const dispatch = useDispatch();
  const influencers = useSelector(state => state.influencers.influencers);
  const followedInfluencers = useSelector(state => state.influencers.followedInfluencers);
  const feeds = useSelector(state => state.feeds.feeds);
  const currentUser = useSelector((state) => state?.users?.currentUser)
  const currentUsersFeedtemp = feeds?.filter((el) => { return (currentUser.followedInfluencersId.includes(el.influencerId)) })
  const currentUsersFeed = currentUsersFeedtemp?.filter((el) => { 
    if(selectedPlatforms?.includes(el.platform)){
      return el
    }
    })
  const platforms = ['facebook', 'instagram', 'twitter', 'yahoo']



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
        <View style={{ marginVertical: 10, flexDirection: "row" }}>
          {
            platforms.map((item, index) => {
              const isSelected = selectedPlatforms.includes(item)
              return (
                <TouchableOpacity key={index} onPress={() => {
                  const currentIndex = selectedPlatforms.indexOf(item)
                  if (currentIndex === -1) {
                    setSelectedPlatforms([...selectedPlatforms, item])
                  } else {
                    let temp = [...selectedPlatforms]
                    temp.splice(currentIndex, 1)
                    setSelectedPlatforms(temp)
                  }
                }}>
                  <View style={{ padding: 10, borderWidth: 1, margin: 5, borderRadius: 10, borderColor: isSelected ? THEME_COLOR : "black" }}>
                    <ThemedText>
                      {item}
                    </ThemedText>
                  </View>
                </TouchableOpacity>
              )
            })
          }
        </View>
        <View style={{ marginVertical: 10, flexDirection: "row" }}>

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
    padding: 16
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
