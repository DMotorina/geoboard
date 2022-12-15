import { createAsyncThunk } from '@reduxjs/toolkit';
import { httpClient } from '@/shared/utils/httpClient';
import { User } from './types';

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export const login = createAsyncThunk<
  User,
  { email: string; password: string },
  {
    rejectValue: string; // Проверь это. Зависит от того, что передашь в rejectWithValue
  }
>('user/login', async ({ email, password }, { rejectWithValue }) => {
  try {
    const response = await httpClient.post<User>(
      '/api/v1/auth/login/',
      { email, password },
      config
    );
    return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    // TODO: Разберись с форматом ошибки
    return rejectWithValue(error.response.data['non_field_errors'][0]);
  }
});

export const checkAuth = createAsyncThunk<User>(
  'user/checkAuth',
  async (_, { rejectWithValue }) => {
    try {
      const response = await httpClient.get<User>('/api/v1/users/me', config);
      return response.data;
    } catch (error) {
      return rejectWithValue('');
    }
  }
);

export const logout = createAsyncThunk('user/logout', async (_, { rejectWithValue }) => {
  try {
    await httpClient.post('/api/v1/auth/logout/', config);
  } catch (error) {
    rejectWithValue('Error!');
  }
  return null;
});
