import React, {useState} from 'react';
import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Modal,
  TextInput,
  ScrollView,
} from 'react-native';
import Chechboxs from '../components/Checkbox';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Card, withBadge} from 'react-native-elements';
import Picker from 'react-native-picker-select';

import {styles} from '../components/Style';
const {width, height} = Dimensions.get('window');

export default function ItemScreen() {
  const [filterModalVisible, setFilterModalVisible] = useState(false);
  const [showCancelButton, setShowCancelButton] = useState(true);
  const [showFilterCancelButton, setShowFilterCancelButton] = useState(true);

  const [itemCreationModalVisible, setItemCreationModalVisible] =
    useState(false);
  const [itemDetails, setItemDetails] = useState({
    itemNumber: '',
    itemDescription: '',
    itemClass: '',
    itemType: '',
  });

  // Wrap the Card component with withBadge
  const CardWithBadge = withBadge(5)(Card);

  const [filterOptions, setFilterOptions] = useState({
    option1: false,
    option2: false,
    // Add more options as needed
  });
  const [searchText, setSearchText] = useState('');

  const handleFilterIconPress = () => {
    setFilterModalVisible(true);
    setShowFilterCancelButton(true); // Show the cancel button
  };

  const handleFilterApply = () => {
    // Perform actions based on selected filter options
    // For now, let's just close the modal
    setFilterModalVisible(false);
  };

  const handlePlusButtonPress = () => {
    setItemCreationModalVisible(true);
    setShowCancelButton(true); // Show the cancel button
  };

  const handleItemSubmit = () => {
    // Handle the submission of the created item details
    // For now, let's just log the details
    console.log('Item Details:', itemDetails);

    // Close the item creation modal
    setItemCreationModalVisible(false);
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search..."
            placeholderTextColor={'#667080'}
            value={searchText}
            onChangeText={text => setSearchText(text)}
          />
          <TouchableOpacity onPress={handleFilterIconPress}>
            <Icon
              name="filter"
              size={24}
              color="#0189EA"
              style={styles.filterIcon}
            />
          </TouchableOpacity>
        </View>
        <ScrollView>
          <Card containerStyle={styles.cardContainer}>
            <View style={styles.cardContents}>
              <View style={styles.statusRow}>
                <Text h4 style={styles.itemNumber}>
                  #:
                  <Text style={styles.itemNumber}> {' '}2215415</Text>
                </Text>
                <Text style={styles.statusValue}>Active</Text>
              </View>
              <Text h4 style={styles.itemNumber}>
                Description:
                <Text style={styles.itemValue}>
                  {' '}
                  This is my first item here is extra description.
                </Text>
              </Text>
              <View style={styles.statusRows}>
                <View style={styles.statusRows}>
                  <Text style={styles.statusValues}>Modal</Text>
                  <Text style={styles.statusSubValue}>Automotive Lift</Text>
                </View>
                <Text style={styles.statusLabel}>28-01-2024 10:12PM</Text>
              </View>
            </View>
          </Card>
          <Card containerStyle={styles.cardContainer}>
            <View style={styles.cardContents}>
              <View style={styles.statusRow}>
                <Text h4 style={styles.itemNumber}>
                  #:
                  <Text style={styles.itemNumber}> {' '}2215415</Text>
                </Text>
                <Text style={styles.statusValue}>Active</Text>
              </View>
              <Text h4 style={styles.itemNumber}>
                Description:
                <Text style={styles.itemValue}>
                  {' '}
                  This is my first item here is extra description.
                </Text>
              </Text>
              <View style={styles.statusRows}>
                <View style={styles.statusRows}>
                  <Text style={styles.statusValues}>Modal</Text>
                  <Text style={styles.statusSubValue}>Automotive Lift</Text>
                </View>
                <Text style={styles.statusLabel}>28-01-2024 10:12PM</Text>
              </View>
            </View>
          </Card>
          <Card containerStyle={styles.cardContainer}>
            <View style={styles.cardContents}>
              <View style={styles.statusRow}>
                <Text h4 style={styles.itemNumber}>
                  #:
                  <Text style={styles.itemNumber}> {' '}2215415</Text>
                </Text>
                <Text style={styles.statusValue}>Active</Text>
              </View>
              <Text h4 style={styles.itemNumber}>
                Description:
                <Text style={styles.itemValue}>
                  {' '}
                  This is my first item here is extra description.
                </Text>
              </Text>
              <View style={styles.statusRows}>
                <View style={styles.statusRows}>
                  <Text style={styles.statusValues}>Modal</Text>
                  <Text style={styles.statusSubValue}>Automotive Lift</Text>
                </View>
                <Text style={styles.statusLabel}>28-01-2024 10:12PM</Text>
              </View>
            </View>
          </Card>
          <Card containerStyle={styles.cardContainer}>
            <View style={styles.cardContents}>
              <View style={styles.statusRow}>
                <Text h4 style={styles.itemNumber}>
                  #:
                  <Text style={styles.itemNumber}> {' '}2215415</Text>
                </Text>
                <Text style={styles.statusValue}>Active</Text>
              </View>
              <Text h4 style={styles.itemNumber}>
                Description:
                <Text style={styles.itemValue}>
                  {' '}
                  This is my first item here is extra description.
                </Text>
              </Text>
              <View style={styles.statusRows}>
                <View style={styles.statusRows}>
                  <Text style={styles.statusValues}>Modal</Text>
                  <Text style={styles.statusSubValue}>Automotive Lift</Text>
                </View>
                <Text style={styles.statusLabel}>28-01-2024 10:12PM</Text>
              </View>
            </View>
          </Card>
          <Card containerStyle={styles.cardContainer}>
            <View style={styles.cardContents}>
              <View style={styles.statusRow}>
                <Text h4 style={styles.itemNumber}>
                  #:
                  <Text style={styles.itemNumber}> {' '}2215415</Text>
                </Text>
                <Text style={styles.statusValue}>Active</Text>
              </View>
              <Text h4 style={styles.itemNumber}>
                Description:
                <Text style={styles.itemValue}>
                  {' '}
                  This is my first item here is extra description.
                </Text>
              </Text>
              <View style={styles.statusRows}>
                <View style={styles.statusRows}>
                  <Text style={styles.statusValues}>Modal</Text>
                  <Text style={styles.statusSubValue}>Automotive Lift</Text>
                </View>
                <Text style={styles.statusLabel}>28-01-2024 10:12PM</Text>
              </View>
            </View>
          </Card>
          <Card containerStyle={styles.cardContainer}>
            <View style={styles.cardContents}>
              <View style={styles.statusRow}>
                <Text h4 style={styles.itemNumber}>
                  #:
                  <Text style={styles.itemNumber}> {' '}2215415</Text>
                </Text>
                <Text style={styles.statusValue}>Active</Text>
              </View>
              <Text h4 style={styles.itemNumber}>
                Description:
                <Text style={styles.itemValue}>
                  {' '}
                  This is my first item here is extra description.
                </Text>
              </Text>
              <View style={styles.statusRows}>
                <View style={styles.statusRows}>
                  <Text style={styles.statusValues}>Modal</Text>
                  <Text style={styles.statusSubValue}>Automotive Lift</Text>
                </View>
                <Text style={styles.statusLabel}>28-01-2024 10:12PM</Text>
              </View>
            </View>
          </Card>
        </ScrollView>
        <TouchableOpacity style={styles.button} onPress={handlePlusButtonPress}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <Modal
          animationType="slide"
          transparent={true}
          visible={filterModalVisible}
          onRequestClose={() => setFilterModalVisible(false)}>
          <View style={styles.filterModalContainer}>
            <View style={styles.filterModal}>
              <Text style={styles.modalHeader}>Filter By</Text>
              <View style={styles.filterOptionsContainer}>
                <Chechboxs
                  value={filterOptions.option1}
                  onValueChange={() =>
                    setFilterOptions({
                      ...filterOptions,
                      option1: !filterOptions.option1,
                    })
                  }
                />
                <Text>Option 1</Text>
              </View>
              <View style={styles.filterOptionsContainer}>
                <Chechboxs
                  value={filterOptions.option2}
                  onValueChange={() =>
                    setFilterOptions({
                      ...filterOptions,
                      option2: !filterOptions.option2,
                    })
                  }
                />
                <Text>Option 2</Text>
              </View>
              <TouchableOpacity
                style={styles.applyButton}
                onPress={handleFilterApply}>
                <Text style={styles.applyButtonText}>Apply</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => {
                  setFilterModalVisible(false);
                  setShowFilterCancelButton(false); // Hide the cancel button
                }}>
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <Modal
          animationType="slide"
          transparent={true}
          visible={itemCreationModalVisible}
          onRequestClose={() => setItemCreationModalVisible(false)}>
          <View style={styles.itemCreationModalContainer}>
            <View style={styles.itemCreationModal}>
              <Text style={styles.modalHeader}>Item Creation</Text>
              <TextInput
                style={styles.input}
                placeholder="Item Number"
                placeholderTextColor={'#AAAAAA'}
                value={itemDetails.itemNumber}
                onChangeText={text =>
                  setItemDetails({...itemDetails, itemNumber: text})
                }
              />
              <TextInput
                style={styles.input}
                placeholder="Item Description"
                placeholderTextColor={'#AAAAAA'}
                value={itemDetails.itemDescription}
                onChangeText={text =>
                  setItemDetails({...itemDetails, itemDescription: text})
                }
              />
              <View style={styles.SelectInput}>
                <Picker
                  placeholder={{
                    label: 'Select Item Class',
                    value: null,
                    color: '#8A8F9B',
                  }}
                  items={[
                    {label: 'Automotive Lift', value: 'Automotive Lift'},
                    {label: 'Other Class 1', value: 'Other Class 1'},
                  ]}
                  onValueChange={value =>
                    setItemDetails({...itemDetails, itemClass: value})
                  }
                />
              </View>
              <View style={styles.SelectInput}>
                <Picker
                  placeholder={{
                    label: 'Select Asset Type',
                    value: null,
                    color: '#8A8F9B',
                  }}
                  items={[
                    {label: 'Model', value: 'Model'},
                    {label: 'Other Type 1', value: 'Other Type 1'},
                  ]}
                  onValueChange={value =>
                    setItemDetails({...itemDetails, itemType: value})
                  }
                />
              </View>
              <TouchableOpacity
                style={styles.applyButton}
                onPress={handleItemSubmit}>
                <Text style={styles.applyButtonText}>Submit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => {
                  setItemCreationModalVisible(false);
                  setShowCancelButton(false);
                }}>
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
}
