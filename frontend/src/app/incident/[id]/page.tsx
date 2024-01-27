import AffectedServices from "@/components/Incident/AffectedServices";
import IncidentEventList from "@/components/Incident/IncidentEventList";
import Divider from "@/components/Utils/Divider";
import ViewDate from "@/components/Utils/ViewDate";
import { IncidentEventType } from "@/types/Incident";
import { ServerSidePageProps } from "@/types/ServerSidePageProps";
import { Metadata } from "next";
import Link from "next/link";
import { FC } from "react";
import { MdArrowBackIos } from "react-icons/md";

const data = {
    title: "Unexpected API server crashes",
    createdAt: new Date("2024-01-26T01:30:00+06:00"),
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
            description: "We've implemented a new cache system from scratch.",
            createdAt: new Date("2024-01-26T01:59:00+06:00"),
        },
        {
            type: IncidentEventType.Resolved,
            description: "This incident has been resolved.",
            createdAt: new Date("2024-01-26T02:12:00+06:00"),
        },
    ],
    services: [
        {
            id: 1,
            name: "SudoBot",
            description: "The ultimate Discord moderation bot",
            status: "operational" as const,
        },
        {
            id: 2,
            name: "MailBot",
            description: "Server mailing handler",
            status: "degraded" as const,
        },
    ],
};

export const generateMetadata = ({ params }: ServerSidePageProps): Metadata => {
    return {
        title: `${data.title} - Viewing Incident at StatusCraft`,
    };
};

const IncidentPage: FC<ServerSidePageProps> = ({ params }) => {
    const { id } = params;

    return (
        <main className="pt-4 lg:pt-10 flex justify-center flex-col items-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl text-center">
                {data.title}
            </h1>
            <h6 className="text-sm text-gray-500 dark:text-gray-400 text-center mt-2">
                Reported <ViewDate date={data.createdAt} distanceFromNow />
                , <ViewDate date={data.createdAt} />
            </h6>

            <br />
            <br />

            <AffectedServices services={data.services} />

            <br />
            <br />

            <div>
                <IncidentEventList events={data.events} />
                <Divider className="mt-6 mb-3" />
                <div className="flex justify-between items-center">
                    <Link
                        href="/"
                        className="text-blue-500 hover:text-blue-600 flex gap-1 items-center"
                    >
                        <MdArrowBackIos />
                        <span>Go back</span>
                    </Link>
                    <p className="text-gray-500 dark:text-gray-400">
                        Powered by StatusCraft
                    </p>
                </div>
            </div>
        </main>
    );
};

export default IncidentPage;
