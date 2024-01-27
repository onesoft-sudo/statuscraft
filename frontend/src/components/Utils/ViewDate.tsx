"use client";

import { format, formatDistanceToNowStrict } from "date-fns";
import { FC, ReactNode } from "react";

interface ViewDateProps {
    transform?: (date: Date) => ReactNode;
    date: Date;
    distanceFromNow?: boolean;
    addSuffix?: boolean;
    formatSpecifier?: string;
}

const ViewDate: FC<ViewDateProps> = ({
    date,
    transform,
    addSuffix = true,
    distanceFromNow = false,
    formatSpecifier = "MMM d, y H:ii OOOO",
}) => {
    if (transform) {
        return transform(date);
    }

    if (distanceFromNow) {
        return formatDistanceToNowStrict(date, {
            addSuffix,
        });
    }

    return format(date, formatSpecifier);
};

export default ViewDate;
