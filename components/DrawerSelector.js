import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableHighlight, Button, Dimensions, TouchableOpacity, TextInput, FlatList, Image, Text, Modal } from 'react-native';

export default ({ setDrawerSelector = () => { }, backgroundColor = '#2c2c2e', selector = 'dot', selectorColor = 'red', itemTextStyle = { color: '#ffffff' }, itemHeight = 60, itemContainerStyle = {}, seperatingLineColor = '#000000', title = 'Title', titleTextStyle = {}, titleContainerStyle = {}, data = [['1', 'Item 1', () => { }], ['2', 'Item 2', () => { }]] }) => {
    const [modalVisible, setmodalVisible] = useState(false);
    const [selected, setSelected] = useState(0);
    setDrawerSelector(() => { setmodalVisible(true) });
    return (
        <View>
            <Modal animationType='slide' transparent={true} visible={modalVisible} >
                <View style={{ width: Dimensions.get("window").width, position: 'absolute', bottom: 0, backgroundColor: backgroundColor }}>
                    <TouchableOpacity onPress={() => setmodalVisible(false)} style={{ flex: 1, backgroundColor: 'white', height: itemHeight, justifyContent: 'center', borderBottomWidth: 0.5, borderBottomColor: seperatingLineColor, ...titleContainerStyle }}>

                        <Text style={{ fontSize: 18, alignSelf: 'center', color: 'red', fontWeight: 'bold', alignContent: 'center', ...titleTextStyle }}>
                            {title}
                        </Text>
                    </TouchableOpacity>
                    <FlatList
                        data={data}
                        keyExtractor={item => item[0]}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity onPress={() => {
                                    setSelected(index);
                                    item[2]();
                                }} style={{ height: itemHeight, flexDirection: "row", alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, borderBottomWidth: 0.5, borderBottomColor: seperatingLineColor, ...itemContainerStyle }}>
                                    <Text style={{ fontSize: 16, ...itemTextStyle }}>
                                        {item[1]}
                                    </Text>
                                    {selected == index && selector == 'dot' ? <View style={{ backgroundColor: selectorColor, height: 10, width: 10, borderRadius: 10 }} /> : null}
                                    {selected == index && selector != 'dot' ? <View style={{ backgroundColor: selectorColor, height: 10, width: 10 }} /> : null}
                                </TouchableOpacity>
                            );
                        }}
                    />

                </View>
            </Modal>
        </View>
    );
};