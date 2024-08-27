import { useState } from 'react';
import { FlatList, View } from 'react-native';
import { Employee } from '../../data';
import { useGetEmployeeList } from '../../hooks';
import { ConfirmModal, EmployeeItem } from './components';
import { styles } from './styles';

const EmployeeListScreen = () => {
  const { employees, loadMore } = useGetEmployeeList();
  const [isShowConfirmModal, setIsShowConfirmModal] = useState(false);
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [deleteName, setDeleteName] = useState<string>('');

  const keyExtractor = (item: Employee) => item.id.toString();

  const onDelete = (id: number, name: string) => {
    setIsShowConfirmModal(true);
    setDeleteId(id);
    setDeleteName(name);
  };

  const handleDelete = () => {};

  const closeModal = () => setIsShowConfirmModal(false);

  return (
    <View style={styles.container}>
      <FlatList
        data={employees}
        renderItem={({ item, index }) => (
          <EmployeeItem item={item} index={index} onDelete={onDelete} />
        )}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        onEndReached={loadMore}
        onEndReachedThreshold={0.3}
        contentContainerStyle={styles.list}
      />
      <ConfirmModal
        isVisible={isShowConfirmModal}
        name={deleteName}
        onOk={handleDelete}
        onClose={closeModal}
      />
    </View>
  );
};

export default EmployeeListScreen;
