import { Button, Card, Flex, Group, Space, Text, UnstyledButton } from "@mantine/core";
import { FileText, House, LayoutDashboard, Plus, User } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <Card id="Navbar" pt={20} radius={"xl"}>
            <Group justify="space-around" px={20} pb={10}>
                <NavLink
                    to="/"
                    style={({ isActive }) => ({
                        textDecoration: 'none',
                        color: isActive ? '#12b886' : 'inherit',
                    })}
                >
                    <Flex direction={"column"} align={"center"}>
                        <House />
                        <Text size="sm">
                            Home
                        </Text>
                    </Flex>
                </NavLink>

                <NavLink
                    to={"/summary"}
                    style={({ isActive }) => ({
                        textDecoration: 'none',
                        color: isActive ? '#12b886' : 'inherit',
                    })}
                >
                    <Flex direction={"column"} align={"center"}>
                        <FileText />
                        <Text size="sm">
                            Resumo
                        </Text>
                    </Flex>
                </NavLink>
                <Space w={60}></Space>
                <NavLink
                    id="addBtn"
                    to="addexpense"
                >
                    <Button radius={100} p={1} w={70} h={70}>
                        <Plus size={35} />
                    </Button>
                </NavLink>
                <NavLink
                    to={"/categories"}
                    style={({ isActive }) => ({
                        textDecoration: 'none',
                        color: isActive ? '#12b886' : 'inherit',
                    })}
                >
                    <Flex direction={"column"} align={"center"}>
                        <LayoutDashboard />
                        <Text size="sm">
                            Categorias
                        </Text>
                    </Flex>
                </NavLink>
                <NavLink
                    to={"profile"}
                    style={({ isActive }) => ({
                        textDecoration: 'none',
                        color: isActive ? '#12b886' : 'inherit',
                    })}
                >
                    <Flex direction={"column"} align={"center"}>
                        <User />
                        <Text size="sm">
                            Perfil
                        </Text>
                    </Flex>
                </NavLink>
            </Group >
        </Card >
    )
}