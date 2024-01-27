import { ServiceStatus } from "@/types/Service";
import { getStatusUIMetaInfo } from "@/utils/status";
import { FC } from "react";
import { MdCheck } from "react-icons/md";

interface StatusProps {
    status: ServiceStatus;
}

const Status: FC<StatusProps> = ({ status }) => {
    const info = getStatusUIMetaInfo(status);
    const Icon = status === "operational" ? MdCheck : info.icon;

    return (
        <h2
            className={`${info.background} ${info.backgroundText} rounded py-3 px-4 text-lg md:text-xl lg:text-2xl flex justify-center items-center gap-2`}
        >
            <Icon size="1.3em" className="-mt-[1px]" />
            {status === "operational"
                ? "All Systems Operational"
                : info.description}
        </h2>
    );
};

export default Status;
