import Brand from "@/components/Organization/Brand";
import Status from "@/components/Organization/Status";
import UptimeList from "@/components/Organization/UptimeList";
import logo from "@/images/logo.png";
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
            status: "operational" as const,
        },
    ],
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
                <UptimeList
                    data={data.services.map((service) => ({
                        data: service.uptime,
                        serviceName: service.name,
                        status: service.status,
                    }))}
                />
            </Container>
        </main>
    );
};

export default OrganizationPage;
