import React, { useState, useEffect, useCallback } from "react";
import { Button, FlatList, Text, View } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import styles from '../styles/styles';
import buttonStyles from '../styles/stylesButton';
import { usePerson } from "../hooks/usePerson";
import PersonCard from "../components/PersonCard";

export default function HomeScreen({ navigation }){
    //pega tudo do hook
    const { person = [], handleDelete } = usePerson()

    return(
        <View style={styles.conteiner}>
            <Text style={styles.title}>Lista de usuarios.</Text>
            

            {person.length === 0
                ? <Text>Nenhuma pesosa listada</Text>
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
                    backgroundColor='#79b477'
                />
            </View>
        
        </View>
    )
}