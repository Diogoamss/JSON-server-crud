import React, { useState, useEffect, useCallback } from "react";
import { TouchableOpacity, FlatList, Text, View } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

import styles from '../styles/styles.js';
import Button from "../components/button.js"
import buttonStyles from '../styles/stylesButton.js';
import { usePerson } from "../hooks/usePerson.js";
import PersonCard from "../components/PersonCard.js";

export default function HomeScreen({ navigation }){
    //pega tudo do hook
    const { person = [], handleDelete } = usePerson()

    return(
        <View style={styles.conteiner}>
            <Text style={styles.title}>Lista de usuarios.</Text>
            

            {person.length === 0
                ? <Text style={styles.title}>Nenhuma pesosa listada</Text>
                : <FlatList
                        data={person}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <PersonCard
                                item={item}
                                onDelete={() => handleDelete(item.id)}
                                onEdit={() => navigation.navigate('AddEdit', { person:item})}
                            />
                        )}
                    />
            }

            <View style={buttonStyles.buttonContainer}>
                <Button
                    title="Adicionar pessoa"
                    onPress={() => navigation.navigate('AddEdit')}
                    style={buttonStyles.buttons}
                />
            </View>
        
        </View>
    )
}