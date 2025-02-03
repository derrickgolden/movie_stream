export interface MikrotikDHCPClient {
    id: string;
    address: string;
    macAddress: string;
    clientId: string;
    addressLists: string;
    server: string;
    dhcpOption: string;
    status: string;
    expiresAfter: string;
    lastSeen: string;
    activeAddress: string;
    activeMacAddress: string;
    activeClientId: string;
    activeServer: string;
    hostName: string;
    radius: boolean;
    dynamic: boolean;
    blocked: boolean;
    disabled: boolean;
}

export interface ActivePPPoEClient {
    id: string;
    name: string;
    service: string;
    callerId: string;
    address: string;
    uptime: string;
    encoding?: string;
    sessionId: string;
    limitBytesIn: number;
    limitBytesOut: number;
    radius: boolean;
}


