import Footer from "@/components/Layout/Footer";
import Brand from "@/components/Organization/Brand";
import PastIncidents from "@/components/Organization/PastIncidents";
import Status from "@/components/Organization/Status";
import UptimeList from "@/components/Organization/UptimeList";
import logo from "@/images/logo.png";
import { Incident, IncidentEventType } from "@/types/Incident";
import { ServerSidePageProps } from "@/types/ServerSidePageProps";
import { Container } from "@mui/material";
import { Metadata } from "next";

const data = {
    name: "OSN, Inc",
    status: "operational" as const,
    services: [
        {
            name: "SudoBot",
            uptime: [100, 100, 99, 100, 99, 99, 98.3, 99, 100, 100],
            status: "operational" as const,
        },
        {
            name: "MailBot",
            uptime: [100, 100, 100, 100, 99, 99, 99.8, 99, 100, 100],
            status: "operational" as const,
        },
        {
            name: "ABC Bot",
            uptime: [0, 0, 0, 100, 99, 99, 66.1, 75, 100, 100],
            status: "degraded" as const,
        },
    ],
    incidents: [
        {
            title: "Unexpected API server crashes",
            resolved: true,
            highestServiceStatus: "major_outage",
            events: [
                {
                    type: IncidentEventType.Investigating,
                    description: "We're investigating this issue right now.",
                    createdAt: new Date("2024-01-26T01:34:00+06:00"),
                },
                {
                    type: IncidentEventType.Identified,
                    description: "The cache system seems to be malfunctioning.",
                    createdAt: new Date("2024-01-26T01:45:00+06:00"),
                },
                {
                    type: IncidentEventType.DeployingFix,
                    description:
                        "We've implemented a new cache system from scratch.",
                    createdAt: new Date("2024-01-26T01:59:00+06:00"),
                },
                {
                    type: IncidentEventType.Resolved,
                    description: "This incident has been resolved.",
                    createdAt: new Date("2024-01-26T02:12:00+06:00"),
                },
            ],
            createdAt: new Date("2024-01-26T01:34:00+06:00"),
        },
        {
            title: "HTTPS breakdown",
            resolved: true,
            highestServiceStatus: "degraded",
            events: [
                {
                    type: IncidentEventType.Investigating,
                    description: "We're investigating this issue right now.",
                    createdAt: new Date("2024-01-26T01:34:00+06:00"),
                },
                {
                    type: IncidentEventType.Identified,
                    description: "The 443 port does not seem to be reserved.",
                    createdAt: new Date("2024-01-26T01:45:00+06:00"),
                },
                {
                    type: IncidentEventType.DeployingFix,
                    description: "We've implemented a fix.",
                    createdAt: new Date("2024-01-26T01:59:00+06:00"),
                },
                {
                    type: IncidentEventType.Resolved,
                    description: "This incident has been resolved.",
                    createdAt: new Date("2024-01-26T02:12:00+06:00"),
                },
            ],
            createdAt: new Date("2024-01-26T01:34:00+06:00"),
        },

        {
            title: "HTTPS breakdown [TLS]",
            resolved: true,
            highestServiceStatus: "degraded",
            events: [
                {
                    type: IncidentEventType.Investigating,
                    description: "We're investigating this issue right now.",
                    createdAt: new Date("2024-01-27T01:34:00+06:00"),
                },
                {
                    type: IncidentEventType.Resolved,
                    description: "This incident has been resolved.",
                    createdAt: new Date("2024-01-26T02:12:00+06:00"),
                },
            ],
            createdAt: new Date("2024-01-27T01:34:00+06:00"),
        },
        {
            title: "HTTPS breakdown 2",
            resolved: true,
            highestServiceStatus: "degraded",
            events: [
                {
                    type: IncidentEventType.Investigating,
                    description: "We're investigating this issue right now.",
                    createdAt: new Date("2024-01-28T01:34:00+06:00"),
                },
                {
                    type: IncidentEventType.Resolved,
                    description: "This incident has been resolved.",
                    createdAt: new Date("2024-01-28T02:12:00+06:00"),
                },
            ],
            createdAt: new Date("2024-01-28T01:34:00+06:00"),
        },
    ] satisfies Incident[],
};

export const generateMetadata = ({ params }: ServerSidePageProps): Metadata => {
    return {
        title: `${data.name} Service Status - StatusCraft`,
    };
};

const OrganizationPage = ({ params }: ServerSidePageProps) => {
    return (
        <main>
            <Brand name={data.name} iconURL={logo.src} />

            <br />

            <Container maxWidth="md">
                <Status status={data.status} />
                <br />
                <br />
                <UptimeList
                    data={data.services.map((service) => ({
                        data: service.uptime,
                        serviceName: service.name,
                        status: service.status,
                    }))}
                />
                <br />
                <br />
                <br />
                <PastIncidents incidents={data.incidents} />
            </Container>

            <br />
            <br />

            <Footer />
        </main>
    );
};

export default OrganizationPage;
