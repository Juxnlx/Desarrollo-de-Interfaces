import { Button, Text, View } from "react-native";

function pulsar(){
    alert("Boton pulsado");
}

export default function Index() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Text>Hallo mundo</Text>

            <Button title="Boton" onPress={pulsar} />
        </View>
    );
}


