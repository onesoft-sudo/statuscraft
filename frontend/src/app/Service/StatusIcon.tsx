import { ServiceStatus } from "@/types/Service";
import { Tooltip } from "@mui/material";
import { FC } from "react";
import { IconBaseProps, IconType } from "react-icons";
import { FaExclamationTriangle } from "react-icons/fa";
import { FaBan } from "react-icons/fa6";
import { MdCircle, MdConstruction, MdError } from "react-icons/md";

interface StatusIconProps extends IconBaseProps {
    status: ServiceStatus;
}

type IconInfo = {
    icon: IconType;
    description: string;
    className?: string;
};

const icons: Record<ServiceStatus, IconInfo> = {
    degraded: {
        icon: FaExclamationTriangle,
        description: "Degraded Performance",
        className: "text-yellow-400",
    },
    operational: {
        icon: MdCircle,
        description: "Operational",
        className: "text-green-500",
    },
    outage: {
        icon: MdError,
        description: "Partial Outage",
        className: "text-orange-400",
    },
    major_outage: {
        icon: FaBan,
        description: "Major Outage",
        className: "text-red-500",
    },
    maintenance: {
        icon: MdConstruction,
        description: "Under Maintenance",
        className: "text-blue-600",
    },
};

const StatusIcon: FC<StatusIconProps> = ({ status, ...props }) => {
    const icon = icons[status];
    const Component = icon.icon;

    return (
        <Tooltip title={icon.description}>
            <Component className={icon.className} {...props} />
        </Tooltip>
    );
};

export default StatusIcon;
