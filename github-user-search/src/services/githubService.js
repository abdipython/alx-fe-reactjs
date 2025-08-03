import axios from 'axios';

export async function fetchAdvancedUserSearch(username, location, minRepos) {
  let query = '';

  if (username) query += `${username} `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos}`;

  const url = `https://api.github.com/search/users?q=${encodeURIComponent(query.trim())}`;

  const headers = {};
  const token = import.meta.env.VITE_APP_GITHUB_API_KEY;
  if (token) {
    headers.Authorization = `token ${token}`;
  }

  const response = await axios.get(url, { headers });
  return response.data;
}

