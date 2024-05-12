import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Modal,
  TextInput,
  ScrollView,
} from 'react-native';
import Chechboxs from '../../components/Checkbox';
import Icon from 'react-native-vector-icons/Feather';
import {Card, withBadge} from 'react-native-elements';
import Picker from 'react-native-picker-select';
import {styles} from '../../components/Style';

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

  const FilterIconWithBadge = withBadge(1)(Icon);

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

  const handleSearchIconPress = () => {
    // Check if there is text in the search input
    if (searchText.trim() === '') {
      // If the search input is empty, open the filter modal
      handleFilterIconPress();
    } else {
      // If there is text, perform a search (you can implement your search logic here)
      console.log('Performing search for:', searchText);
      // Add your search logic here (e.g., filter the cards based on the search text)
    }
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.searchInput}>
            <TextInput
              placeholder="Search..."
              placeholderTextColor={'#667080'}
              value={searchText}
              onChangeText={(text) => setSearchText(text)}
            />
            <TouchableOpacity onPress={handleSearchIconPress}>
              <Icon name="search" size={22} color="#43436A" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={handleFilterIconPress}>
            <Icon
              name="filter"
              size={24}
              color="#43436A"
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
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
              <View style={styles.filterModal}>
                <Text style={styles.modalHeader}>Filter By</Text>
                <TouchableOpacity
                  onPress={() => {
                    setFilterModalVisible(false);
                    setShowFilterCancelButton(false); // Hide the cancel button
                  }}
                  style={styles.closeButton}>
                  <Icon name="x" size={24} color="#43436A" />
                </TouchableOpacity>
                <Text style={styles.filterText}>Item Class</Text>
                <View style={styles.filterOptionsContainer}>
                  <Chechboxs
                    label="Automotive Lift"
                    value={filterOptions.option1}
                    onValueChange={() =>
                      setFilterOptions({
                        ...filterOptions,
                        option1: !filterOptions.option1,
                      })
                    }
                  />
                  <Chechboxs
                    label="Compressed Air"
                    value={filterOptions.option1}
                    onValueChange={() =>
                      setFilterOptions({
                        ...filterOptions,
                        option1: !filterOptions.option1,
                      })
                    }
                  />
                  <Chechboxs
                    label="IIoT Device"
                    value={filterOptions.option1}
                    onValueChange={() =>
                      setFilterOptions({
                        ...filterOptions,
                        option1: !filterOptions.option1,
                      })
                    }
                  />
                </View>
                <Text style={styles.filterText}>Item Type</Text>
                <View style={styles.filterOptionsContainer}>
                  <Chechboxs
                    label="Model"
                    value={filterOptions.option2}
                    onValueChange={() =>
                      setFilterOptions({
                        ...filterOptions,
                        option2: !filterOptions.option2,
                      })
                    }
                  />
                  <Chechboxs
                    label="Component"
                    value={filterOptions.option2}
                    onValueChange={() =>
                      setFilterOptions({
                        ...filterOptions,
                        option2: !filterOptions.option2,
                      })
                    }
                  />
                </View>
                <Text style={styles.filterText}>Status</Text>
                <View style={styles.filterOptionsContainer}>
                  <Chechboxs
                    label="Active"
                    value={filterOptions.option2}
                    onValueChange={() =>
                      setFilterOptions({
                        ...filterOptions,
                        option2: !filterOptions.option2,
                      })
                    }
                  />
                  <Chechboxs
                    label="Returned"
                    value={filterOptions.option2}
                    onValueChange={() =>
                      setFilterOptions({
                        ...filterOptions,
                        option2: !filterOptions.option2,
                      })
                    }
                  />
                  <Chechboxs
                    label="Terminated"
                    value={filterOptions.option2}
                    onValueChange={() =>
                      setFilterOptions({
                        ...filterOptions,
                        option2: !filterOptions.option2,
                      })
                    }
                  />
                  <Chechboxs
                    label="Loaned"
                    value={filterOptions.option2}
                    onValueChange={() =>
                      setFilterOptions({
                        ...filterOptions,
                        option2: !filterOptions.option2,
                      })
                    }
                  />
                  <Chechboxs
                    label="Out of Service"
                    value={filterOptions.option2}
                    onValueChange={() =>
                      setFilterOptions({
                        ...filterOptions,
                        option2: !filterOptions.option2,
                      })
                    }
                  />
                  <Chechboxs
                    label="Off-Site Repair"
                    value={filterOptions.option2}
                    onValueChange={() =>
                      setFilterOptions({
                        ...filterOptions,
                        option2: !filterOptions.option2,
                      })
                    }
                  />
                </View>
                <View style={styles.modalButtonsContainer}>
                  <TouchableOpacity
                    style={styles.cancelButton}
                    onPress={() => {}}>
                    <Text style={styles.cancelButtonText}>Clear all</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.applyButton}
                    onPress={handleFilterApply}>
                    <Text style={styles.applyButtonText}>Apply</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </View>
        </Modal>
        <Modal
          animationType="slide"
          transparent={true}
          visible={itemCreationModalVisible}
          onRequestClose={() => setItemCreationModalVisible(false)}>
          <View style={styles.filterModalContainer}>
            <View style={styles.filterModal}>
              <TouchableOpacity
                onPress={() => {
                  setItemCreationModalVisible(false);
                  setShowCancelButton(false);
                }}
                style={styles.closeButton}>
                <Icon name="x" size={24} color="#43436A" />
              </TouchableOpacity>
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
