"use client";

import Image from "next/image";
import { useState } from "react";

type CompanyTabsProps = {
  companyData: CompanyInformation | null;
  historicalInfo: HistoricalInfo | null;
  parentCompany: ParentCompany | null;
  accountHistoricalInfo: any | null;
  accountStatements: AccountStatements | null;
  companyCharges: CompanyCharges | null;
};

const CompanyTabs: React.FC<CompanyTabsProps> = ({
  companyData,
  historicalInfo,
  parentCompany,
  accountHistoricalInfo,
  accountStatements,
  companyCharges,
}) => {
  const [activeTab, setActiveTab] = useState("company");

  console.log(historicalInfo);

  const TabButton = ({ id, label }: { id: string; label: string }) => (
    <button
      className={`rounded-t-lg px-2 py-2 text-sm font-semibold md:text-[16px] ${
        activeTab === id
          ? "border-x border-t border-gray-200 bg-white text-blue-600"
          : "bg-main-blue text-white"
      }`}
      onClick={() => setActiveTab(id)}
    >
      {label}
    </button>
  );

  const renderContent = (content: React.ReactNode, fallback: string) =>
    content || <p>{fallback}</p>;

  return (
    <div>
      <div className="mb-4 flex space-x-2 border-b border-gray-200 pl-0 md:pl-3">
        <TabButton id="company" label="Company Info" />
        <TabButton id="historical" label="Historical Info" />
        <TabButton id="parent" label="Parent Company" />
        <TabButton id="accounts" label="Account Statements" />
        <TabButton id="charges" label="Company Charges" />
      </div>

      <div className="rounded-lg bg-white p-4 shadow">
        {activeTab === "company" &&
          renderContent(
            companyData?.result ? (
              <dl className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex gap-4">
                    <Image
                      src="/Company/1.svg"
                      alt="Work Image 1"
                      width={20}
                      height={20}
                      className="mx-auto"
                    />
                    <dt className="text-xl font-semibold">Company Name</dt>
                  </div>
                  <dd>{companyData.result.company_name}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-4">
                    <Image
                      src="/Company/2.svg"
                      alt="Work Image 1"
                      width={20}
                      height={20}
                      className="mx-auto"
                    />
                    <dt className="text-xl font-semibold">Company Number</dt>
                  </div>
                  <dd>+{companyData.result.company_number}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-4">
                    <Image
                      src="/Company/3.svg"
                      alt="Work Image 1"
                      width={20}
                      height={20}
                      className="mx-auto"
                    />
                    <dt className="text-xl font-semibold">Company Status</dt>
                  </div>
                  <dd>{companyData.result.company_status}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-4">
                    <Image
                      src="/Company/4.svg"
                      alt="Work Image 1"
                      width={20}
                      height={20}
                      className="mx-auto"
                    />
                    <dt className="text-xl font-semibold">Jurisdiction</dt>
                  </div>
                  <dd>{companyData.result.jurisdiction}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-4">
                    <Image
                      src="/Company/5.svg"
                      alt="Work Image 1"
                      width={20}
                      height={20}
                      className="mx-auto"
                    />
                    <dt className="text-xl font-semibold">Company Type</dt>
                  </div>
                  <dd>{companyData.result.type}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-4">
                    <Image
                      src="/Company/6.svg"
                      alt="Work Image 1"
                      width={20}
                      height={20}
                      className="mx-auto"
                    />
                    <dt className="text-xl font-semibold">
                      Registered Office Address
                    </dt>
                  </div>
                  <dd>
                    {companyData.result.registered_office_address
                      ? `${companyData.result.registered_office_address.address_line_1},
                         ${companyData.result.registered_office_address.locality},
                         ${companyData.result.registered_office_address.postal_code || ""},
                         ${companyData.result.registered_office_address.country}`
                      : "N/A"}
                  </dd>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-4">
                    <Image
                      src="/Company/7.svg"
                      alt="Work Image 1"
                      width={20}
                      height={20}
                      className="mx-auto"
                    />
                    <dt className="text-xl font-semibold">SIC Codes</dt>
                  </div>
                  <dd>{companyData.result.sic_codes?.join(", ") || "N/A"}</dd>
                </div>
              </dl>
            ) : null,
            "No company information available.",
          )}

        {activeTab === "historical" &&
          renderContent(
            historicalInfo?.result ? (
              <div>
                <h2 className="mb-4 text-xl font-semibold">
                  Historical Information
                </h2>
                {historicalInfo.result.previous_company_names ? (
                  <ul className="list-disc pl-5">
                    {historicalInfo.result.previous_company_names.map(
                      (name: PreviousCompanyName, index: number) => (
                        <li key={index}>{name.name}</li>
                      ),
                    )}
                  </ul>
                ) : (
                  <p>No previous company names found.</p>
                )}
              </div>
            ) : null,
            "No historical information available.",
          )}

        {activeTab === "parent" &&
          renderContent(
            parentCompany?.result ? (
              <div>
                <h2 className="mb-4 text-xl font-semibold">Parent Company</h2>
                {parentCompany.result.branch_company_details ? (
                  <pre className="overflow-x-auto rounded bg-gray-100 p-4">
                    {JSON.stringify(
                      parentCompany.result.branch_company_details,
                      null,
                      2,
                    )}
                  </pre>
                ) : (
                  <p>No parent company information available.</p>
                )}
              </div>
            ) : null,
            "No parent company information available.",
          )}

        {activeTab === "accounts" &&
          renderContent(
            accountStatements?.result ? (
              <div>
                <h2 className="mb-4 text-xl font-semibold">
                  Account Statements
                </h2>
                <h3 className="mb-2 text-lg font-semibold">Accounts</h3>
                {accountStatements.result.accounts ? (
                  <dl className="space-y-2">
                    <div>
                      <dt className="font-semibold">
                        Accounting Reference Date
                      </dt>
                      <dd>{`${accountStatements.result.accounts.accounting_reference_date.day}/${accountStatements.result.accounts.accounting_reference_date.month}`}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold">Next Accounts Due</dt>
                      <dd>
                        {accountStatements.result.accounts.next_accounts.due_on}
                      </dd>
                    </div>
                    <div>
                      <dt className="font-semibold">Next Accounts Period</dt>
                      <dd>{`${accountStatements.result.accounts.next_accounts.period_start_on} to ${accountStatements.result.accounts.next_accounts.period_end_on}`}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold">Overdue</dt>
                      <dd>
                        {accountStatements.result.accounts.overdue
                          ? "Yes"
                          : "No"}
                      </dd>
                    </div>
                  </dl>
                ) : (
                  <p>No accounts information available.</p>
                )}
                <h3 className="mb-2 mt-4 text-lg font-semibold">
                  Confirmation Statement
                </h3>
                {accountStatements.result.confirmation_statement ? (
                  <dl className="space-y-2">
                    <div>
                      <dt className="font-semibold">Next Due</dt>
                      <dd>
                        {
                          accountStatements.result.confirmation_statement
                            .next_due
                        }
                      </dd>
                    </div>
                    <div>
                      <dt className="font-semibold">Next Made Up To</dt>
                      <dd>
                        {
                          accountStatements.result.confirmation_statement
                            .next_made_up_to
                        }
                      </dd>
                    </div>
                    <div>
                      <dt className="font-semibold">Overdue</dt>
                      <dd>
                        {accountStatements.result.confirmation_statement.overdue
                          ? "Yes"
                          : "No"}
                      </dd>
                    </div>
                  </dl>
                ) : (
                  <p>No confirmation statement information available.</p>
                )}
              </div>
            ) : null,
            "No account statements available.",
          )}

        {activeTab === "charges" &&
          renderContent(
            companyCharges?.result ? (
              <div>
                <h2 className="mb-4 text-xl font-semibold">Company Charges</h2>
                {(companyCharges.result?.length ?? 0) > 0 ? (
                  <ul className="list-disc pl-5">
                    {companyCharges.result?.map((charge, index) => (
                      <li key={index}>
                        <strong>Date:</strong> {charge.date},{" "}
                        <strong>Description:</strong> {charge.description}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No company charges information available.</p>
                )}
              </div>
            ) : null,
            "No company charges information available.",
          )}
      </div>
    </div>
  );
};

export default CompanyTabs;
