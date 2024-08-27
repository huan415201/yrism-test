import { memo } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { TrashBin } from '../../../../assets/images';
import { styles } from './styles';
import { EmployeeItemProps } from './types';

const EmployeeItem = ({ item, index, onDelete }: EmployeeItemProps) => (
  <View style={styles.container}>
    <View style={styles.topWrapper}>
      <View style={styles.row}>
        <View style={styles.avatarWrapper}>
          <Image
            source={{
              uri: `https://api.dicebear.com/9.x/pixel-art/png?seed=${item.name}`,
            }}
            style={styles.avatar}
          />
        </View>
        <View>
          <Text style={styles.name}>
            {index + 1}. {item.name}
          </Text>
          <Text style={styles.description}>Title: {item.title}</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => onDelete(item.id, item.name)}
        style={styles.deleteBtn}>
        <Image source={TrashBin} style={styles.deleteBtnImg} />
      </TouchableOpacity>
    </View>
    <Text style={styles.description}>
      Years of experience: {item.yoe} {item.yoe === 1 ? 'year' : 'years'}
    </Text>
    <Text style={styles.description}>{item.description}</Text>
  </View>
);

export default memo(
  EmployeeItem,
  (prev, next) => JSON.stringify(prev) === JSON.stringify(next),
);
