import { IncidentEvent } from "@/types/Incident";
import { FC } from "react";
import IncidentEventInfo from "./IncidentEventInfo";

interface IncidentEventListProps {
    events: IncidentEvent[];
}

const IncidentEventList: FC<IncidentEventListProps> = ({ events }) => {
    return (
        <div className="flex flex-col gap-5 mx-3">
            {events.map((event) => (
                <IncidentEventInfo key={event.type} event={event} />
            ))}
        </div>
    );
};

export default IncidentEventList;
