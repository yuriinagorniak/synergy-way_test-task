import type { Company } from "../types/company";
import Row from "./CompanyInfoRow";

interface CompanyInfoProps {
    company: Company;
}

export const CompanyInfo = ({ company }: CompanyInfoProps) => {
    return (
        <div>
            <ul className="text-left p-4 flex flex-col gap-3 ">
                <Row label="Ticker:">{company.ticker ?? "—"}</Row>
                <Row label="Name:">{company.name ?? "—"}</Row>
                <Row label="Legal name:">{company.legal_name ?? "—"}</Row>
                <Row label="Short description:">{company.short_description ?? "—"}</Row>
                <Row label="Long description:">{company.long_description ?? "—"}</Row>
                <Row label="Website:">
                    {company.company_url ? (
                        <a
                            href={company.company_url}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {company.company_url}
                        </a>
                    ) : (
                        "—"
                    )}
                </Row>
                <Row label="Business address:">{company.business_address ?? "—"}</Row>
                <Row label="Business phone:">{company.business_phone_no ?? "—"}</Row>
                <Row label="Entity legal form:">{company.entity_legal_form ?? "—"}</Row>
                <Row label="Latest filing date:">{company.latest_filing_date ?? "—"}</Row>
                <Row label="Incorporation country:">{company.inc_country ?? "—"}</Row>
                <Row label="Employees:">{company.employees ?? "—"}</Row>
                <Row label="Sector:">{company.sector ?? "—"}</Row>
                <Row label="Industry category:">{company.industry_category ?? "—"}</Row>
                <Row label="Industry group:">{company.industry_group ?? "—"}</Row>
                <Row label="First stock price date:">{company.first_stock_price_date ?? "—"}</Row>
                <Row label="Last stock price date:">{company.last_stock_price_date ?? "—"}</Row>
                <Row label="Legacy sector:">{company.legacy_sector ?? "—"}</Row>
                <Row label="Legacy industry category:">{company.legacy_industry_category ?? "—"}</Row>
                <Row label="Legacy industry group:">{company.legacy_industry_group ?? "—"}</Row>
            </ul>
        </div>
    );
};
