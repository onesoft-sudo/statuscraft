import { IncidentEvent, IncidentEventType } from "@/types/Incident";
import { format, formatDistanceToNowStrict } from "date-fns";
import { FC } from "react";

interface IncidentEventInfoProps {
    event: IncidentEvent;
}

const types: Record<IncidentEventType, string> = {
    deploying_fix: "Deploying Fix",
    identified: "Identified",
    investigating: "Investigating",
    resolved: "Resolved",
    verifying: "Verifying",
};

const IncidentEventInfo: FC<IncidentEventInfoProps> = ({ event }) => {
    return (
        <div className="grid grid-cols-[2fr_5fr] gap-10 max-w-[99svw] lg:max-w-[75svw] xl:max-w-[65svw]">
            <div>
                <h2 className="text-xl lg:text-2xl">{types[event.type]}</h2>
            </div>

            <div>
                <p>{event.description}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    {formatDistanceToNowStrict(event.createdAt, {
                        addSuffix: true,
                    })}
                    , {format(event.createdAt, "MMM d, y H:ii OOOO")}
                </p>
            </div>
        </div>
    );
};

export default IncidentEventInfo;
