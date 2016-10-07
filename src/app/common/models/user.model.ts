export interface User {
    id: number;
    email: string;
    enterpriseInfo?: EnterpriseInfo;
    fingerPrint?: string;
}

export interface EnterpriseInfo {
    ein: number;
    ownTransport: boolean;
}
