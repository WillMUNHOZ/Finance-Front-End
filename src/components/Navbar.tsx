import { Button, Card, Flex, Group, Space, Text } from "@mantine/core";
import { FileText, House, LayoutDashboard, Plus, User } from "lucide-react";

export default function Navbar() {
    return (
        <Card id="Navbar" pt={20} radius={"xl"}>
            <Group justify="space-around">
                <Flex direction={"column"} align={"center"}>
                    <House />
                    <Text size="sm">
                        Home
                    </Text>
                </Flex>
                <Flex direction={"column"} align={"center"}>
                    <FileText />
                    <Text size="sm">
                        Resumo
                    </Text>
                </Flex>
                <Space w={60}></Space>
                <Button id="addBtn" radius={100} p={1} w={70} h={70}>
                    <Plus size={35} />
                </Button>
                <Flex direction={"column"} align={"center"}>
                    <LayoutDashboard />
                    <Text size="sm">
                        Categorias
                    </Text>
                </Flex>
                <Flex direction={"column"} align={"center"}>
                    <User />
                    <Text size="sm">
                        Perfil
                    </Text>
                </Flex>
            </Group >
        </Card >
    )
}