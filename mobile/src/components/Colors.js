import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    TextInput,
    FlatList,
    Text
} from 'react-native'


class Colors extends Component {
    renderItem = ({ item }) => (
        <View style={[styles.row, { backgroundColor: item.hex }]}>
            <Text style={styles.text}>{item.name}</Text>
        </View>
    )

    renderSeperator = (sectionId, rowId) => (
        <View key={rowId} style={styles.seperator} />
    )

    onSubmitEditing = () => (
        this.props.search(this.props.colors.query)
    )

    keyExtractor = item => item.hex

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={{
                        height: 40,
                        paddingLeft: 8,
                        borderColor: 'gray',
                        borderWidth: 1
                    }}
                    onChangeText={this.props.updateQuery}
                    value={this.props.colors.query}
                    returnKeyType='search'
                    onSubmitEditing={this.onSubmitEditing}
                />
                <FlatList
                    keyExtractor={this.keyExtractor}
                    renderItem={this.renderItem}
                    data={this.props.colors.results}
                    renderSeperator={this.renderSeperator}
                />
            </View>
        )
    }
}

export default Colors

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eeeeee',
        marginTop: 25
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10
    },
    text: {
        flex: 1
    },
    seperator: {
        flex: 1,
        height: 1,
        backgroundColor: '#8E8E8E'
    }
})
