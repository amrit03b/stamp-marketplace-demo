import { formatNumber } from "@/utils/number";
import { Flex, Text, Box } from "@chakra-ui/react";
import { Coin } from "@cosmjs/proto-signing";
import React, { FC } from "react";

interface ExchangeCardSummaryProps {
    estimatedCost: number;
    rate: number;
    balance: Coin;
    targetSymbol: string;
    cw20_balance: number;
    cw20_decimals: number;
}

const ExchangeCardSummary: FC<ExchangeCardSummaryProps> = (props) => {
    const { estimatedCost, rate, balance, targetSymbol, cw20_balance, cw20_decimals } = props;
    return (
        <Box bg="background.700" borderColor="gray.700" p={4} borderWidth={"1px"} mt={6} data-testid="exchange-card-summary">
            <Flex justify={"space-between"} data-testid="estimated-cost">
                <Text color={"gray.300"}>Estimated cost</Text>
                <Text color={"gray.100"} fontWeight={"bold"}>{formatNumber(estimatedCost)} {balance.denom}</Text>
            </Flex>
            <Flex justify={"space-between"} data-testid="exchange-rate">
                <Text color={"gray.300"}>Exchange Rate</Text>
                <Text color={"gray.100"}>1 {targetSymbol} = {rate.toLocaleString('en', { useGrouping: true })} {balance.denom}</Text>
            </Flex>
            <Flex justify={"space-between"} data-testid="asset-balance">
                <Text color={"gray.300"}>Your Asset Balance</Text>
                <Text color={"gray.100"}>
                    {cw20_balance} {targetSymbol}
                </Text>
            </Flex>
        </Box>
    );
}

export default ExchangeCardSummary;
