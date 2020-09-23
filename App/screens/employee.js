import React from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

const Employee = ({ data }) => (
    <View
        style={[styles.container]}
    >
        <View style={{width:'88%'}}>
            <View
                style={styles.statusTextContainer}
            >
                <Text style={{ fontSize: 18 }}>
                    Name : {data.name}
                </Text>
                <Text
                    style={{ fontSize: 16, marginLeft: 40 }}
                >
                    Age: {data.age}
                </Text>
            </View>
            <Text
                style={{ fontSize: 16, marginTop: 10 }}
            >
                Gender: {data.gender}
            </Text>
            <Text
                style={{ fontSize: 16, marginTop: 10 }}
            >
                Phone No: {data.phoneNo}
            </Text>
            <Text
                style={{ fontSize: 16, marginTop: 10 }}
            >
                Email: {data.email}
            </Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 10,
        padding: 20,
        borderBottomWidth: 0.5,
        borderColor: '#707070',
    },
    leftBar: {
        width: 25,
        marginRight: 15,
    },
    statusTextContainer: {
        flexDirection: 'row'
    }
});

export default Employee;
