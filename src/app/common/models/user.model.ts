export interface User {
    id: number;
    email: string;
    enterpriseInfo?: EnterpriseInfo;
}

export interface EnterpriseInfo {
    ein: number;
    ownTransport: boolean;
}
