import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles"
import { ButtonInterface } from '../../components/ButtonInterface';
import { MenuTabTypes, MenuTabs } from "../../navigation/MenuTab/MenuBottomTab.navigation";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { useAuth } from "../../hook/auth"

export function Perfil({ navigation }: MenuTabTypes) {
  const { user, signOut } = useAuth()
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.name}>{user?.user.name}</Text>
      </View>
      <View>
        <View style={styles.sociais}>
          <FontAwesome5 name="facebook" size={24} color="white" />
          <Text style={styles.sociaisText}>https://facebook.com</Text>
        </View>
        <View style={styles.sociais}>
          <FontAwesome5 name="instagram" size={24} color="white" />
          <Text style={styles.sociaisText}>https://instagram.com</Text>
        </View>
        <View style={styles.sociais}>
          <FontAwesome5 name="linkedin" size={24} color="white" />
          <Text style={styles.sociaisText}>https://linkedin.com</Text>
        </View>
      </View>
      <ButtonInterface title="Sair" type="primary"
        onPressI={async() => await signOut()}
      />
    </View>
  )
};