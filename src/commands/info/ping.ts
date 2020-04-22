import { Client, Command, RunArgumentsOptions } from '../../util'
import { PermissionString } from 'discord.js';

export default class PingCommand extends Command {
  constructor(client: Client) {
    super(client, {
      requiredPermissions: ["BAN_MEMBERS"]
    });
  }

  public main({ msg }: RunArgumentsOptions) {
    msg.send(`Pong! ${msg.createdTimestamp - Date.now()}ms`);
  }
}