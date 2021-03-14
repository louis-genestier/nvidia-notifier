import { promises as fs } from 'fs';
import { ICard } from './interfaces/ICard';
import DiscordWebhook from './helpers/discordWebhook';
import getProduct from './helpers/getProduct';
import logger from './helpers/logger';
import config from './config';

(() => {

  const discordWebhook: DiscordWebhook = new DiscordWebhook(config.urlWebhook, 'Monitor');

  setInterval(async () => {
    let file: string = await fs.readFile(`./status.json`, 'utf8');
    let status = JSON.parse(file);

    try {
      const card: ICard = await getProduct(config.url3080);
      logger.info(`Request done: ${card.displayName} has ${card.prdStatus} status`);

      if (!status.ldlc.links[0]) {
        status.ldlc.links.unshift(card.retailers[0].purchaseLink)
      }

      if (status.ldlc.links[0] !== card.retailers[0].purchaseLink || status.ldlc.status !== card.prdStatus ) {
        await discordWebhook.sendSuccessWebhook(card);
        status.ldlc.status = card.prdStatus;
        status.ldlc.links.unshift(card.retailers[0].purchaseLink);
      }

      status.isError = false;

      await fs.writeFile(`./status.json`, Buffer.from(JSON.stringify(status, null, 4)));

    } catch (e) {
      if (!status.isError) {
        if (config.sendErrorsToDiscord) {
          await discordWebhook.sendErrorWebhook(e);
        }
        status.isError = true;
        await fs.writeFile(`./status.json`, Buffer.from(JSON.stringify(status, null, 4)));
      }
      logger.error(e);
    }
  }, config.interval * 1000)
})();
