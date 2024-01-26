import { Service } from "@/types/Service";
import { FC } from "react";
import AffectedService from "./AffectedService";

interface AffectedServicesProps {
    services: Service[];
}

const AffectedServices: FC<AffectedServicesProps> = ({ services }) => {
    return (
        <div className="flex justify-center flex-col items-center">
            <h5 className="uppercase mb-5 text-sm text-gray-600 dark:text-gray-300 font-bold">
                Affected Services
            </h5>

            <div className="flex items-center gap-2 flex-wrap">
                {services.map((service) => (
                    <AffectedService key={service.id} service={service} />
                ))}
            </div>
        </div>
    );
};

export default AffectedServices;
