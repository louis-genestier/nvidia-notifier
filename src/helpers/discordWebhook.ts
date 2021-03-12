import {ICard} from "../interfaces/ICard";
import fetch from "node-fetch";

class DiscordWebhook {

  url: string;
  username: string;
  options: object = {
    headers: {
      'Content-type': 'application/json',
    },
    method: 'POST',
  };

  constructor(url: string, username: string) {
    this.url = url;
    this.username = username;
  }

  async sendSuccessWebhook(card: ICard): Promise<void> {
    const body = {
      "username": `${this.username}`,
      "embeds": [
        {
          "author": {
            "name": "NVIDIA",
            "icon_url": "https://upload.wikimedia.org/wikipedia/fr/thumb/4/47/Nvidia_%28logo%29.svg/1200px-Nvidia_%28logo%29.svg.png"
          },
          "title": "NVIDIA GEFORCE 3080 FOUNDERS EDITION",
          "color": 1434943,
          "description": "Product status/link has changed !",
          "timestamp": new Date(),
          "fields": [
            {
              "name": "Price",
              "value": `${card.productPrice}`,
              "inline": true,
            },
            {
              "name": "Status",
              "value": `${card.prdStatus}`,
              "inline": true
            },
            {
              "name": "Stock",
              "value": `${card.retailers[0].stock}`,
              "inline": true
            },
            {
              "name": "Link",
              "value": `${card.retailers[0].purchaseLink}`,
            },
            {
              "name": "Direct link",
              "value": `${card.retailers[0].directPurchaseLink}`,
            }
          ]
        }
      ]
    };

    await this.sendWebhook({ ...this.options, body: JSON.stringify(body) });
  }

  async sendErrorWebhook(e: Error): Promise<void> {
    const body = {
      "username": `${this.username}`,
      "embeds": [
        {
          "author": {
            "name": "NVIDIA",
            "icon_url": "https://upload.wikimedia.org/wikipedia/fr/thumb/4/47/Nvidia_%28logo%29.svg/1200px-Nvidia_%28logo%29.svg.png"
          },
          "title": "NVIDIA GEFORCE 3080 FOUNDERS EDITION",
          "color": 15013141,
          "description": "Error while monitoring !",
          "timestamp": new Date(),
          "fields": [
            {
              "name": "Error",
              "value": e.message,
            }
          ]
        }
      ]
    }

    await this.sendWebhook({ ...this.options, body: JSON.stringify(body) });
  }


  private async sendWebhook(options: object): Promise<void> {
    await fetch(this.url, options);
  }
}

export default DiscordWebhook;
