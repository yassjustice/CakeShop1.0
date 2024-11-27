import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
    Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CakeSizePicker from "./CakeSizePicker";
import FlavorPicker from "./FlavorPicker";
import DesignPicker from "./DesignPicker";
// import CakeSizePicker from "./components/CakeSizePicker";
// import FlavorPicker from "./components/FlavorPicker";
// import DesignPicker from "./components/DesignPicker";

export default function CustomOrderScreen() {
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedFlavor, setSelectedFlavor] = useState(null);
    const [selectedDesign, setSelectedDesign] = useState(null);
    const [notes, setNotes] = useState("");

    const handleOrder = () => {
        if (!selectedSize || !selectedFlavor || !selectedDesign) {
            Alert.alert(
                "Missing Information",
                "Please complete all customization fields before placing your order."
            );
            return;
        }

        // Placeholder for order submission logic
        Alert.alert(
            "Order Placed!",
            `Your custom cake order has been submitted:\n\n- Size: ${selectedSize}\n- Flavor: ${selectedFlavor}\n- Design: ${selectedDesign}\n\nThank you!`
        );
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Create Your Custom Cake</Text>
            <Text style={styles.subtitle}>
                Tailor every detail to match your taste and style!
            </Text>

            <CakeSizePicker
                selectedSize={selectedSize}
                onSelectSize={setSelectedSize}
            />

            <FlavorPicker
                selectedFlavor={selectedFlavor}
                onSelectFlavor={setSelectedFlavor}
            />

            <DesignPicker
                selectedDesign={selectedDesign}
                onSelectDesign={setSelectedDesign}
            />

            <View style={styles.notesSection}>
                <Text style={styles.sectionTitle}>Additional Notes</Text>
                <TextInput
                    style={styles.notesInput}
                    placeholder="Any special instructions or details?"
                    value={notes}
                    onChangeText={setNotes}
                    multiline
                />
            </View>

            <TouchableOpacity style={styles.orderButton} onPress={handleOrder}>
                <Ionicons
                    name="checkmark-done-circle"
                    size={24}
                    color="#fff"
                    style={styles.orderButtonIcon}
                />
                <Text style={styles.orderButtonText}>Place Order</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "#FFF0F3",
        // margin: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        color: "#FF6A6A",
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: "#555",
        textAlign: "center",
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#444",
        marginBottom: 8,
    },
    notesSection: {
        marginBottom: 20,
    },
    notesInput: {
        backgroundColor: "#FFF",
        borderRadius: 8,
        padding: 12,
        height: 100,
        textAlignVertical: "top",
        elevation: 2,
    },
    orderButton: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FF6A6A",
        paddingVertical: 12,
        borderRadius: 8,
        elevation: 4,
        marginBottom: 40,
    },
    orderButtonIcon: {
        marginRight: 8,
    },
    orderButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
    },
});
