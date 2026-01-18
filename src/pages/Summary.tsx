import { Flex, UnstyledButton } from "@mantine/core";
import { CircleX } from "lucide-react";
import { Link } from "react-router-dom";

export default function Summary() {
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



        </Flex>
    )
}