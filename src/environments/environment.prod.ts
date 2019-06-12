export let Api_Url = '';

switch (window.location.hostname) {
  case '':
    Api_Url += '';
    break;
  default:
    Api_Url += 'https://localhost:44376/api';
}

export const environment = {
  production: true
};
