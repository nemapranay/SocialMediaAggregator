// screens/InfluencerProfileScreen.js
import React from 'react';
import { View, StyleSheet,FlatList } from 'react-native';
import ThemedText from '../common/ThemedText';
import { useDispatch, useSelector } from 'react-redux';
import { THEME_COLOR } from '../common/Constants';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function InfluencerProfileScreen({ navigation, route }) {
    const { name, id } = route?.params?.item
    const feeds = useSelector(state => state.feeds.feeds);
    const feedsOfInfluencer = feeds?.filter((el) => el.influencerId === id)
    const renderFeed = ({ item }) => (
        <View style={styles.feedItem}>
          <ThemedText>{item.content}</ThemedText>
        </View>
      );
    return (
        <View style={styles.container}>

            <View style={{  }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <ThemedText>Go Back</ThemedText>
                </TouchableOpacity>
            </View>

            <View style={[styles.heading, { backgroundColor: 'transparent', marginVertical: 10 }]}>
                <ThemedText>Hello, {name}</ThemedText>
            </View>

            <View style={{ flex: 0.6 }}>
                <View style={styles.heading}>
                    <ThemedText>Latest Feeds</ThemedText>
                </View>
                <View style={{ marginVertical: 10, flexDirection: "row" }}>

                </View>
                {
                    feedsOfInfluencer?.length > 0 ?
                        (
                            <FlatList
                                data={feedsOfInfluencer}
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
