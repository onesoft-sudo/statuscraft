import { ServiceStatus } from "@/types/Service";
import { IconType } from "react-icons";
import { FaExclamationTriangle } from "react-icons/fa";
import { HiBan } from "react-icons/hi";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { MdCircle, MdError } from "react-icons/md";

type IconInfo = {
    icon: IconType;
    description: string;
    text: string;
    background: string;
    backgroundText: string;
};

const icons: Record<ServiceStatus, IconInfo> = {
    degraded: {
        icon: FaExclamationTriangle,
        description: "Degraded Performance",
        text: "text-yellow-400",
        background: "bg-yellow-600",
        backgroundText: "text-white",
    },
    operational: {
        icon: MdCircle,
        description: "Operational",
        text: "text-green-500",
        background: "bg-green-600",
        backgroundText: "text-white",
    },
    outage: {
        icon: MdError,
        description: "Partial Outage",
        text: "text-orange-400",
        background: "bg-orange-600",
        backgroundText: "text-white",
    },
    major_outage: {
        icon: HiBan,
        description: "Major Outage",
        text: "text-red-500",
        background: "bg-red-600",
        backgroundText: "text-white",
    },
    maintenance: {
        icon: HiOutlineWrenchScrewdriver,
        description: "Under Maintenance",
        text: "text-blue-600",
        background: "bg-blue-600",
        backgroundText: "text-white",
    },
};

export const getStatusUIMetaInfo = (status: ServiceStatus) => icons[status];
