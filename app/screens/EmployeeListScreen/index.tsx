import { FlatList, Text, View } from 'react-native';
import { Employee } from '../../data';
import { useGetEmployeeList } from '../../hooks';
import { styles } from './styles';
import EmployeeItem from './components/EmployeeItem';

const EmployeeListScreen = () => {
  const { employees, loadMore } = useGetEmployeeList();

  const keyExtractor = (item: Employee) => item.id.toString();

  return (
    <View>
      <FlatList
        data={employees}
        renderItem={({ item }) => <EmployeeItem item={item} />}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        pagingEnabled
        onEndReached={loadMore}
        onEndReachedThreshold={0.7}
      />
    </View>
  );
};

export default EmployeeListScreen;
