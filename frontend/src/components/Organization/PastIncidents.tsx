import { Incident } from "@/types/Incident";
import { format } from "date-fns";
import { groupBy } from "lodash";
import { FC } from "react";
import Divider from "../Utils/Divider";
import IncidentBriefInfo from "./IncidentBriefInfo";

interface PastIncidentsProps {
    incidents: Incident[];
}

const PastIncidents: FC<PastIncidentsProps> = ({ incidents }) => {
    const sortedIncidents = [...incidents].sort(
        (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
    const groupedIncidentsObject = groupBy(sortedIncidents, (incident) =>
        format(incident.createdAt, "MMM d, y")
    );

    if (sortedIncidents.length > 0) {
        for (
            let i = 0;
            i <
            Math.ceil(
                (Date.now() -
                    sortedIncidents[
                        sortedIncidents.length - 1
                    ].createdAt.getTime()) /
                    (1000 * 60 * 60 * 24)
            ) +
                2;
            i++
        ) {
            const formatted = format(
                Date.now() - 1000 * 60 * 60 * 24 * i,
                "MMM d, y"
            );
            groupedIncidentsObject[formatted] ??= [];
        }
    }

    const groupedIncidents = Object.entries(groupedIncidentsObject).sort(
        (a, b) => b[0].localeCompare(a[0])
    );

    return (
        <div>
            <h2 className="md:text-lg lg:text-xl font-semibold mb-3 uppercase">
                Past Incidents
            </h2>
            <br />

            <div className="flex flex-col gap-6">
                {groupedIncidents.map(([date, incidents], index) => (
                    <div key={index}>
                        <h3 className="md:text-lg lg:text-xl font-semibold">
                            {date}
                        </h3>
                        <Divider className="my-3" />
                        <div className="flex flex-col gap-6">
                            {incidents.length ? (
                                incidents.map((incident, index) => (
                                    <IncidentBriefInfo
                                        key={index}
                                        incident={incident}
                                    />
                                ))
                            ) : (
                                <p className="text-gray-500 dark:text-gray-300">
                                    No incidents reported.
                                </p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PastIncidents;
