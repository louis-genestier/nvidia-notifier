# Nvidia Notifier  

Receive notification on Discord when a Founder Edition card is set as available on the Nvidia website. 
(Only working for 3080 for now)  

## Installation  
Install all the dependencies
```bash
npm i 
```

Copy `.env.dst` and rename it to `.env`
```bash
cp .env.dist .env
```

Open `.env` and set the variables
```bash
## Discord webhook url
URL_DISCORD=https://discord.com/api/webhooks/XXXXXXXX/XXXXX
## Send error to discord (1 or 0)
SEND_ERRORS_TO_DISCORD=1
## Set interval in seconds between each request
INTERVAL=5
```

Compile the project and run it !
```bash
npm run start
node build/index.js 
```

Logs are stocked in `logs.txt`
