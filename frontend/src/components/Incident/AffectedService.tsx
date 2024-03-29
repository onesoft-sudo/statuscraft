import StatusIcon from "@/components/Service/StatusIcon";
import { Service, ServiceStatus } from "@/types/Service";
import { FC } from "react";

interface AffectedServiceProps {
    service: Service;
    status?: ServiceStatus;
}

const AffectedService: FC<AffectedServiceProps> = ({ service, status }) => {
    return (
        <div className="bg-gray-100 dark:bg-gray-800 shadow-[0_0_1px_0_#999] dark:shadow-none rounded-lg flex gap-2 items-center pl-3 pr-2 cursor-pointer">
            <StatusIcon status={status ?? service.status} size={"1.2rem"} />
            <span className="text-lg px-2">{service.name}</span>
        </div>
    );
};

export default AffectedService;
