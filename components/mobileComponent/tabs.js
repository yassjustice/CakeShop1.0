import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Tabs = ({ tabs, selectedTab, onTabPress }) => {
    return (
        <View style={styles.tabContainer}>
            {tabs.map((tab) => (
                <TouchableOpacity
                    key={tab}
                    style={[
                        styles.tab,
                        tab === selectedTab && styles.activeTab,
                    ]}
                    onPress={() => onTabPress(tab)}
                >
                    <Text
                        style={[
                            styles.tabText,
                            tab === selectedTab && styles.activeTabText,
                        ]}
                    >
                        {tab}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    tabContainer: {
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: "#FFF",
        paddingVertical: 10,
    },
    tab: {
        marginHorizontal: 5,
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 20,
        backgroundColor: "#EEE",
    },
    activeTab: {
        backgroundColor: "#4CAF50",
    },
    tabText: {
        fontSize: 14,
        color: "#333",
    },
    activeTabText: {
        color: "white",
    },
});

export default Tabs;
