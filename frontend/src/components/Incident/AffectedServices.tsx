import { Service, ServiceStatus } from "@/types/Service";
import { FC } from "react";
import AffectedService from "./AffectedService";

interface AffectedServicesProps {
    services: Service[];
    statuses: ServiceStatus[];
}

const AffectedServices: FC<AffectedServicesProps> = ({
    services,
    statuses,
}) => {
    return (
        <div className="flex justify-center flex-col items-center">
            <h5 className="uppercase mb-5 text-sm text-gray-600 dark:text-gray-300 font-bold">
                Affected Services
            </h5>

            <div className="flex items-center gap-2 flex-wrap">
                {services.map((service, index) => (
                    <AffectedService
                        key={service.id}
                        service={service}
                        status={statuses[index]}
                    />
                ))}
            </div>
        </div>
    );
};

export default AffectedServices;
