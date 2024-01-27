import { ServiceStatus } from "@/types/Service";
import { getStatusUIMetaInfo } from "@/utils/status";
import { Tooltip } from "@mui/material";
import { FC } from "react";
import { IconBaseProps } from "react-icons";

interface StatusIconProps extends IconBaseProps {
    status: ServiceStatus;
}

const StatusIcon: FC<StatusIconProps> = ({ status, ...props }) => {
    const icon = getStatusUIMetaInfo(status);
    const Component = icon.icon;

    return (
        <Tooltip title={icon.description}>
            <Component className={icon.text} {...props} />
        </Tooltip>
    );
};

export default StatusIcon;
