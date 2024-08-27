import { Image, Text, TouchableOpacity, View } from 'react-native';
import ReactNativeModal from 'react-native-modal';
import { styles } from './styles';
import { ConfirmModalProps } from './types';

const ConfirmModal = ({
  isVisible,
  name,
  onOk,
  onClose,
}: ConfirmModalProps) => {
  return (
    <ReactNativeModal isVisible={isVisible} onBackdropPress={onClose}>
      <View style={styles.container}>
        <Text style={styles.text}>
          Are your sure that you want to delete this employee?
        </Text>
        <View style={styles.row}>
          <Image
            source={{
              uri: `https://api.dicebear.com/9.x/pixel-art/png?seed=${name}`,
            }}
            style={styles.avatar}
          />
          <Text style={styles.name}>{name}</Text>
        </View>
        <View style={[styles.row, styles.actionRow]}>
          <TouchableOpacity
            onPress={onClose}
            style={[styles.btn, styles.cancelBtn]}>
            <Text style={styles.btnText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onOk}
            style={[styles.btn, styles.deleteBtn]}>
            <Text style={styles.btnText}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ReactNativeModal>
  );
};

export default ConfirmModal;
