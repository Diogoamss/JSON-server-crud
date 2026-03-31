import { TextInput, View } from "react-native";
import buttonStyles from "../styles/stylesButton";
import styles from "../styles/styles";

export default function SearchBar({search, setSearch}){
    return(
            <TextInput
                placeholder="Buscar pessoa..."
                style={buttonStyles.searchBar}
                value={search}
                onChangeText={setSearch}
            />
    )
}