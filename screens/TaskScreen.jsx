import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Modal,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {Card} from 'react-native-elements';

const {width, height} = Dimensions.get('window');

const TaskScreen = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({title: '', description: ''});
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [editedTask, setEditedTask] = useState({title: '', description: ''});

  const addTask = () => {
    if (newTask.title.trim() !== '') {
      setTasks(prevTasks => [
        ...prevTasks,
        {...newTask, createdAt: new Date()},
      ]);
      setNewTask({title: '', description: ''});
      setIsAddModalVisible(false);
    }
  };

  const renderTaskItem = ({item}) => (
    <View>
      <Card containerStyle={styles.taskCard}>
        <View style={styles.statusRows}>
          <Text h4 style={styles.itemNumber}>
            Tittle:
            <Text style={styles.itemNumber}>  {item.title}</Text>
          </Text>
          <Text style={styles.statusValue}>Inprogress</Text>
        </View>
        <Text h4 style={styles.itemNumber}>
          Descriotion:
          <Text style={styles.itemValue}>  {item.description}</Text>
        </Text>
        <View style={styles.taskItemContainer}>
          <View>
            <Text style={styles.itemNumber}>
              Created on:
              <Text style={styles.dateTimeText}>  {item.createdAt.toLocaleString()}
              </Text>
            </Text>
          </View>
          <View style={styles.iconContainer}>
            <TouchableOpacity onPress={() => editTask(item)}>
              <Icon name="edit" size={20} style={styles.editIcon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => confirmDeleteTask(item)}>
              <Icon name="trash-2" size={20} style={styles.deleteIcon} />
            </TouchableOpacity>
          </View>
        </View>
      </Card>
    </View>
  );

  const confirmDeleteTask = task => {
    Alert.alert(
      'Confirm Deletion',
      `Are you sure you want to delete the task "${task.title}"?`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {text: 'Delete', onPress: () => deleteTask(task)},
      ],
    );
  };

  const deleteTask = task => {
    setTasks(tasks.filter(t => t !== task));
    Alert.alert(`Task "${task.title}" deleted.`);
  };

  const editTask = task => {
    setEditedTask(task);
    setIsEditModalVisible(true);
  };

  const saveEditedTask = () => {
    if (editedTask.title.trim() !== '') {
      setTasks(prevTasks =>
        prevTasks.map(t => (t === editedTask ? {...t, ...newTask} : t)),
      );
      setIsEditModalVisible(false);
      Alert.alert(`Task "${editedTask.title}" updated.`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.taskListHeader}>Task List</Text>

      {tasks.length > 0 ? (
        <FlatList
          data={tasks}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderTaskItem}
        />
      ) : (
        <Text style={styles.noTasksText}>No tasks added yet.</Text>
      )}

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setIsAddModalVisible(true)}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isAddModalVisible}
        onRequestClose={() => setIsAddModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity
              onPress={() => setIsAddModalVisible(false)}
              style={styles.closeButton}>
              <Icon name="x" size={24} color="#43436A" />
            </TouchableOpacity>
            <Text style={styles.modalHeaderText}>Add Task</Text>
            <TextInput
              style={styles.modalInput}
              placeholder="Enter task title"
              value={newTask.title}
              onChangeText={text =>
                setNewTask(prev => ({...prev, title: text}))
              }
            />
            <TextInput
              style={styles.modalInput}
              placeholder="Enter task description"
              value={newTask.description}
              onChangeText={text =>
                setNewTask(prev => ({...prev, description: text}))
              }
            />
            <Text onPress={addTask} style={styles.button}>
              Add
            </Text>
          </View>
        </View>
      </Modal>

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
            <Text style={styles.modalHeaderText}>Edit Task</Text>
            <TextInput
              style={styles.modalInput}
              placeholder="Enter edited task title"
              value={editedTask.title}
              onChangeText={text =>
                setEditedTask(prev => ({...prev, title: text}))
              }
            />
            <TextInput
              style={styles.modalInput}
              placeholder="Enter edited task description"
              value={editedTask.description}
              onChangeText={text =>
                setEditedTask(prev => ({...prev, description: text}))
              }
            />
            <Text onPress={saveEditedTask} style={styles.button}>
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
  },
  taskListHeader: {
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10,
    marginStart: 20,
  },
  taskItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  noTasksText: {
    textAlign: 'center',
  },
  taskCard: {
    borderRadius: 10,
    width: width * 0.92,
    elevation: 2,
    borderStartWidth: 4,
    borderStartColor: '#7FE37D',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  editIcon: {
    color: '#3A86FF',
    marginLeft: 10,
  },
  deleteIcon: {
    color: '#FF4B4B',
    marginLeft: 10,
  },
  addButton: {
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
  dateTimeText: {
    fontSize: 12,
    color: '#AAA',
  },
  taskTitle: {
    color: '#43436A',
  },
  button: {
    backgroundColor: '#4577EF',
    padding: 14,
    borderRadius: 5,
    marginTop: 16,
    textAlign: 'center',
    color: '#fFF',
  },
  statusRows: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
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
    padding: 2,
    paddingStart: 5,
    paddingEnd: 5,
  },
  statusValues: {
    fontSize: 12,
    color: '#2D2D30',
    borderWidth: 0.5,
    borderRadius: 8,
    padding: 2,
    paddingStart: 5,
    paddingEnd: 5,
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
  itemNumber: {
    fontSize: 14,
    color: '#43436A',
    fontWeight: '500',
    paddingRight: 15,
    marginBottom: 5,
  },
  itemValue: {
    fontSize: 12,
    fontWeight: '400',
    color: '#43436A',
    lineHeight: 22,
    letterSpacing: 0.1,
  },
};

export default TaskScreen;
