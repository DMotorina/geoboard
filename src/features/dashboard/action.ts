import { createAsyncThunk } from '@reduxjs/toolkit'
import { httpClient } from '@/shared/utils/httpClient'
import { Dashboard } from './types'

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
}

export const getDashboardData = createAsyncThunk<Dashboard>(
  'dashboard/getDashboardData',
  async (_, { rejectWithValue }) => {
    try {
      const response = await httpClient.get<Dashboard>('/api/v1/dashboard/', config)
      return response.data
    } catch (error) {
      return rejectWithValue('')
    }
  }
)

export const updateDashboard = createAsyncThunk<
  Dashboard,
  { temperature_scale: string; location: string },
  {
    rejectValue: string
  }
>('dashboard/updateDashboard', async ({ temperature_scale, location }, { rejectWithValue }) => {
  try {
    const response = await httpClient.put<Dashboard>(
      '/api/v1/dashboard/',
      { temperature_scale, location },
      config
    )
    return response.data
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return rejectWithValue(error.response.data['non_field_errors'][0])
  }
})

export const updateDashboardPartiel = createAsyncThunk<
  Dashboard,
  { temperature_scale: string; location: string },
  {
    rejectValue: string
  }
>(
  'dashboard/updateDashboardPartiel',
  async ({ temperature_scale, location }, { rejectWithValue }) => {
    try {
      const response = await httpClient.patch<Dashboard>(
        '/api/v1/dashboard/',
        { temperature_scale, location },
        config
      )
      return response.data
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      return rejectWithValue(error.response.data['non_field_errors'][0])
    }
  }
)

export const searchLocation = createAsyncThunk<
  Dashboard,
  { query: string },
  {
    rejectValue: string
  }
>('dashboard/searchLocation', async ({ query }, { rejectWithValue }) => {
  try {
    const response = await httpClient.post<Dashboard>(
      '/api/v1/dashboard/search-location',
      { query },
      config
    )
    return response.data
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return rejectWithValue(error.response.data['non_field_errors'][0])
  }
})
