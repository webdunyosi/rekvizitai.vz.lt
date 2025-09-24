type searchData = {
  name: string | undefined;
  word: string | undefined;
  code: string | undefined;
  city: string | undefined;
  sic_code: string[] | undefined;
};

type currencyData = {
  name: string;
  base_symbol: string;
  rates: rate[];
};

type rate = {
  currency: string;
  name: string;
  rate: number;
};

type exchangeData = {
  base_currency: string;
  target_currency: string;
};

type SearchResultProps = {
  company_name: string;
  company_number: string;
  company_status: string | null;
  company_type: string | null;
  date_of_creation: string | null;
  date_of_cessation: null;
  registered_office_address_line_1: string | null;
  registered_office_address_line_2: string | null;
  registered_office_locality: string | null;
  registered_office_postal_code: string | null;
  registered_office_region: null;
  registered_office_country: string | null;
  sic_codes: string[];
  sic_text_1: string | null;
  sic_text_2: string | null;
  sic_text_3: string | null;
  sic_text_4: string | null;
};

type User = {
  email: string;
  password: string;
  is_active?: boolean;
  is_superuser?: boolean;
  is_verified?: boolean;
  firm: string;
  duties: string;
  phone: string;
};

type CompanySearchResult = {
  company_name: string;
  company_number: string;
  company_status: string;
  company_type: string;
  date_of_creation: string;
  date_of_cessation?: string | null;
  registered_office_address_line_1: string;
  registered_office_address_line_2?: string;
  registered_office_country: string;
  registered_office_locality: string;
  registered_office_postal_code: string;
  registered_office_region?: string | null;
  sic_codes: string[];
  sic_text_1?: string;
  sic_text_2?: string;
  sic_text_3?: string;
  sic_text_4?: string;
};

type CompanySearchResponse = {
  search_time: number;
  total: number;
  results: CompanySearchResult[];
};

type Category = {
  code: string;
  categories: string;
};

type CompanyInformation = {
  result: {
    company_name: string;
    company_number: string;
    company_status: string;
    company_status_detail: string | null;
    Date_of_cessation: string | null;
    Date_of_creation: string | null;
    foreign_company_details: {
      governed_by: string;
      originating_registry: {
        country: string;
        name: string;
      };
      registration_number: string;
      legal_form: string;
    } | null;
    has_been_liquidated: string | null;
    is_community_interest_company: string | null;
    jurisdiction: string;
    registered_office_address: {
      address_line_1: string;
      address_line_2: string;
      country: string;
      locality: string;
      postal_code?: string;
    } | null;
    registered_office_is_in_dispute: boolean;
    service_address: {
      address_line_1: string;
      address_line_2: string;
      country: string;
      locality: string;
      postal_code?: string;
    } | null;
    sic_codes: string[] | null;
    super_secure_managing_officer_count: string | null;
    type: string;
    undeliverable_registered_office_address: boolean;
  };
};

type HistoricalInfo = {
  result: {
    previous_company_names: PreviousCompanyName[];
  };
};

type PreviousCompanyName = {
  ceased_on: string;
  effective_from: string;
  name: string;
};

type ParentCompany = {
  result: {
    branch_company_details: any | null;
  };
};

type AccountHistoricalInfo = {
  result: Array<{
    barcode: string;
    transaction_id: string;
    category: string;
    date: string;
    description: string;
    links: {
      self: string;
      document_metadata: string;
    };
    pages: number;
  }>;
};

type AccountStatements = {
  result: {
    accounts: {
      accounting_reference_date: {
        day: string;
        month: string;
      };
      last_accounts: {
        type: string;
      };
      next_accounts: {
        due_on: string;
        overdue: boolean;
        period_end_on: string;
        period_start_on: string;
      };
      next_due: string;
      next_made_up_to: string;
      overdue: boolean;
    } | null;
    annual_return: null;
    confirmation_statement: {
      next_due: string;
      next_made_up_to: string;
      overdue: boolean;
    } | null;
  };
};

type CompanyCharges = {
  result: Array<{
    date: string;
    description: string;
  }> | null;
};

type CompanyTabsProps = {
  companyData: CompanyInformation | null;
  historicalInfo: HistoricalInfo | null;
  parentCompany: ParentCompany | null;
  accountHistoricalInfo: AccountHistoricalInfo | null;
  accountStatements: AccountStatements | null;
  companyCharges: CompanyCharges | null;
};

type News = {
  title: string;
  description: string;
  thumbnail: string;
  link: string;
};
