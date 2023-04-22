import React, { useState } from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';

const ValidaSenhaModal = ({ isVisible, onClose }) => {
    const [modalVisible, setModalVisible] = useState(isVisible);

    const closeModal = () => {
        setModalVisible(false);
        onClose();
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={closeModal}
        >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ backgroundColor: '#fff', padding: 20 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>
                        A senha deve ser igual!
                    </Text>
                    <TouchableOpacity onPress={closeModal}>
                        <Text style={{ fontSize: 16, color: '#2196F3' }}>Tentar novamente</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

export default ValidaSenhaModal;