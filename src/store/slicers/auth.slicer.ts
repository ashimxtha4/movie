import { createSlice } from "@reduxjs/toolkit";
import { User } from "@/types/user.interface";
import { Contract } from "@/types/contract.interface";
import { Wallet } from "@/types/wallet.interface";

interface UserState {
  token?: string;
  user?: User;
  contract?: Contract;
  wallet?: Wallet;
  isAdmin?: boolean;
  isAuthenticated: boolean;
}

const initialState: UserState = {
  token: undefined,
  user: {} as User,
  contract: {} as Contract,
  wallet: {} as Wallet,
  isAdmin: false,
  isAuthenticated: false,
};

const UserSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user } = action.payload;
      const company = user.company;
      delete user.company;
      state.user = user;
      state.contract = company.contract;
      state.wallet = company.wallet;
    },
    signOut: (state) => {
      state.token = undefined;
      state.user = undefined;
      state.isAuthenticated = false;
    },
    signIn: (state, action) => {
      const { token, user } = action.payload;
      state.token = token;
      const company = user.company;
      delete user.company;
      state.user = user;
      state.contract = company.contract;
      state.wallet = company.wallet;
      state.isAdmin = user.isAdmin;
      state.isAuthenticated = true;
    },
  },
});

export const { setUser, signIn, signOut } = UserSlice.actions;
export default UserSlice.reducer;
