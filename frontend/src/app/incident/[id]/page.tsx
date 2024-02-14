import AffectedServices from "@/components/Incident/AffectedServices";
import IncidentEventList from "@/components/Incident/IncidentEventList";
import OrganizationInfo from "@/components/Incident/OrganizationInfo";
import Divider from "@/components/Utils/Divider";
import ViewDate from "@/components/Utils/ViewDate";
import { IncidentEventType } from "@/types/Incident";
import { ServerSidePageProps } from "@/types/ServerSidePageProps";
import { endpoint } from "@/utils/api";
import { pick } from "lodash";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FC } from "react";
import { MdArrowBackIos } from "react-icons/md";

async function getIncident(id: number | string) {
    const response = await fetch(
        endpoint(`/incidents/${encodeURI(id.toString())}`),
        {
            next: {
                revalidate: 60,
            },
        }
    );

    if (!response.ok) {
        return null;
    }

    const data = await response.json();
    return pick(data.incident, [
        "title",
        "createdAt",
        "services",
        "events",
        "serviceStatuses",
    ]);
}

export const generateMetadata = async ({
    params,
}: ServerSidePageProps): Promise<Metadata> => {
    const { id } = params;
    const data = await getIncident(id);

    if (!data) {
        return {};
    }

    return {
        title: `${data.title} - Viewing Incident at StatusCraft`,
    };
};

const IncidentPage: FC<ServerSidePageProps> = async ({ params }) => {
    const { id } = params;
    const data = await getIncident(id);

    if (!data) {
        notFound();
    }

    const organization = data.services[0].organization;

    return (
        <main className="px-3 md:px-0 pt-7 lg:pt-10 flex justify-center flex-col items-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl text-center">
                {data.title}
            </h1>
            <h6 className="text-sm text-gray-500 dark:text-gray-400 text-center mt-2 pb-2">
                Reported{" "}
                <ViewDate date={new Date(data.createdAt)} distanceFromNow />,{" "}
                <ViewDate date={new Date(data.createdAt)} />
            </h6>

            <OrganizationInfo organization={organization} />

            <div className="pb-3 pt-2"></div>

            <AffectedServices
                services={data.services}
                statuses={data.serviceStatuses}
            />

            <div className="pt-8 pb-4">
                <IncidentEventList events={data.events} />
                <div className=" px-2 md:px-0">
                    <Divider className="mt-6 mb-3" />
                    <div className="flex justify-between items-center mt-auto">
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
            </div>
        </main>
    );
};

export default IncidentPage;
