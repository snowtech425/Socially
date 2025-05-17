import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../index";
import { auth, signIn, signOut } from "@/auth";
import Agent from "../agent";

interface AuthState {
  loading: boolean;
  user: Record<string, any>;
  user_data: Record<string, any>;
  errors: Record<string, any>;
  redirectTo: string | null;
}

const initialState: AuthState = {
  loading: false,
  user: {},
  user_data: {},
  errors: {},
  redirectTo: null,
};

export const loginUser = createAsyncThunk(
  "auth/login",
  async (data: { username: string; password: string }, { rejectWithValue }) => {
    try {
      const res = await signIn("credentials", {
        redirect: false,
        username: data.username,
        password: data.password,
      });
      if (res?.error) {
        return rejectWithValue({ errors: { login: res.error } });
      }
      const session = await auth();
      return session;
    } catch (err: any) {
      return rejectWithValue({ errors: { [err.name]: err.message } });
    }
  }
);

export const logoutUser = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await signOut({ redirect: true });
      return {};
    } catch (err: any) {
      return rejectWithValue({ errors: { [err.name]: err.message } });
    }
  }
);

export const getUser = createAsyncThunk("/", async (_, { rejectWithValue }) => {
  try {
    const session = await auth();
    console.log("slice", session);
    if (!session) {
      return rejectWithValue({ errors: { session: "No active session" } });
    }

    return session;
  } catch (err: any) {
    return rejectWithValue({ errors: { [err.name]: err.message } });
  }
});

export const addUserToSpreadsheet: any = createAsyncThunk(
  "auth/add_user",
  async (
    data: {
      // name: string;
      // email: string;
      gender: string;
      age: number;
      scenario: string;
    },
    { rejectWithValue }
  ) => {
    try {
      const res = await Agent.User.add_data({
        // name: data.name,
        // email: data.email,
        gender: data.gender,
        scenario: data.scenario,
        age: data.age,
      });
    } catch (err: any) {
      return rejectWithValue({ errors: { [err.name]: err.message } });
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoading(state) {
      state.loading = true;
    },
    // updateUserState(state, action) {
    //   if (state.errors["email or password"]) {
    //     delete state.errors["email or password"];
    //   }
    //   if (state.errors[action.payload.session.token]) {
    //     delete state.errors[action.payload.session.token];
    //   }
    //   state.user[action.payload.session.token] = action.payload.value;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload || {};
        state.redirectTo = "/reduxsuccess";
      })
      .addCase(loginUser.rejected, (state, action: any) => {
        state.loading = false;
        state.errors = action.payload?.errors || {};
      })
      .addCase(logoutUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.loading = false;
        state.user = {};
        state.redirectTo = "/login";
      })
      .addCase(logoutUser.rejected, (state, action: any) => {
        state.loading = false;
        state.errors = action.payload?.errors || {};
      })
      .addCase(getUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload?.user || {};
        // state.redirectTo = "/";
      })
      .addCase(getUser.rejected, (state, action: any) => {
        state.loading = false;
        state.errors = action.payload?.errors || {};
      })

      .addCase(addUserToSpreadsheet.pending, (state) => {
        state.loading = true;
      })
      .addCase(addUserToSpreadsheet.fulfilled, (state, action) => {
        state.loading = false;
        state.user_data = action.payload || {};
        // state.redirectTo = "/auth";
      })
      .addCase(addUserToSpreadsheet.rejected, (state, action: any) => {
        state.loading = false;
        state.errors = action.payload?.errors || {};
      });
  },
});

export const authSelector = (state: RootState) => state.auth;

export const { reducer, actions } = authSlice;
