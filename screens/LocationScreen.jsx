import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Modal,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {Card} from 'react-native-elements';

const {width, height} = Dimensions.get('window');

const LocationScreen = () => {
  const [locations, setLocations] = useState([]);
  const [newLocation, setNewLocation] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [editedLocation, setEditedLocation] = useState('');

  const addLocation = () => {
    if (newLocation.trim() !== '') {
      setLocations(prevLocations => [...prevLocations, newLocation]);
      setNewLocation('');
      setIsModalVisible(false);
    }
  };

  const renderLocationItem = ({item, index}) => (
    <Card containerStyle={styles.locationCard}>
      <View style={styles.locationItemContainer}>
        <Text>{item}</Text>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => editLocation(item)}>
            <Icon name="edit" size={20} style={styles.editIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => confirmDeleteLocation(item)}>
            <Icon name="trash-2" size={20} style={styles.deleteIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </Card>
  );

  const confirmDeleteLocation = location => {
    Alert.alert(
      'Confirm Deletion',
      `Are you sure you want to delete the location "${location}"?`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {text: 'Delete', onPress: () => deleteLocation(location)},
      ],
    );
  };

  const deleteLocation = location => {
    setLocations(locations.filter(loc => loc !== location));
    alert(`Location "${location}" deleted.`);
  };

  const editLocation = location => {
    setEditedLocation(location);
    setIsEditModalVisible(true);
  };

  const saveEditedLocation = () => {
    if (editedLocation.trim() !== '') {
      setLocations(prevLocations =>
        prevLocations.map(loc => (loc === editedLocation ? newLocation : loc)),
      );
      setIsEditModalVisible(false);
      alert(`Location "${editedLocation}" edited.`);
    }
  };
  return (
    <View style={styles.container}>
      <Card containerStyle={styles.cardContainer}>
        <View style={styles.cardContents}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.statusRows}>
              <Text style={styles.statusValue}>Locations</Text>
              <Text style={styles.breadcrumbs}>/</Text>
              <Text style={styles.statusValues}>India</Text>
              <Text style={styles.breadcrumbs}>/</Text>
              <Text style={styles.statusValues}>New Delhi</Text>
              <Text style={styles.breadcrumbs}>/</Text>
              <Text style={styles.statusValues}>Laxmi nagar</Text>
              <Text style={styles.breadcrumbs}>/</Text>
              <Text style={styles.statusValues}>Laxmi nagar</Text>
              <Text style={styles.breadcrumbs}>/</Text>
              <Text style={styles.statusValues}>Laxmi nagar</Text>
              <View style={styles.statusRows}>
                <Icon
                  name="more-vertical"
                  size={20}
                  onPress={() => alert('More Vertical Clicked')}
                />
              </View>
            </View>
          </ScrollView>
        </View>
      </Card>
      <Text style={styles.locationListHeader}>Location List</Text>

      {locations.length > 0 ? (
        <FlatList
          data={locations}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderLocationItem}
        />
      ) : (
        <Text style={styles.noLocationsText}>No locations added yet.</Text>
      )}
      <TouchableOpacity
        style={styles.button}
        onPress={() => setIsModalVisible(true)}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>

      {/* Add Location Modal */}

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity
              onPress={() => setIsModalVisible(false)}
              style={styles.closeButton}>
              <Icon name="x" size={24} color="#43436A" />
            </TouchableOpacity>
            <Text style={styles.modalHeaderText}>Add Location</Text>
            <TextInput
              style={styles.modalInput}
              placeholder="Enter location"
              value={newLocation}
              onChangeText={text => setNewLocation(text)}
            />
            <Text style={styles.addButton} onPress={addLocation}>
              Add
            </Text>
          </View>
        </View>
      </Modal>

      {/* Edite Location Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isEditModalVisible}
        onRequestClose={() => setIsEditModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity
              onPress={() => setIsEditModalVisible(false)}
              style={styles.closeButton}>
              <Icon name="x" size={24} color="#43436A" />
            </TouchableOpacity>
            <Text style={styles.modalHeaderText}>Edit Location</Text>
            <TextInput
              style={styles.modalInput}
              placeholder="Enter edited location"
              value={editedLocation}
              onChangeText={text => setEditedLocation(text)}
            />
            <Text style={styles.addButton} onPress={saveEditedLocation}>
              Save
            </Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    padding: 16,
  },
  locationCard: {
    margin: 0,
    marginBottom: 14,
    padding: 0,
    borderRadius: 10,
    elevation: 2,
    borderStartWidth: 4,
    borderStartColor: '#7FE37D',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  editIcon: {
    color: '#4577EF',
    marginLeft: 10,
  },
  deleteIcon: {
    color: 'red',
    marginLeft: 10,
  },

  headerText: {
    fontSize: 20,
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: '#4577EF',
    padding: 14,
    borderRadius: 5,
    marginTop: 16,
    textAlign: 'center',
    color: '#fFF',
  },
  locationListHeader: {
    fontSize: 18,
    marginTop: 10,
    marginBottom: 10,
  },
  locationItemContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  viewDetailsText: {
    color: 'blue',
  },
  noLocationsText: {
    textAlign: 'center',
  },
  cardContainer: {
    margin: 0,
    marginBottom: 14,
    padding: 0,
    borderRadius: 10,
    width: width * 0.92,
    elevation: 2,
    borderStartWidth: 4,
    borderStartColor: '#7FE37D',
  },
  button: {
    backgroundColor: '#4577EF',
    width: width * 0.146,
    paddingVertical: 10,
    borderRadius: 100,
    marginTop: 16,
    position: 'absolute',
    bottom: 30,
    right: 20,
    elevation: 3,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 24,
  },
  cardContents: {
    padding: 15,
    width: width * 0.9,
  },
  itemNumber: {
    fontSize: 14,
    color: '#43436A',
    fontWeight: '500',
    paddingRight: 15,
    marginBottom: 5,
  },
  breadcrumbs: {
    fontSize: 14,
    color: '#43436A',
    fontWeight: '500',
    paddingRight: 4,
    paddingLeft: 4,
    marginBottom: 5,
  },
  itemValue: {
    fontSize: 12,
    fontWeight: '400',
    color: '#43436A',
    lineHeight: 22,
    letterSpacing: 0.1,
  },
  statusRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  statusRows: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statusLabel: {
    fontSize: 12,
    color: '#AAA',
  },
  statusValue: {
    fontSize: 12,
    color: 'green',
    backgroundColor: '#BAEDD1',
    borderRadius: 8,
    padding: 4,
    paddingStart: 5,
    paddingEnd: 5,
  },
  statusValues: {
    fontSize: 12,
    color: '#2D2D30',
    borderRadius: 8,
    padding: 4,
    paddingStart: 5,
    paddingEnd: 5,
    backgroundColor: '#EBEBEB',
  },
  statusSubValue: {
    fontSize: 12,
    color: '#2D2D30',
    borderWidth: 0.5,
    borderRadius: 8,
    marginStart: 4,
    padding: 2,
    paddingStart: 5,
    paddingEnd: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#F6F9FF',
    padding: 20,
    borderRadius: 10,
    width: width, // Set width to full width
  },
  modalHeaderText: {
    fontSize: 18,
    marginBottom: 10,
  },
  modalInput: {
    height: 50,
    borderColor: '#AAAAAA',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
    backgroundColor: '#FFF',
    borderRadius: 6,
    elevation: 2,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
};

export default LocationScreen;
