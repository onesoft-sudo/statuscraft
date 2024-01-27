import { ServiceStatus } from "@/types/Service";
import { FC } from "react";
import Uptime from "./Uptime";

interface UptimeListProps {
    data: Array<{
        serviceName: string;
        data: number[];
        status: ServiceStatus;
    }>;
}

const UptimeList: FC<UptimeListProps> = ({ data }) => {
    return (
        <div className="border  dark:border-gray-600 rounded-md">
            {data.map((info, index) => (
                <Uptime
                    key={index}
                    data={info.data}
                    serviceName={info.serviceName}
                    isFirst={index === 0}
                    status={info.status}
                />
            ))}
        </div>
    );
};

export default UptimeList;
