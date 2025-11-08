declare module "mikronode-ng" {
    class MikroNodeConnection {
        connect(): Promise<[any]>;
        close(): void;
    }

    interface MikroNodeStatic {
        getConnection(host: string, user: string, password: string): MikroNodeConnection;
    }

    const MikroNode: MikroNodeStatic;
    export default MikroNode;
}
