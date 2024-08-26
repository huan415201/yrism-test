import { memo } from 'react';
import { Text, View } from 'react-native';
import { Employee } from '../../../../data';

const EmployeeItem = ({ item }: { item: Employee }) => (
  <View>
    <Text>{item.name}</Text>
  </View>
);

export default memo(
  EmployeeItem,
  (prev, next) => JSON.stringify(prev) === JSON.stringify(next),
);
