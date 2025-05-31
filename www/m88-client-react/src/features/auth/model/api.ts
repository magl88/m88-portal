import { rtkApi } from "@/shared/api";

export const authApiSlice = rtkApi.injectEndpoints({
	endpoints: (builder) => ({
		login: builder.mutation({
			query: (credentials) => ({
				url: "/auth/session/login",
				method: "POST",
				body: credentials,
			}),
		}),
		logout: builder.mutation({
			query: () => ({
				url: "/auth/session/logout",
				method: "POST",
			}),
		}),
		getCurrentUser: builder.query({
			query: () => "/auth/me",
			transformResponse: (response) => response.user,
		}),
	}),
});

export const { useLoginMutation, useLogoutMutation, useGetCurrentUserQuery } =
	authApiSlice;
