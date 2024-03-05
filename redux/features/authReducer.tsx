import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type HomeState = {
  token: string;
  persistedFilterObj: any;
  id: number | null;
};

const initialState = {
  token: "",
  persistedFilterObj: {
    province: null,
    district: null,
    ward: null,
    municipality: null,
  },
  id: null,
} as HomeState;

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },

    setPersistedFilterObj: (state, action: PayloadAction<any>) => {
      state.persistedFilterObj = action.payload;
    },
    setId: (state, action: PayloadAction<number>) => {
      state.id = action.payload;
    },
  },
});

export const { setToken, setPersistedFilterObj, setId } = auth.actions;
export default auth.reducer;
