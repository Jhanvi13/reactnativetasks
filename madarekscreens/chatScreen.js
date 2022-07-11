import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  FlatList,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import MultipleImagePicker from '@baronha/react-native-multiple-image-picker';
import EmojiSelector, { Categories } from 'react-native-emoji-selector';
import DocumentPicker, { isInProgress } from 'react-native-document-picker';
import FileViewer from 'react-native-file-viewer';
import RNFetchBlob from 'react-native-fetch-blob';
const chatScreen = () => {
  const [chatList, setchatList] = useState('');
  const [chatView, setchatView] = useState([]);
  const [emoSelectorVisible, setemoSelectorVisible] = useState(false);
  const [emoji, setemoji] = useState('');
  const [path, setpath] = useState('');
  var array = [];

  useEffect(() => {
    console.log('MainList', chatView);
    console.log('emoji', emoji);
    console.log('array', array);
    console.log('path', path);
  }, [chatView, emoji, array, path]);

  const clearFunc = () => {
    setchatList('');
  };

  const emojiSelVisiblity = () => {
    setemoSelectorVisible(!emoSelectorVisible);
  };

  const getCurrentTime = () => {
    let today = new Date();
    let hours = (today.getHours() < 10 ? '0' : '') + today.getHours();
    let minutes = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
    return hours + ':' + minutes;
  };

  const Item = ({ item }) => (
    <View>
      <Text style={styles.listText}>{item.message}</Text>
      <Text style={styles.timestamp}>{getCurrentTime()}</Text>
    </View>
  );
  const renderItem = ({ item }) => {
    if (item.id == 0) {
      return (
        <View>
          <Text style={styles.listLeftText}>{item.message}</Text>
          <Text style={styles.timeslefttamp}>{getCurrentTime()}</Text>
        </View>
      );
    }
    if (item.type == 'img') {
      return (
        <View>
          <Image style={styles.msgImg} source={{ uri: item.url }}></Image>
          <Text style={styles.timeslefttamp}>{getCurrentTime()}</Text>
        </View>
      );
    }
    if (item.emoji) {
      return (
        <View>
          <Text style={styles.listText}>{item.message}</Text>
          <Text style={styles.timestamp}>{getCurrentTime()}</Text>
        </View>
      );
    }
    if ((item.type = 'docs')) {
      return (
        <View>
          <TouchableOpacity onPress={() => openViewer(item.url)}>
            <Text style={styles.listText}>{item.fileName}</Text>
          </TouchableOpacity>
        </View>
      );
    }

    return <Item item={item} />;
  };
  const onemojiSelection = () => {
    if (chatList != '') {
      array.push({ emoji: emoji });
      setchatView([...array, ...chatView]);
    }
  };
  const handleError = err => {
    if (DocumentPicker.isCancel(err)) {
      console.warn('cancelled');
      // User cancelled the picker, exit any dialogs or menus and move on
    } else if (isInProgress(err)) {
      console.warn(
        'multiple pickers were opened, only the last will be considered',
      );
    } else {
      throw err;
    }
  };
  const openViewer = url => {
    console.log('URL', url);

    RNFetchBlob.fs
      .stat(url)
      .then(stats => {
        console.log('Path', stats.path);
      })
      .catch(err => {
        console.log('Error', err);
      });

    const path = FileViewer.open(url, { showOpenWithDialog: true }) // absolute-path-to-my-local-file.
      .then(() => {
        console.log('Success');
      })
      .catch(error => {
        console.log('failure', error);
      });
  };
  const documentHandler = () => {
    DocumentPicker.pickMultiple()
      .then(result => {
        for (let i = 0; i < result.length; i++) {
          let newElement = {
            fileName: result[i].name,
            url: result[i].uri,
            type: result[i].type,
          };
          array.push(newElement);
          setpath([]);
        }
        console.log('Images', JSON.stringify(result, null, 2));

        setchatView([...array, ...chatView]);
      })
      .catch(handleError);
  };

  const onTextInputSubmit = () => {
    if (chatList != '') {
      array.push({ message: chatList.toString() });
      setchatView([...array, ...chatView]);
    }
  };
  const onSenderText = () => {
    if (chatList != '') {
      array.push({ message: chatList.toString(), id: 0 });
      setchatView([...array, ...chatView]);
    }
  };
  const galleryHandler = () => {
    MultipleImagePicker.openPicker({
      multiple: true,
    }).then(images => {
      console.log('images', images);
      var array = [];
      for (let i = 0; i < images.length; i++) {
        let newElement = {
          id: images[i].position,
          url: images[i].path,
          type: 'img',
        };
        array.push(newElement);

        console.log('Images', JSON.stringify(images, null, 2));
      }

      setchatView([...array, ...chatView]);
    });
  };

  return (
    <View style={styles.mainContainer}>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#800080"
        translucent={false}
      ></StatusBar>

      <View style={styles.headerStyle}>
        <View style={styles.backarrowview}>
          <Image
            style={styles.leftArrowImage}
            source={require('../src/visualaids/arrow-left.png')}
          />
        </View>
        <View>
          <Image
            style={styles.profileImage}
            source={require('../src/visualaids/profileimg.png')}
          />
        </View>
        <View style={styles.userprofile}>
          <Text style={styles.userName}>Jhanvi Brahmbhatt</Text>
          <Text style={styles.activityStatus}>Online</Text>
        </View>
      </View>

      <View style={styles.chatArea}>
        <FlatList
          style={styles.chatAreaList}
          data={chatView}
          renderItem={renderItem}
          keyExtractor={item => Math.random()}
          inverted={true}
        />
      </View>

      <View style={styles.bottomChatbox}>
        <View style={styles.chatboxOptions}>
          <TextInput
            style={styles.msgBox}
            placeholder="Write a Reply..."
            value={chatList}
            onChangeText={item => setchatList(item)}
            onSubmitEditing={() => {
              onTextInputSubmit();
              clearFunc();
            }}
          ></TextInput>

          <TouchableOpacity onPress={() => emojiSelVisiblity()}>
            <Image
              style={styles.emoticonimg}
              source={require('../src/visualaids/smile.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              galleryHandler();
            }}
          >
            <Image
              style={styles.imageimg}
              source={require('../src/visualaids/image.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => documentHandler()}>
            <Image
              style={styles.attachmentimg}
              source={require('../src/visualaids/paperclip.png')}
            />
          </TouchableOpacity>
          <Image
            style={styles.showmoreimg}
            source={require('../src/visualaids/more.png')}
          />
        </View>
      </View>
      <View style={styles.emojidisp}>
        {emoSelectorVisible ? (
          <EmojiSelector
            visible={emoSelectorVisible}
            onEmojiSelected={emoji => {
              setemoji(emoji);
              setchatList(emoji);
              setemoSelectorVisible(false);
            }}
            showSearchBar={true}
            showTabs={true}
            showHistory={true}
            style={styles.emojisection}
            showSectionTitles={true}
            category={Categories.all}
          />
        ) : null}
        {/* onSenderText(); clearFunc()  */}
      </View>
    </View>
  );
};

export default chatScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerStyle: {
    height: 60,
    backgroundColor: '#8C67A9',
    flexDirection: 'row',
  },
  leftArrowImage: {
    height: 15,
    width: 20,
    margin: 10,
    marginTop: 20,
    marginLeft: 20,
  },
  userprofile: {
    left: 15,
    top: 5,
  },
  userName: {
    fontSize: 20,
    color: 'white',
  },
  activityStatus: {
    color: '#DDD1E5',
  },
  profileImage: {
    height: 40,
    width: 40,
    marginTop: 10,
    borderRadius: 50 / 2,
    left: 5,
  },
  chatAreaList: {
    height: '80%',
    width: 400,
    backgroundColor: 'white',
  },
  msgBox: {
    backgroundColor: '#F5F6FA',
    width: 200,
    height: 50,
    borderRadius: 25,
    marginLeft: 20,
    marginTop: 5,
    paddingLeft: 30,
  },
  chatboxOptions: {
    flexDirection: 'row',
    backgroundColor: 'white',
    width: 400,
    height: 60,
  },
  emoticonimg: {
    height: 26,
    width: 25,
    marginLeft: 10,
    marginTop: 15,
  },
  imageimg: {
    height: 25,
    width: 25,
    marginLeft: 15,
    marginTop: 15,
  },
  attachmentimg: {
    height: 25,
    width: 25,
    marginLeft: 15,
    marginTop: 15,
  },
  showmoreimg: {
    height: 25,
    width: 25,
    marginLeft: 15,
    marginTop: 15,
  },
  chatArea: {
    backgroundColor: 'red',
    marginBottom: 45,
  },
  listText: {
    textAlign: 'justify',
    right: 20,
    fontSize: 15,
    backgroundColor: '#8C67A9',
    margin: 10,
    maxHeight: 200,
    minHeight: 40,
    maxWidth: 300,
    color: 'white',
    minWidth: 35,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    alignSelf: 'flex-end',
    padding: 5,
  },
  listLeftText: {
    textAlign: 'justify',
    fontSize: 15,
    backgroundColor: '#F5F6FA',
    margin: 10,
    left: 10,
    maxHeight: 200,
    minHeight: 40,
    maxWidth: 300,
    minWidth: 35,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    alignSelf: 'flex-start',
    padding: 5,
  },
  bottomChatbox: {
    bottom: 50,
    position: 'absolute',
  },
  timestamp: {
    width: 50,
    alignSelf: 'flex-end',
    fontSize: 13,
    bottom: 10,
  },
  timeslefttamp: {
    width: 50,
    alignSelf: 'flex-start',
    fontSize: 13,
    left: 10,
  },
  msgImg: {
    height: 100,
    width: 100,
    margin: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  emojisection: {
    height: 200,
    width: 400,
    bottom: 260,
  },
  emojisel: {
    height: 200,
    width: 200,
  },
  emojidisp: {
    fontSize: 60,
  },
});
