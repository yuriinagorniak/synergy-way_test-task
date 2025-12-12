import "./App.css";

import { useEffect, useState } from "react";
import axios from "axios";
import type { Company, CompanyId } from "./types/company";
import { MosaicElement } from "./components/MosaicElement";

const createCompanyMap = (companies: Company[]) => {
    return Object.fromEntries(companies.map((comp) => [comp.id, comp]));
};

function App() {
    const [companies, setCompanies] = useState<Company[] | null>(null);
    const [companiesMap, setCompaniesMap] = useState<Record<CompanyId, Company> | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get<Company[]>("/companies-lookup.json");
                setCompanies(res.data);
                setCompaniesMap(createCompanyMap(res.data));
            } catch (error) {
                if (error instanceof Error) {
                    console.log(error.message);
                } else {
                    throw error;
                }
            }
        };
        fetchData();
    }, []);

    return (
        <div id="app">
            <MosaicElement companies={companies} companiesMap={companiesMap} />
        </div>
    );
}

export default App;
