"use client";

import { useDetailedDeviceType } from "@/hooks/useDeviceType";
import { ServiceStatus } from "@/types/Service";
import { getStatusUIMetaInfo } from "@/utils/status";
import { Tooltip } from "@mui/material";
import { FC, useMemo } from "react";

interface UptimeProps {
    data: number[];
    serviceName: string;
    isFirst: boolean;
    status: ServiceStatus;
}

const Uptime: FC<UptimeProps> = ({ data, serviceName, isFirst, status }) => {
    const device = useDetailedDeviceType();
    const max = device === "desktop" ? 60 : device === "mobile" ? 25 : 50;
    const paddedData = useMemo(() => {
        const newData = [...data];

        if (data.length < max) {
            for (let i = 0; i < max - data.length; i++) {
                newData.unshift(100);
            }
        }

        return newData;
    }, [data, device]);

    const statusInfo = getStatusUIMetaInfo(status);

    return (
        <div
            className={`${
                isFirst ? "" : "border-t dark:border-t-gray-800"
            } px-4 pt-3 pb-4`}
        >
            <div className="flex items-center justify-between">
                <strong className="font-semibold">{serviceName}</strong>
                <span className={statusInfo.text}>
                    {statusInfo.shortDescription ?? statusInfo.description}
                </span>
            </div>
            <ul
                className="grid h-[50px] gap-1 mt-4"
                style={{
                    gridTemplateColumns: `repeat(${max}, 1fr)`,
                }}
            >
                {paddedData.map((uptime, index) => (
                    <Tooltip title={`${uptime}%`} key={index}>
                        <li
                            key={index}
                            className={`${
                                uptime >= 99
                                    ? "bg-green-500 hover:bg-green-600"
                                    : uptime >= 95
                                    ? "bg-yellow-500 hover:bg-yellow-600"
                                    : uptime >= 70
                                    ? "bg-orange-500 hover:bg-orange-600"
                                    : "bg-red-500 hover:bg-red-600"
                            }`}
                        ></li>
                    </Tooltip>
                ))}
            </ul>
        </div>
    );
};

export default Uptime;
