import { useRef } from "react";
import { Mosaic, MosaicWindow } from "react-mosaic-component";
import type { Company, CompanyId } from "../types/company";
import { CompanyInfo } from "./CompanyInfo";

interface MosaicElementProps {
    companies: Company[] | null;
    companiesMap: Record<CompanyId, Company> | null;
}

export const MosaicElement = ({ companies, companiesMap }: MosaicElementProps) => {
    const index = useRef(4);
    console.log(companiesMap);

    return (
        <>
            {companiesMap && companies && (
                <Mosaic
                    blueprintNamespace="bp6"
                    renderTile={(id, path) => (
                        <MosaicWindow
                            path={path}
                            createNode={() => companies[index.current++].id}
                            title={companiesMap[id]?.name || "Company"}
                        >
                            <CompanyInfo company={companiesMap[id]}/>
                        </MosaicWindow>
                    )}
                    initialValue={
                        companies.length >= 3
                            ? {
                                  direction: "row",
                                  first: {
                                      direction: "column",
                                      first: companies[0].id,
                                      second: companies[1].id,
                                  },
                                  second: companies[2].id,
                              }
                            : null
                    }
                />
            )}
        </>
    );
};
