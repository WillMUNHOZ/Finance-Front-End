import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import AddExpense from "../pages/AddExpense";
import Dashboard from "../pages/Dashboard";

export default function AppLayout() {
    return (
        <>
            <Outlet />
            <Navbar />
        </>
    )
}