import HttpClient from '@/services/httpClients/HttpClient';

const authClient = new HttpClient();
authClient.setBearer(process.env.VUE_APP_BEARER_TOKEN);
authClient.setDefaultPath('https://api.stage.capusta.space/v1');
export default authClient;
