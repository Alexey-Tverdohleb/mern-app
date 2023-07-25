export default function getGoogleAuthUrl() {
  const googleAuthBaseUrl = 'https://accounts.google.com/o/oauth2/v2/auth';

  const options = {
    redirect_uri: import.meta.env.VITE_GOOGLE_REDIRECT_URL,
    client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
    access_type: 'offline',
    response_type: 'code',
    prompt: 'consent',
    scope: ['https://www.googleapis.com/auth/userinfo.profile'].join(' '),
  };

  const params = new URLSearchParams(options).toString();

  return `${googleAuthBaseUrl}?${params}`;
}
