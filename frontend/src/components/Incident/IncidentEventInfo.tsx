import { IncidentEvent, IncidentEventType } from "@/types/Incident";
import { FC } from "react";
import { IconType } from "react-icons";
import {
    MdBuild,
    MdCheck,
    MdLightbulb,
    MdSearch,
    MdShield,
} from "react-icons/md";
import ViewDate from "../Utils/ViewDate";

interface IncidentEventInfoProps {
    event: IncidentEvent;
}

const types: Record<IncidentEventType, [string, IconType]> = {
    deploying_fix: ["Deploying Fix", MdBuild],
    identified: ["Identified", MdLightbulb],
    investigating: ["Investigating", MdSearch],
    resolved: ["Resolved", MdCheck],
    verifying: ["Verifying", MdShield],
};

const IncidentEventInfo: FC<IncidentEventInfoProps> = ({ event }) => {
    const [name, Icon] = types[event.type];

    return (
        <div className="grid grid-cols-[2fr_5fr] gap-10 max-w-[99svw] lg:max-w-[75svw] xl:max-w-[65svw]">
            <div>
                <h2
                    className={`text-xl lg:text-2xl flex gap-2 items-center ${
                        event.type === IncidentEventType.Resolved
                            ? "text-green-500 rounded border py-1 px-2 border-green-500"
                            : ""
                    }`}
                >
                    <Icon />
                    <span>{name}</span>
                </h2>
            </div>

            <div>
                <p>{event.description}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    <ViewDate date={event.createdAt} distanceFromNow />
                    , <ViewDate date={event.createdAt} />
                </p>
            </div>
        </div>
    );
};

export default IncidentEventInfo;
