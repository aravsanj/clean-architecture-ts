import { Server } from "./presentation/Server";

export async function main(): Promise<void> {
  await Server.run(3000);
}

main();