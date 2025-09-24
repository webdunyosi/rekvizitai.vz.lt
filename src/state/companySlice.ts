import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CompanyState {
  companies: CompanySearchResult[];
  loading: boolean;
  error: string | null;
}

const initialState: CompanyState = {
  companies: [],
  loading: false,
  error: null,
};

const companySlice = createSlice({
  name: "company",
  initialState,
  reducers: {
    fetchCompaniesStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchCompaniesSuccess(state, action: PayloadAction<CompanySearchResult[]>) {
      state.loading = false;
      state.companies = action.payload;
    },
    fetchCompaniesFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    resetCompanies(state) {
      state.companies = [];
      state.loading = false;
      state.error = null;
    },
  },
});

export const {
  fetchCompaniesStart,
  fetchCompaniesSuccess,
  fetchCompaniesFailure,
  resetCompanies,
} = companySlice.actions;

export default companySlice.reducer;
