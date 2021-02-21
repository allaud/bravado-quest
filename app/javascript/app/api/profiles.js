import apiClient from './api-client';

const PROFILE_URL = 'https://raw.githubusercontent.com/allaud/bravado-quest/master/app/views/welcome/users.json.erb';

export default function fetchProfiles() {
  return apiClient.get(PROFILE_URL)
    .then(({ data }) => data);
}
