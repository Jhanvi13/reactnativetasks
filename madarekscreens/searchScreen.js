import React, { useEffect, useState } from 'react';
import {
    View,
    StyleSheet,
    FlatList,
    Text,
    StatusBar,
    TextInput,
    Image,
    TouchableOpacity,
} from 'react-native';

const searchScreen = () => {
    const [List, setList] = useState([]);
    const [search, setSearch] = useState('');
    const [mainData, setmainData] = useState([]);

    useEffect(() => {
        fetch('http://madarek.php-staging.com/apiv1/rest/categories', {
            method: 'GET',
        })
            .then(res => res.json())
            .then(res => {
                let items = [];

                res.data.forEach(ele => {
                    let obj = { ...ele, status: false };
                    items.push(obj);
                });
                setList(items);
                setmainData(items);
            })
            .catch(err => {
                console.log('err', err);
            });
    }, []);

    const onLikeCLick = ide => {
        for (let i = 0; i < List.length; i++) {
            if (List[i].id == ide) {
                List[i].status = !List[i].status;
            }
            setList([...List]);
        }
    };

    const Item = ({ item }) => (
        <View style={styles.categoriesArea}>
            <TouchableOpacity>
                <View style={styles.boxStyle}>
                    <TouchableOpacity
                        onPress={() => {
                            onLikeCLick(item.id);
                        }}
                    >
                        {item.status == false ? (
                            <Image
                                style={styles.heartIcon}
                                source={require('../src/visualaids/heartborder.png')}
                            ></Image>
                        ) : (
                            <Image
                                style={styles.heartIcon}
                                source={require('../src/visualaids/heart.png')}
                            ></Image>
                        )}
                    </TouchableOpacity>
                    <Image
                        style={styles.iconImage}
                        source={require('../src/visualaids/logochat.png')}
                    ></Image>
                    <Text style={styles.boxText}>{item.category_name}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
    const renderItem = ({ item }) => {
        return <Item item={item} />;
    };
    const searchFilterFunction = text => {
        if (text) {
            const newData = List.filter(function (item) {
                const itemData = item.category_name
                    ? item.category_name.toUpperCase()
                    : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setList(newData);
            setSearch(text);
        } else {
            setList(mainData);
            setSearch(text);
        }
    };

    return (
        <View>
            <StatusBar
                barStyle="light-content"
                hidden={false}
                backgroundColor="#cc9900"
                translucent={false}
            ></StatusBar>

            <View style={styles.headerPortion}>
                <View style={styles.headerStyle}>
                    <View>
                        <Image
                            style={styles.showMoreImage}
                            source={require('../src/visualaids/showMore.png')}
                        />
                    </View>
                    <View style={styles.categoriesSign}>
                        <Text style={styles.textStyle}>Categories</Text>
                    </View>
                    <View>
                        <Image
                            style={styles.filterImage}
                            source={require('../src/visualaids/filter.png')}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.searchImage}>
                <TextInput
                    style={styles.searchBox}
                    placeholder="Search Category"
                    onChangeText={text => searchFilterFunction(text)}
                    value={search}
                />
                <View style={styles.iconbg}>
                    <Image
                        style={styles.searchIcon}
                        source={require('../src/visualaids/search.png')}
                    ></Image>
                </View>
            </View>

            <View style={styles.listDisplayArea}>
                <FlatList
                    style={styles.List}
                    data={List}
                    numColumns={3}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    );
};
export default searchScreen;
const styles = StyleSheet.create({
    headerStyle: {
        height: 65,
        backgroundColor: '#F9B52B',
        flexDirection: 'row',
        justifyContent: 'center',
        justifyContent: 'space-between',
    },
    showMoreImage: {
        height: 15,
        width: 22,
        marginLeft: '20%',
        marginTop: '22%',
    },
    filterImage: {
        height: 22,
        width: 24,
        marginRight: '20%',
        right: 10,
        marginTop: '19%',
    },
    categoriesSign: {
        alignSelf: 'center',
        marginRight: '35%',
        left: 30,
        bottom: 5,
    },
    textStyle: {
        alignSelf: 'center',
        fontSize: 25,
        color: 'white',
        fontWeight: '400',
    },
    List: {
        top: 15,
        height: 800,
        width: 400,
    },
    listDisplayArea: {
        justifyContent: 'space-evenly',
        alignContent: 'center',
        backgroundColor: '#F5F7FB',
       
    },
    boxStyle: {
        height: 110,
        width: 115,
        backgroundColor: 'white',
        margin: 8,
        borderRadius: 5,
        borderWidth: 1,
        fontWeight:'700',
        borderColor: '#8C67A9',
        borderBottomWidth: 3.5,
        padding: 2,
    },
    iconImage: {
        height: 32,
        width: 44,
        alignSelf: 'center',
        bottom: 3,
        padding:5
    },
    boxText: {
        textAlign: 'center',
        fontSize: 13.5,
        top: 5,
        color: '#646464',
        fontWeight: 'bold'
    },
    searchBox: {
        backgroundColor: '#FFFFFF',
        width: 350,
        height: 50,
        paddingLeft: 25,
        fontWeight:'600',
        fontSize:15,
        borderWidth: 0,
        color: '#AAAAAA',
    },
    searchIcon: {
        height: 20,
        width: 20,
        top: 8,
        margin: 5,
    },
    searchImage: {
        flexDirection: 'row',
        height: 50,
        backgroundColor: 'white',
        fontWeight:300
    },
    iconbg: {
        backgroundColor: 'white',
        width: 45,
    },
    heartIcon: {
        height: 17,
        width: 19.5,
        alignSelf: 'flex-end',
        right: 5,
        top: 4,
    },
});
