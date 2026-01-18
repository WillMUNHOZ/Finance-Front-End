import { Button, Card, Flex, NumberInput, SegmentedControl, Select, Text, Textarea, UnstyledButton } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import dayjs from "dayjs";
import { Calendar, CircleX } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const controlData = ["Receita", "Despesa"];

const selectData = ["Supermercado", "Lazer", "Combustivél", "Farmacia"];

const today = dayjs().format("YYYY/MM/DD")

console.log(today)


export default function AddExpense() {
    const [value, setValue] = useState("Receita");
    const [date, setDate] = useState<string | null>(today);
    const [repeat, setRepeat] = useState("Não repetir");

    return (
        <Flex id="addexpense" direction={"column"} gap={"lg"} p={"20"}>
            <Flex justify={"space-between"} align={"center"}>
                <h2>Adicionar</h2>
                <UnstyledButton component={Link} to={"/"}>
                    <Flex justify={"space-between"} align={"center"}>
                        <CircleX />
                    </Flex>
                </UnstyledButton>
            </Flex>
            <SegmentedControl
                mt={"sm"}
                size="md"
                radius={"md"}
                value={value}
                onChange={setValue}
                color={value === "Receita" ? "green" : "red"}
                data={controlData}
            />
            <Card radius={"lg"} p={10} pl={20}>
                <Flex direction={"column"} gap={"5"}>
                    <Text size="sm">
                        Categoria
                    </Text>
                    <Select
                        size="md"
                        fw={700}
                        variant="unstyled"
                        placeholder="Categoria"
                        data={selectData}
                    />
                </Flex>
            </Card>
            <Card radius={"lg"} p={10} pl={20}>
                <Flex direction={"column"} gap={"5"}>
                    <Text size="sm">
                        Valor
                    </Text>
                    <NumberInput
                        size="md"
                        fw={700}
                        variant="unstyled"
                        prefix="R$ "
                        placeholder={"R$ 0,00"}
                        // defaultValue={0.00}
                        decimalSeparator=","
                        decimalScale={2}
                        fixedDecimalScale
                        hideControls
                    />
                </Flex>
            </Card>
            <Card radius={"lg"} p={10} pl={20}>
                <Flex direction={"column"} gap={"5"}>
                    <Text size="sm">
                        Data
                    </Text>
                    <DateInput
                        placeholder="Date input"
                        variant="unstyled"
                        size="md"
                        value={date}
                        onChange={setDate}
                        valueFormat="DD/MM/YY"
                        rightSection={<Calendar />}
                        rightSectionProps={{ style: { pointerEvents: 'none' } }}
                        fw={700}
                        inputMode="none"
                    />
                </Flex>
            </Card>
            <Card radius={"lg"} p={10} pl={20}>
                <Flex direction={"column"} gap={"5"}>
                    <Text size="sm">
                        Repetir
                    </Text>
                    <NumberInput
                        size="md"
                        fw={700}
                        variant="unstyled"
                        prefix="X "
                        value={repeat}
                        hideControls
                        placeholder="Não repetir"
                    />
                </Flex>
            </Card>
            <Card radius={"lg"} h={120} p={10} pl={20}>
                <Flex direction={"column"} gap={"5"}>
                    <Text size="sm">
                        Observação
                    </Text>
                    <Textarea
                        placeholder="Adicione uma nota (Opicional)"
                        variant="unstyled"
                        size="md"
                        fw={700}
                    />
                </Flex>
            </Card>
            <Button radius={"xl"} size="md" mt={"sm"}>Adicionar</Button>
        </Flex>
    )
}