import { MantineProvider } from "@mantine/core";
import AppLayout from "./layout/AppLayout";

export default function App() {
  return (
    <MantineProvider
      defaultColorScheme="dark">
      <AppLayout />
    </MantineProvider>
  )
}