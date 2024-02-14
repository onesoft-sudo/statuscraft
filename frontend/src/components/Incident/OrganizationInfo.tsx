import { Organization } from "@/types/Organization";
import { FC } from "react";

interface OrganizationInfoProps {
    organization: Organization;
}

const OrganizationInfo: FC<OrganizationInfoProps> = ({ organization }) => {
    return (
        <div>
            <h2>
                <span className="text-[#555] dark:text-[#999]">Affects </span>
                {organization.name}
            </h2>
        </div>
    );
};

export default OrganizationInfo;
