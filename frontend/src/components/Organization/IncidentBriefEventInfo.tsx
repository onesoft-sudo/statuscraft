import { IncidentEvent } from "@/types/Incident";
import { getEventTypeInfo } from "@/utils/incident";
import { FC } from "react";
import ViewDate from "../Utils/ViewDate";

interface IncidentBriefEventInfoProps {
    event: IncidentEvent;
}

const IncidentBriefEventInfo: FC<IncidentBriefEventInfoProps> = ({ event }) => {
    const [name] = getEventTypeInfo(event.type);

    return (
        <div>
            <p className="mt-1">
                <strong className="font-bold">{name}</strong> &mdash;{" "}
                {event.description}
            </p>
            <span className="text-gray-600 dark:text-gray-400">
                <ViewDate
                    date={event.createdAt}
                    formatSpecifier="MMM d, H:ii OOOO"
                />
            </span>
        </div>
    );
};

export default IncidentBriefEventInfo;
