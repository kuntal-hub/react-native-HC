import { Alert, Image, Linking, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback } from 'react'

const App2 = () => {

    const openWebsite = async (url: string) => {
        await Linking.openURL(url);
        // Checking if the link is supported for links with custom URL scheme.
        // const supported = await Linking.canOpenURL('https://youtu.be/eL5qYJ7y68k?si=rql0AjIoozZyNUoY');
        // if (supported) {
        //     // Opening the link with some app, if the URL scheme is "http" the web link should be opened
        //     // by some browser in the mobile
        //     Alert.alert('link opened')
        // } else {
        //     Alert.alert(`Don't know how to open this URL: ${url}`);
        // }
    };

    const contacts = [
        {
            uid: 1,
            name: 'Hitesh Choudhary',
            status: 'Just an extra ordinary teacher',
            imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
        },
        {
            uid: 2,
            name: 'Anurag Tiwari',
            status: 'I ❤️ To Code and Teach!',
            imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',
        },
        {
            uid: 3,
            name: 'Sanket Singh',
            status: 'Making your GPay smooth',
            imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
        },
        {
            uid: 4,
            name: 'Anirudh Jwala',
            status: 'Building secure Digital banks',
            imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
        },
    ];

    return (
        <SafeAreaView>
            <ScrollView style={styles.background}>
                <View>
                    <Text style={styles.headingText}>Flat cards</Text>
                    <View style={styles.container}>
                        <View style={[styles.card, styles.cardOne]}>
                            <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'white' }}>First</Text>
                        </View>
                        <View style={[styles.card, styles.cardTwo]}>
                            <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'white' }}>Second</Text>
                        </View>
                        <View style={[styles.card, styles.cardThree]}>
                            <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'white' }}>Third</Text>
                        </View>
                        <View style={[styles.card, styles.cardFour]}>
                            <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'white' }}>Fourth</Text>
                        </View>
                    </View>
                </View>


                <View>
                    <Text style={styles.headingText}>Scrollable cards</Text>
                    <ScrollView horizontal={true} style={{
                        width: '100%',
                        padding: 8,
                        // elevation: 4,
                        // shadowOffset: { width: 7, height: 2 },
                    }} showsHorizontalScrollIndicator={false}>
                        <View style={[styles.card, styles.cardOne]}>
                            <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'white' }}>First</Text>
                        </View>
                        <View style={[styles.card, styles.cardTwo]}>
                            <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'white' }}>Second</Text>
                        </View>
                        <View style={[styles.card, styles.cardThree]}>
                            <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'white' }}>Third</Text>
                        </View>
                        <View style={[styles.card, styles.cardFour]}>
                            <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'white' }}>Fourth</Text>
                        </View>
                        <View style={[styles.card, styles.cardFour]}>
                            <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'white' }}>Fifth</Text>
                        </View>
                        <View style={[styles.card, styles.cardFour]}>
                            <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'white' }}>sixth</Text>
                        </View>
                        <View style={[styles.card, styles.cardFour, { marginRight: 20 }]}>
                            <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'white' }}>seventh</Text>
                        </View>
                    </ScrollView>
                </View>


                <View>
                    <Text style={styles.headingText}>Trending places</Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ paddingHorizontal: 6 }}>
                        <View style={[styles.cardFancy, styles.cardElevated]}>
                            <Image
                                source={{
                                    uri: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQQZA8s3i80S9sJnQwPMBucnYOuPjOsPWuuWKP272agfS60vRU_0o1Vzv_6W03OySwua1OyWOjO2wlK9hVL2lzOgQ'
                                }}
                                style={styles.cardImage}
                            />
                            <View style={styles.cardBody}>
                                <Text style={styles.cardTitle}>Hawa Mahal</Text>
                                <Text style={styles.cardLabel}>Pink City, jaipur</Text>
                                <Text style={styles.cardDescription}>The Hawa Mahal is a palace in the city of Jaipur, India. Built from
                                    red and pink sandstone, it is on the edge of the City Palace.</Text>
                                <Text style={styles.cardFooter}>12 mins away</Text>
                            </View>
                        </View>
                        <View style={[styles.cardFancy, styles.cardElevated]}>
                            <Image
                                source={{
                                    uri: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQQZA8s3i80S9sJnQwPMBucnYOuPjOsPWuuWKP272agfS60vRU_0o1Vzv_6W03OySwua1OyWOjO2wlK9hVL2lzOgQ'
                                }}
                                style={styles.cardImage}
                            />
                            <View style={styles.cardBody}>
                                <Text style={styles.cardTitle}>Hawa Mahal</Text>
                                <Text style={styles.cardLabel}>Pink City, jaipur</Text>
                                <Text style={styles.cardDescription}>The Hawa Mahal is a palace in the city of Jaipur, India. Built from
                                    red and pink sandstone, it is on the edge of the City Palace.</Text>
                                <Text style={styles.cardFooter}>12 mins away</Text>
                            </View>
                        </View>
                        <View style={[styles.cardFancy, styles.cardElevated]}>
                            <Image
                                source={{
                                    uri: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQQZA8s3i80S9sJnQwPMBucnYOuPjOsPWuuWKP272agfS60vRU_0o1Vzv_6W03OySwua1OyWOjO2wlK9hVL2lzOgQ'
                                }}
                                style={styles.cardImage}
                            />
                            <View style={styles.cardBody}>
                                <Text style={styles.cardTitle}>Hawa Mahal</Text>
                                <Text style={styles.cardLabel}>Pink City, jaipur</Text>
                                <Text style={styles.cardDescription}>The Hawa Mahal is a palace in the city of Jaipur, India. Built from
                                    red and pink sandstone, it is on the edge of the City Palace.</Text>
                                <Text style={styles.cardFooter}>12 mins away</Text>
                            </View>
                        </View>
                        <View style={[styles.cardFancy, styles.cardElevated]}>
                            <Image
                                source={{
                                    uri: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQQZA8s3i80S9sJnQwPMBucnYOuPjOsPWuuWKP272agfS60vRU_0o1Vzv_6W03OySwua1OyWOjO2wlK9hVL2lzOgQ'
                                }}
                                style={styles.cardImage}
                            />
                            <View style={styles.cardBody}>
                                <Text style={styles.cardTitle}>Hawa Mahal</Text>
                                <Text style={styles.cardLabel}>Pink City, jaipur</Text>
                                <Text style={styles.cardDescription}>The Hawa Mahal is a palace in the city of Jaipur, India. Built from
                                    red and pink sandstone, it is on the edge of the City Palace.</Text>
                                <Text style={styles.cardFooter}>12 mins away</Text>
                            </View>
                        </View>
                        <View style={[styles.cardFancy, styles.cardElevated]}>
                            <Image
                                source={{
                                    uri: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQQZA8s3i80S9sJnQwPMBucnYOuPjOsPWuuWKP272agfS60vRU_0o1Vzv_6W03OySwua1OyWOjO2wlK9hVL2lzOgQ'
                                }}
                                style={styles.cardImage}
                            />
                            <View style={styles.cardBody}>
                                <Text style={styles.cardTitle}>Hawa Mahal</Text>
                                <Text style={styles.cardLabel}>Pink City, jaipur</Text>
                                <Text style={styles.cardDescription}>The Hawa Mahal is a palace in the city of Jaipur, India. Built from
                                    red and pink sandstone, it is on the edge of the City Palace.</Text>
                                <Text style={styles.cardFooter}>12 mins away</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>


                <View>
                    <Text style={styles.headingText}>Blog Card</Text>
                    <View style={[styles.actionCard, styles.elevatedCard]} >
                        <View style={styles.headingContainer}>
                            <Text style={styles.headerText}>
                                What's new in Javascript 21 - ES12
                            </Text>
                        </View>
                        <Image
                            source={{
                                uri: 'https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
                            }}
                            style={styles.cardImage2}
                        />
                        <View style={styles.bodyContainer} >
                            <Text numberOfLines={3}>
                                Just like every year, Javascript brings in new features. This year
                                javascript is bringing 4 new features, which are almost in
                                production rollout. I won't be wasting much more time and directly
                                jump to code with easy to understand examples.
                            </Text>
                        </View>
                        <View style={styles.footerContainer} >
                            <TouchableOpacity
                                onPress={() => openWebsite('https://blog.learncodeonline.in/whats-new-in-javascript-21-es12')}
                            >
                                <Text style={styles.socialLinks} >Read More</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => openWebsite('https://www.instagram.com/hiteshchoudharyofficial/')}
                            >
                                <Text style={styles.socialLinks}>Follow me</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>


                <View>
                    <Text style={styles.headingText}>ContactList</Text>
                    <ScrollView
                        style={styles.containerforContact}
                        scrollEnabled={false}
                    >
                        {contacts.map(({ uid, name, status, imageUrl }) => (
                            <View key={uid} style={styles.userCard}>
                                <Image
                                    source={{
                                        uri: imageUrl
                                    }}
                                    style={styles.userImage}
                                />
                                <View>
                                    <Text style={styles.userName}>{name}</Text>
                                    <Text style={styles.userStatus}>{status}</Text>
                                </View>
                            </View>
                        ))}
                    </ScrollView>
                </View>


            </ScrollView>
        </SafeAreaView>
    )
}

export default App2

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'black'
    },
    headingText: {
        fontSize: 25,
        marginTop: 10,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },
    container: {
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        padding: 8,
    },
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        maxWidth: 100,
        minWidth: 100,
        height: 100,
        margin: 4,
        elevation: 8,
        shadowOffset: { width: 2, height: 2 },
        shadowColor: 'red',
        shadowOpacity: 1,
        shadowRadius: 6,
    },
    cardOne: {
        backgroundColor: 'red'
    },
    cardTwo: {
        backgroundColor: 'green'
    },
    cardThree: {
        backgroundColor: 'blue'
    },
    cardFour: {
        backgroundColor: 'orange'
    },
    cardFancy: {
        width: 350,
        height: 360,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 6,
    },
    cardElevated: {
        backgroundColor: '#FFFFFF',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        },
    },
    cardImage: {
        height: 180,
        marginBottom: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6

    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12
    },
    cardTitle: {
        color: '#000000',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 4
    },
    cardLabel: {
        color: '#000000',
        fontSize: 14,
        marginBottom: 6
    },
    cardDescription: {
        color: '#242B2E',
        fontSize: 12,
        marginBottom: 12,
        marginTop: 6,
        flexShrink: 1
    },
    cardFooter: {
        color: '#000000'
    },


    actionCard: {
        width: 350,
        height: 360,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16
    },
    elevatedCard: {
        backgroundColor: '#E07C24',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: '#333',
        shadowOpacity: 0.4
    },
    headingContainer: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        color: '#000',
        fontSize: 16,
        fontWeight: '600'
    },
    cardImage2: {
        height: 190
    },
    bodyContainer: {
        padding: 10
    },
    footerContainer: {
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    socialLinks: {
        fontSize: 16,
        color: '#000000',
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
        paddingVertical: 6,
        borderRadius: 6

    },


    containerforContact: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        marginBottom: 4

    },
    userCard: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 3,
        backgroundColor: '#8D3DAF',
        padding: 8,
        borderRadius: 10,
        marginVertical: 6
    },
    userImage: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        marginRight: 14
    },
    userName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#FFF'
    },
    userStatus: {
        fontSize: 12
    }
})