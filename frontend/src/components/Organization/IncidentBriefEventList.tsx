import { IncidentEvent } from "@/types/Incident";
import { FC } from "react";
import IncidentBriefEventInfo from "./IncidentBriefEventInfo";

interface IncidentBriefEventListProps {
    events: IncidentEvent[];
}

const IncidentBriefEventList: FC<IncidentBriefEventListProps> = ({
    events,
}) => {
    return (
        <div className="flex flex-col gap-3">
            {events.map((event, index) => (
                <IncidentBriefEventInfo key={index} event={event} />
            ))}
        </div>
    );
};

export default IncidentBriefEventList;
