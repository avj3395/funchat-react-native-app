import * as Font from "expo-font";

export default getFonts = async () => {
  console.log("font calling");
  return await Font.loadAsync({
    "lusitana-regular": require("../assets/fonts/Lusitana-Regular.ttf"),
    "lusitana-bold": require("../assets/fonts/Lusitana-Bold.ttf"),
  });
};
