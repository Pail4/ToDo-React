export const API = {
  serverUrl : 'https://api.genderize.io',
  getUrl(name){
    return  `${this.serverUrl}?name=${name}`;
  },
}