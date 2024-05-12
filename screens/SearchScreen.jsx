import React, {useState} from 'react';
import {
  Modal,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const SearchModal = ({isVisible, onClose, onSearch}) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    onSearch(searchText);
    onClose();
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Icon name="x" size={24} color="#43436A" />
          </TouchableOpacity>
          <TextInput
            style={styles.searchInput}
            placeholder="Search..."
            value={searchText}
            onChangeText={text => setSearchText(text)}
          />
          <TouchableOpacity onPress={handleSearch} style={styles.searchButton}>
            <Icon name="search" size={24} color="#43436A" />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  searchInput: {
    borderBottomWidth: 1,
    borderColor: '#43436A',
    marginBottom: 10,
    paddingVertical: 8,
  },
  searchButton: {
    alignSelf: 'flex-end',
  },
});

export default SearchModal;
