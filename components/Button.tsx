import { TouchableOpacity, Text, StyleSheet } from "react-native";

// Typescript requires interface for props
interface ButtonProps {
    onPress: () => void
    title: string
}

// This Button component uses the onPress and title props defined in the ButtonProps interface
const Button = ({ onPress, title }: ButtonProps) => {  
    return ( 
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#007bff',
        padding: 12,
        marginVertical: 10,
        borderRadius: 5,
        alignItems: 'center',
        width: 200,
    },
    text: {
        color: 'white',
        fontSize: 16,
    }
});

export default Button;  