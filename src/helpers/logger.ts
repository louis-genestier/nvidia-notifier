import {ILogObject, Logger} from 'tslog';
import { promises as fs } from 'fs';

const logToTransport = async (logObject: ILogObject) => {
  await fs.appendFile('logs.txt', JSON.stringify(logObject) + "\n");
}

const logger: Logger = new Logger();

logger.attachTransport(
    {
      silly: logToTransport,
      debug: logToTransport,
      trace: logToTransport,
      info: logToTransport,
      warn: logToTransport,
      error: logToTransport,
      fatal: logToTransport,
    },
    'debug',
)

export default logger;
