import { Pressable, View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function Button({ children, onPress, mode, style }) {
  return (
    <View style={[style, styles.outerContainer]}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          styles.button,
          mode === "flat" && styles.flat,
          pressed && styles.pressed, // Apply pressed effect
        ]}
        android_ripple={{ color: GlobalStyles.colors.primary100 }} // Optional ripple effect for Android
      >
        <View style={styles.innerContainer}>
          <Text style={[styles.buttonText, mode === "flat" && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

export default Button;

const styles = StyleSheet.create({
  outerContainer: {
    borderRadius: 8,
    overflow: "hidden", // ✅ Ensures pressed effect does not overflow
  },
  button: {
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary500,
    borderRadius: 8,
  },
  innerContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  flat: {
    backgroundColor: "transparent",
  },
  flatText: {
    color: GlobalStyles.colors.primary200,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: GlobalStyles.colors.primary100, // Ensure background color is applied only inside the border
  },
});
