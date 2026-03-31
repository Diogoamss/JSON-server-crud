import { FlatList, Text, View } from "react-native";

import styles from '../styles/styles.js';
import Button from "../components/button.js"
import buttonStyles from '../styles/stylesButton.js';
import { usePerson } from "../hooks/usePerson.js";
import PersonCard from "../components/PersonCard.js";
import Loading from "../components/activityIndicator.js";
import SearchBar from "../components/searchBar.js";


export default function HomeScreen({ navigation }){
    //pega tudo do hook 
    const { person = [], handleDelete, loading, search, handleSearch, filtered } = usePerson()


    return(
        <View style={styles.content}>
        <View style={styles.header}/>
        <View style={styles.container}>
            <Text style={styles.title}>Lista de usuarios.</Text>
            <SearchBar search={search} setSearch={handleSearch} />
            

            {filtered.length === 0
                ? <Text style={styles.title}>Nenhuma pessoa listada</Text>
                : <FlatList
                        
                        style={styles.listConteiner}
                        data={filtered}
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
                    style={buttonStyles.buttonAdd}
                />
            </View>

            {loading ? <Loading/>: null}
        </View>
        <View style={styles.footer}/>
        </View>
    )
}