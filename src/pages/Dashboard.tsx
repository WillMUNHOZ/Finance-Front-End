import { DonutChart } from "@mantine/charts";
import { Card, Center, Flex, Grid, Text } from "@mantine/core";
import dayjs from "dayjs";

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

const today = dayjs().format("DD/MM/YY");

export default function Dashboard() {
    return (
        <Flex direction={"column"} gap={"md"} p={"20"}>
            <h2>ByFinance</h2>
            <Card radius={"lg"} p={"xl"} mt={"sm"}>
                <Flex direction={"column"} gap={"5"}>
                    <Text size="sm">
                        Saldo
                    </Text>
                    <Text size="35px" fw={800} color="white">
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
                            <Text size="20px" ta={"center"} fw={700} color="white">
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
                            <Text size="20px" fw={700} color="white">
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
                            <Text size="20px" fw={700} color="white">
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
                            <Text size="20px" fw={700} color="white">
                                {today}
                            </Text>
                        </Flex>
                    </Card >
                </Grid.Col>
            </Grid>
            <Flex direction={"column"} gap={30} mt={20}>
                <h3>Despesas por categoria teste</h3>
                <Center>
                    <DonutChart data={data} thickness={25} />
                </Center>
            </Flex>
        </Flex >
    )
}