import apiClient from './api-client';

const PROFILE_URL = '/api/v1/profiles';

export default function fetchProfiles(query, page = 0) {
  return apiClient.get(PROFILE_URL, {
    params: {
      query,
      page,
    },
  })
    .then(({ data }) => data);
}
