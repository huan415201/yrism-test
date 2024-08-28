import { debounce } from 'lodash';
import { useCallback, useState } from 'react';
import { ActivityIndicator, FlatList, TextInput, View } from 'react-native';
import { Employee } from '../../data';
import { useGetEmployeeList } from '../../hooks';
import { ConfirmModal, EmployeeItem } from './components';
import { styles } from './styles';

const EmployeeListScreen = () => {
  const { employees, loadMore, deleteEmployee, loading, search, setSearch } =
    useGetEmployeeList();
  const [isShowConfirmModal, setIsShowConfirmModal] = useState(false);
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [deleteName, setDeleteName] = useState<string>('');

  const keyExtractor = (item: Employee) => item.id.toString();

  const onDelete = (id: number, name: string) => {
    setIsShowConfirmModal(true);
    setDeleteId(id);
    setDeleteName(name);
  };

  const handleDelete = () => {
    if (deleteId) deleteEmployee(deleteId);
    closeModal();
  };

  const closeModal = () => setIsShowConfirmModal(false);

  const doSearch = (value: string) => {
    setSearch(value);
  };

  const handleSetSearch = useCallback(debounce(doSearch, 300), []);

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={handleSetSearch}
        placeholder="Search by name ..."
        style={styles.search}
      />
      {employees?.length ? (
        <FlatList
          data={employees}
          renderItem={({ item, index }) => (
            <EmployeeItem item={item} index={index} onDelete={onDelete} />
          )}
          keyExtractor={keyExtractor}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          onEndReached={loadMore}
          onEndReachedThreshold={0.3}
          ListFooterComponent={() =>
            loading ? <ActivityIndicator size="large" /> : null
          }
        />
      ) : (
        <ActivityIndicator size="large" />
      )}
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
