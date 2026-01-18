import { Button, Card, Flex, NumberInput, SegmentedControl, Select, Text, Textarea } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { Calendar } from "lucide-react";
import { useState } from "react";

const controlData = ["Receita", "Despesa"];

const selectData = ["Supermercado", "Lazer", "Combustivél", "Farmacia"];


export default function AddExpense() {
    const [value, setValue] = useState("Receita");
    const [date, setDate] = useState(new Date());
    return (
        <Flex direction={"column"} gap={"lg"} p={"20"}>
            <h2>Adicionar</h2>
            <SegmentedControl mt={"sm"} size="md" radius={"md"} value={value} onChange={setValue} color={value === "Receita" ? "green" : "red"} data={controlData} />
            <Card radius={"lg"}>
                <Flex direction={"column"} gap={"5"}>
                    <Text size="sm">
                        Categoria
                    </Text>
                    <Select size="lg" fw={700} variant="unstyled" placeholder="Categoria" data={selectData} />
                </Flex>
            </Card>
            <Card radius={"lg"}>
                <Flex direction={"column"} gap={"5"}>
                    <Text size="sm">
                        Valor
                    </Text>
                    <NumberInput size="lg" fw={700} variant="unstyled" prefix="R$ " value={"0,00"} decimalSeparator=",">
                    </NumberInput>
                </Flex>
            </Card>
            <Card radius={"lg"}>
                <Flex direction={"column"} gap={"5"}>
                    <Text size="sm">
                        Data
                    </Text>
                    <DateInput
                        placeholder="Date input"
                        variant="unstyled"
                        size="md"
                        value={date}
                        valueFormat="DD/MM/YY"
                        rightSection={<Calendar />}
                        rightSectionProps={{ style: { pointerEvents: 'none' } }}
                        fw={700}
                    />
                </Flex>
            </Card>
            <Card radius={"lg"}>
                <Flex direction={"column"} gap={"5"}>
                    <Text size="sm">
                        Observação
                    </Text>
                    <Textarea
                        placeholder="Adicione uma nota (Opicional)"
                        variant="unstyled"
                        size="lg"
                        fw={700}
                    />
                </Flex>
            </Card>
            <Button radius={"xl"} size="lg">Adicionsar</Button>
        </Flex>
    )
}