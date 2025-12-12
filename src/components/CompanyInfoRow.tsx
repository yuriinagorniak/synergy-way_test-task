import type { ReactNode } from "react";

const CompanyInfoRow = ({ label, children }: { label: string; children: ReactNode }) => (
    <li>
        <span className="font-bold">{label}</span> <span className="font-normal">{children}</span>
    </li>
);

export default CompanyInfoRow;