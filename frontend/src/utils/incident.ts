import { IncidentEventType } from "@/types/Incident";
import { IconType } from "react-icons";
import {
    MdBuild,
    MdCheck,
    MdLightbulb,
    MdSearch,
    MdShield,
} from "react-icons/md";

const eventTypes: Record<IncidentEventType, [string, IconType]> = {
    deploying_fix: ["Deploying Fix", MdBuild],
    identified: ["Identified", MdLightbulb],
    investigating: ["Investigating", MdSearch],
    resolved: ["Resolved", MdCheck],
    verifying: ["Verifying", MdShield],
};

export function getEventTypeInfo(type: IncidentEventType) {
    return eventTypes[type];
}
