import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { Post } from '../api/postsApi';
import { fetchPostsApi } from '../api/postsApi';

type PostsState = {
  items: Post[];
  loading: boolean;
  error: string | null;
};

const initialState: PostsState = {
  items: [],
  loading: false,
  error: null,
};

export const fetchPosts = createAsyncThunk<Post[]>(
  'posts/fetchPosts',
  async () => fetchPostsApi(),
);

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchPosts.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Unknown error';
      });
  },
});

export default postsSlice.reducer;

