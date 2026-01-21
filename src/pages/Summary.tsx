import { Flex, Table, Text, UnstyledButton } from "@mantine/core";
import { CircleX } from "lucide-react";
import { Link } from "react-router-dom";
import { formatDate } from "../utils";
import { formatCurrency } from "../utils/formatCurrency";

const transactions = [
    {
        id: 1,
        type: "receita",
        category: "Salário",
        amount: 3500.00,
        date: "2026-01-05",
        repeat: "mensal",
        note: "Salário da empresa XPTO"
    },
    {
        id: 2,
        type: "despesa",
        category: "Alimentação",
        amount: 120.75,
        date: "2026-01-10",
        repeat: "não repetir",
        note: "Compras do mercado"
    },
    {
        id: 3,
        type: "despesa",
        category: "Transporte",
        amount: 45.00,
        date: "2026-01-12",
        repeat: "semanal",
        note: ""
    },
    {
        id: 4,
        type: "receita",
        category: "Freelance",
        amount: 800.00,
        date: "2026-01-15",
        repeat: "não repetir",
        note: "Projeto de landing page"
    },
    {
        id: 5,
        type: "despesa",
        category: "Lazer",
        amount: 60.00,
        date: "2026-01-18",
        repeat: "não repetir",
        note: "Cinema"
    }
];


export default function Summary() {

    const rows = transactions.map((transaction) => (
        <Table.Tr key={transaction.id}>
            <Table.Td>{formatDate(transaction.date)}</Table.Td>
            <Table.Td>
                {transaction.note}
                <br />
                <Text size="sm" opacity={0.5}>
                    {transaction.category}
                </Text>
            </Table.Td>
            <Table.Td>{formatCurrency(transaction.amount)}</Table.Td>
        </Table.Tr>
    ));

    return (
        <Flex id="addexpense" direction={"column"} gap={"lg"} p={"20"}>
            <Flex justify={"space-between"} align={"center"}>
                <h2>Resumo</h2>
                <UnstyledButton component={Link} to={"/"}>
                    <Flex justify={"space-between"} align={"center"}>
                        <CircleX />
                    </Flex>
                </UnstyledButton>
            </Flex>

            <Table>
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th>Data</Table.Th>
                        <Table.Th>Descrição</Table.Th>
                        <Table.Th>Valor</Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>{rows}</Table.Tbody>
            </Table>

        </Flex>
    )
}