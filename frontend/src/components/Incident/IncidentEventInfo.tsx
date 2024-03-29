import { IncidentEvent, IncidentEventType } from "@/types/Incident";
import { getEventTypeInfo } from "@/utils/incident";
import { FC } from "react";
import ViewDate from "../Utils/ViewDate";

interface IncidentEventInfoProps {
    event: IncidentEvent;
}

const IncidentEventInfo: FC<IncidentEventInfoProps> = ({ event }) => {
    const [name, Icon] = getEventTypeInfo(event.type);
    const createdAt = new Date(event.createdAt);

    return (
        <div className="grid md:grid-cols-[2fr_5fr] gap-3 md:gap-10 max-w-[99svw] lg:max-w-[75svw] xl:max-w-[65svw]">
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
                    <ViewDate date={createdAt} distanceFromNow />,{" "}
                    <ViewDate date={createdAt} />
                </p>
            </div>
        </div>
    );
};

export default IncidentEventInfo;
