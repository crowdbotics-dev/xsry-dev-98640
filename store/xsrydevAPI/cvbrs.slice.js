import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_cvbr_list = createAsyncThunk(
  "cvbrs/api_v1_cvbr_list",
  async payload => {
    const response = await apiService.api_v1_cvbr_list(payload)
    return response.data
  }
)
export const api_v1_cvbr_create = createAsyncThunk(
  "cvbrs/api_v1_cvbr_create",
  async payload => {
    const response = await apiService.api_v1_cvbr_create(payload)
    return response.data
  }
)
export const api_v1_cvbr_retrieve = createAsyncThunk(
  "cvbrs/api_v1_cvbr_retrieve",
  async payload => {
    const response = await apiService.api_v1_cvbr_retrieve(payload)
    return response.data
  }
)
export const api_v1_cvbr_update = createAsyncThunk(
  "cvbrs/api_v1_cvbr_update",
  async payload => {
    const response = await apiService.api_v1_cvbr_update(payload)
    return response.data
  }
)
export const api_v1_cvbr_partial_update = createAsyncThunk(
  "cvbrs/api_v1_cvbr_partial_update",
  async payload => {
    const response = await apiService.api_v1_cvbr_partial_update(payload)
    return response.data
  }
)
export const api_v1_cvbr_destroy = createAsyncThunk(
  "cvbrs/api_v1_cvbr_destroy",
  async payload => {
    const response = await apiService.api_v1_cvbr_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const cvbrsSlice = createSlice({
  name: "cvbrs",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_cvbr_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_cvbr_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_cvbr_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_cvbr_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_cvbr_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_cvbr_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_cvbr_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_cvbr_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_cvbr_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_cvbr_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_cvbr_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_cvbr_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_cvbr_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_cvbr_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_cvbr_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_cvbr_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_cvbr_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_cvbr_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_cvbr_list,
  api_v1_cvbr_create,
  api_v1_cvbr_retrieve,
  api_v1_cvbr_update,
  api_v1_cvbr_partial_update,
  api_v1_cvbr_destroy,
  slice: cvbrsSlice
}
