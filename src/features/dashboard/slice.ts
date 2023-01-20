/* eslint-disable @typescript-eslint/no-empty-function */
import { createSlice, SliceCaseReducers } from '@reduxjs/toolkit'
import { getDashboardData, searchLocation, updateDashboard } from './action'
import { Dashboard } from './types'

interface State {
  loadingDashboard: boolean
  update: boolean
  updatePartiel: boolean
  search: boolean
  error: string | null
  data: Dashboard | null
}

const initialState: State = {
  loadingDashboard: false,
  update: false,
  updatePartiel: false,
  search: false,
  error: null,
  data: null,
}

const dashboardSlice = createSlice<State, SliceCaseReducers<State>>({
  name: 'dashboard',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDashboardData.fulfilled, (state, { payload }) => {
      state.loadingDashboard = false
      state.data = payload
    })
    builder.addCase(getDashboardData.rejected, (state) => {
      state.loadingDashboard = true
    })
    builder.addCase(updateDashboard.pending, (state) => {
      state.update = true
      state.error = null
    })
    builder.addCase(updateDashboard.fulfilled, (state, { payload }) => {
      state.update = true
      state.data = payload
    })
    builder.addCase(updateDashboard.rejected, (state, { payload }) => {
      state.update = false
      state.error = payload ?? null
    })
    builder.addCase(searchLocation.pending, (state) => {
      state.search = true
      state.error = null
    })
    builder.addCase(searchLocation.fulfilled, (state, { payload }) => {
      state.search = false
      state.data = payload
    })
    builder.addCase(searchLocation.rejected, (state, { payload }) => {
      state.search = false
      state.error = payload ?? null
    })
  },
})

export default dashboardSlice.reducer
