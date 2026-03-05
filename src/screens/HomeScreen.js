import react from "react";
import { useState, useEffect } from "react";
import { Button, FlatList, View } from "react-native-web";
import styles from '../styles/styles';
import { Alert } from "react-native";


export function HomeScreen(){
    return(
        <View style={styles.conteiner}>
            <Text style={styles.title}>Lista de usuarios.</Text>
            <View style={styles.listConteiner}>
                 <FlatList
                    data={peoples}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View>
                            <Text>{item.firstname} {item.lastname}</Text>
                            <Text>{item.email}</Text>

                            <View style={buttonStyles.buttons}>
                                <Button
                                    title="Delete person" onPress={() => {
                                        Alert.alert("Deletar Credencial", "Você quer deletar esta credencial?"
                                            [{ text: "Cancel"}, {text: "Delete", onPress: () => deletePerson(item.id)}])
                                    }}
                                />
                                <Button title="edit person" onPress={() => navigation.navigate('AddEdit', item)}/>
                            </View>
                        </View>
                    )} 
                />
            </View>
            <View style={buttonStyles.buttons}>
                <View>
                    <Button title="Add person" onPress={() => navigation.navigate('AddEdit')}/>
                </View>
            </View>
        
        </View>
    )
}