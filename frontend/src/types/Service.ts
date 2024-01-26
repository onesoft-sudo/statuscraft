export type Service = {
    id: number;
    name: string;
    description?: string;
    status: ServiceStatus;
};

export type ServiceStatus =
    | "degraded"
    | "operational"
    | "outage"
    | "major_outage"
    | "maintenance";
