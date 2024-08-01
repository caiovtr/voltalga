import { StatusBar } from "expo-status-bar";
import { Navigation } from "./src/navigation";
import { Menu } from "./src/navigation/MenuTab/index"

export default function App() {
  return (
    <>
      <Navigation />
      <StatusBar style="auto" />
    </>
  )
}