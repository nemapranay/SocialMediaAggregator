// screens/HomeScreen.js
import React, {useState} from 'react';
import {View, FlatList, StyleSheet, Button, Alert} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {
  followInfluencer,
  unfollowInfluencer,
} from '../redux/slices/influencerSlice';
import {THEME_COLOR} from '../common/Constants';
import ThemedText from '../common/ThemedText';
import {setCurrentUser, setUser} from '../redux/slices/userSlice';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Feed from '../components/Feed';
import {showAlert} from '../common/utils';

export default function HomeScreen({navigation}) {
  const dispatch = useDispatch();
  const influencers = useSelector(state => state.influencers.influencers);
  const currentUser = useSelector(state => state?.users?.currentUser);

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.heading,
          {backgroundColor: 'transparent', marginVertical: 10},
        ]}>
        <ThemedText>Hello, {currentUser?.name}</ThemedText>
      </View>
      <View style={{flex: 0.4}}>
        <View style={styles.heading}>
          <ThemedText>All Influencers</ThemedText>
        </View>
        <FlatList
          data={influencers}
          keyExtractor={item => item.id}
          style={{flex: 1}}
          renderItem={({item}) => {
            const isFollowed = currentUser?.followedInfluencersId?.includes(
              item.id,
            );
            return (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  borderWidth: 0.5,
                  margin: 10,
                  borderRadius: 10,
                  padding: 5,
                }}>
                <View
                  style={{
                    height: 30,
                    width: 30,
                    borderRadius: 15,
                    backgroundColor: THEME_COLOR,
                  }}
                />
                <TouchableOpacity
                  onPress={() => {
                    if (!isFollowed) {
                      showAlert('You need to follow first to see profile');
                    } else {
                      navigation.navigate('InfluencerProfileScreen', {item});
                    }
                  }}
                  style={{marginLeft: 10}}>
                  <ThemedText>{item.name}</ThemedText>
                </TouchableOpacity>
                <View style={{right: 10, position: 'absolute'}}>
                  <Button
                    color={'#d79921'}
                    title={isFollowed ? 'unfollow' : 'Follow'}
                    onPress={() => {
                      if (isFollowed) {
                        dispatch(unfollowInfluencer(item));
                        let tempList = [...currentUser.followedInfluencersId];
                        const index = tempList.indexOf(item?.id);
                        tempList.splice(index, 1);
                        dispatch(
                          setCurrentUser({followedInfluencersId: tempList}),
                        );
                      } else {
                        dispatch(followInfluencer(item));
                        dispatch(
                          setCurrentUser({
                            followedInfluencersId: [
                              ...currentUser?.followedInfluencersId,
                              ...item?.id,
                            ],
                          }),
                        );
                      }
                    }}
                  />
                </View>
              </View>
            );
          }}
        />
      </View>
      <View style={{flex: 0.6}}>
        <Feed />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  feedItem: {padding: 8, borderBottomWidth: 1, borderBottomColor: 'gray'},
  heading: {
    backgroundColor: THEME_COLOR,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
});
