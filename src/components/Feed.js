import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { THEME_COLOR } from '../common/Constants';
import ThemedText from '../common/ThemedText';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function Feed() {

    const [selectedPlatforms, setSelectedPlatforms] = useState(['facebook', 'instagram', 'twitter', 'yahoo']);
    const feeds = useSelector(state => state.feeds.feeds);
    const currentUser = useSelector((state) => state?.users?.currentUser)
    const currentUsersFeedtemp = feeds?.filter((el) => { return (currentUser.followedInfluencersId.includes(el.influencerId)) })
    const currentUsersFeed = currentUsersFeedtemp?.filter((el) => {
        if (selectedPlatforms?.includes(el.platform)) {
            return el
        }
    })
    
    const platforms = ['facebook', 'instagram', 'twitter', 'yahoo']

    const renderFeed = ({ item }) => (
        <View style={styles.feedItem}>
          <ThemedText>{item.content}</ThemedText>
        </View>
      );

    return (
        <View style={{ flex: 1 }}>
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
                        <View style={{ marginVertical: 10 }}>
                            <ThemedText>{"No feeds found, please follow more influencers to see data"}</ThemedText>
                        </View>
                    )
            }
        </View>
    )
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
