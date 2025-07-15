"use client"
import { KEPLR_AUTOCONNECT_KEY, connectAndromedaClient, initiateKeplr, useAndromedaStore } from "@/zustand/andromeda";
import React, { FC, ReactNode, useEffect, useLayoutEffect, useState } from "react"

interface Props {
    children?: ReactNode;
    chainId: string;
}

const Providers: FC<Props> = (props) => {
    const { children, chainId } = props;
    const isConnected = useAndromedaStore(state => state.isConnected)
    const isLoading = useAndromedaStore(state => state.isLoading)
    const keplr = useAndromedaStore(state => state.keplr)
    const connectedChainId = useAndromedaStore(state => state.chainId)
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useLayoutEffect(() => {
        if (!mounted) return;
        initiateKeplr();
    }, [mounted]);

    useLayoutEffect(() => {
        if (!mounted) return;
        const autoconnect = typeof window !== 'undefined' ? localStorage.getItem(KEPLR_AUTOCONNECT_KEY) : null;
        if (!isLoading && typeof keplr !== "undefined" && autoconnect === keplr?.mode) {
            if (!isConnected || (isConnected && connectedChainId !== chainId)) {
                connectAndromedaClient(chainId);
            }
        }
    }, [keplr, isConnected, isLoading, chainId, connectedChainId, mounted]);

    if (!mounted) return null;

    return (
        <>
            {children}
        </>
    )
}

export default Providers