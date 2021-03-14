import dotenv from 'dotenv';

const envFound = dotenv.config();

if (envFound.error) {
  throw new Error('No .env found !');
}

const sendErrorsToDiscord = process.env.SEND_ERRORS_TO_DISCORD ? !!+process.env.SEND_ERRORS_TO_DISCORD : true;
const interval = process.env.INTERVAL ? +process.env.INTERVAL : 5;

export default {
  'url3080': 'https://api.nvidia.partners/edge/product/search?page=1&limit=9&locale=fr-fr&category=GPU&gpu=RTX%203080',
  'urlWebhook': `${process.env.URL_DISCORD}`,
  'sendErrorsToDiscord': sendErrorsToDiscord,
  'interval': interval,
}
