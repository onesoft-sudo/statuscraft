"use client";

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
    const paddedData = useMemo(() => {
        const newData = [...data];

        if (data.length < 60) {
            for (let i = 0; i < 60 - data.length; i++) {
                newData.unshift(100);
            }
        }

        console.log(newData.length);
        return newData;
    }, [data]);

    const statusInfo = getStatusUIMetaInfo(status);

    return (
        <div
            className={`${
                isFirst ? "" : "border-t dark:border-t-gray-600"
            } px-4 pt-3 pb-4`}
        >
            <div className="flex items-center justify-between">
                <strong className="font-semibold">{serviceName}</strong>
                <span className={statusInfo.text}>
                    {statusInfo.description}
                </span>
            </div>
            <ul className="grid grid-cols-[repeat(60,_1fr)] h-[50px] gap-1 mt-4">
                {paddedData.map((uptime, index) => (
                    <Tooltip title={`${uptime}%`} key={index}>
                        <li
                            key={index}
                            className={`${
                                uptime >= 99
                                    ? "bg-green-500"
                                    : uptime >= 95
                                    ? "bg-yellow-500"
                                    : uptime >= 70
                                    ? "bg-orange-500"
                                    : "bg-red-500"
                            }`}
                        ></li>
                    </Tooltip>
                ))}
            </ul>
        </div>
    );
};

export default Uptime;
