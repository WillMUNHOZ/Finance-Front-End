import { MantineProvider } from "@mantine/core";
import { RouterProvider } from "react-router-dom";
import { router } from "./routers/Router";

export default function App() {
  return (
    <MantineProvider
      defaultColorScheme="dark">
      <RouterProvider router={router} />
    </MantineProvider>
  )
}