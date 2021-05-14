import * as Font from "expo-font";

export default getFonts = async () => {
  console.log("font calling");
  return await Font.loadAsync({
    "dancing-regular": require("../assets/fonts/DancingScript-Regular.ttf"),
  });
};
