import { DonutChart } from "@mantine/charts";
import { Button, Card, Center, Flex, Grid, Input, Text } from "@mantine/core";

export interface FinanceChartData {
    name: string;
    value: number;
    color: string;
}
const data: FinanceChartData[] = [
    { name: 'Lazer', value: 450, color: 'violet' },
    { name: 'Combustível', value: 320, color: 'blue' },
    { name: 'Despesas Fixas', value: 1200, color: 'red' },
    { name: 'Alimentação', value: 600, color: 'green' },
];

export default function Dashboard() {
    return (
        <Flex direction={"column"} gap={"md"} p={"sm"}>
            <h2>ByFinance</h2>
            <Card radius={"lg"} p={"lg"} mt={"sm"}>
                <Flex direction={"column"} gap={"5"}>
                    <Text size="sm">
                        Saldo
                    </Text>
                    <Text size="35px" fw={800}>
                        R$ 4650,00
                    </Text>
                </Flex>
            </Card >
            <Grid justify="center" p={"0"} m={"0"} w={"100%"}>
                <Grid.Col span={6}>
                    <Card radius={"lg"} p={"sm"} >
                        <Flex direction={"column"} gap={"5"} align={"start"}>
                            <Text size="sm">
                                Receitas do mês
                            </Text>
                            <Text size="20px" ta={"center"} fw={700}>
                                R$ 4650,00
                            </Text>
                        </Flex>
                    </Card >
                </Grid.Col>
                < Grid.Col span={6}>
                    <Card radius={"lg"} p={"sm"} >
                        <Flex direction={"column"} gap={"5"} align={"start"}>
                            <Text size="sm">
                                Despesas do mês
                            </Text>
                            <Text size="20px" fw={700}>
                                R$ 4650,00
                            </Text>
                        </Flex>
                    </Card >
                </Grid.Col >
                <Grid.Col span={6}>
                    <Card radius={"lg"} p={"sm"} >
                        <Flex direction={"column"} gap={"5"} align={"start"}>
                            <Text size="sm">
                                Ainda posso gastar
                            </Text>
                            <Text size="20px" fw={700}>
                                R$ 4650,00
                            </Text>
                        </Flex>
                    </Card >
                </Grid.Col>
                <Grid.Col span={6}>
                    <Card radius={"lg"} p={"sm"} >
                        <Flex direction={"column"} gap={"5"} align={"start"}>
                            <Text size="sm">
                                Data
                            </Text>
                            <Text size="20px" fw={700}>
                                16/01/26
                            </Text>
                        </Flex>
                    </Card >
                </Grid.Col>
            </Grid>
            <h3>Despesas por categoria</h3>
            <Center>
                <DonutChart data={data} thickness={25} />
            </Center>
        </Flex >
    )
}