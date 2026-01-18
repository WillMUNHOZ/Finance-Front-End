import { createBrowserRouter } from "react-router-dom"
import AppLayout from "../layout/AppLayout"
import Dashboard from "../pages/Dashboard"
import AddExpense from "../pages/AddExpense"
import Categories from "../pages/Categories"
import Summary from "../pages/Summary"
import Profile from "../pages/Profile"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                index: true,
                element: <Dashboard />
            },
            {
                path: "summary",
                element: <Summary />
            },
            {
                path: "categories",
                element: <Categories />
            },
            {
                path: "profile",
                element: <Profile />
            },

        ]
    },
    {
        path: "addexpense",
        element: <AddExpense />
    },
])