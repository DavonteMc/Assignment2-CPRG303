import { TouchableOpacity, Text, StyleSheet } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';

// Typescript requires interface for props
interface ButtonProps {
    onPress: () => void
}

// This Button component uses the onPress and title props defined in the ButtonProps interface
const BackButton = ({ onPress }: ButtonProps) => {  
    return ( 
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <AntDesign name="left" size={24} color="black" />
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    button: {
        padding: 2,
        margin: 2,
        alignItems: 'center',
    }
});

export default BackButton;  