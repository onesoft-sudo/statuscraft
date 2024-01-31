import { Incident } from "@/types/Incident";
import { getStatusUIMetaInfo } from "@/utils/status";
import { FC } from "react";
import IncidentBriefEventList from "./IncidentBriefEventList";

interface IncidentBriefInfoProps {
    incident: Incident;
}

const IncidentBriefInfo: FC<IncidentBriefInfoProps> = ({ incident }) => {
    const info = getStatusUIMetaInfo(
        incident.highestServiceStatus ?? "operational"
    );

    return (
        <div>
            <h3
                className={`text-lg md:text-xl lg:text-2xl ${
                    incident.highestServiceStatus &&
                    incident.highestServiceStatus !== "operational"
                        ? info.text
                        : ""
                } mb-3`}
            >
                {incident.title}
            </h3>
            <IncidentBriefEventList events={incident.events} />
        </div>
    );
};

export default IncidentBriefInfo;
