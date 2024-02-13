import { ServiceStatus } from "./Service";

export const IncidentEventType = {
    Investigating: "investigating",
    Identified: "identified",
    Resolved: "resolved",
    Verifying: "verifying",
    DeployingFix: "deploying_fix",
} as const;

export type IncidentEventType =
    (typeof IncidentEventType)[keyof typeof IncidentEventType];

export type IncidentEvent = {
    type: IncidentEventType;
    description: string;
    createdAt: string;
};

export type Incident = {
    title: string;
    resolved: boolean;
    events: IncidentEvent[];
    createdAt: Date;
    highestServiceStatus?: ServiceStatus;
};
