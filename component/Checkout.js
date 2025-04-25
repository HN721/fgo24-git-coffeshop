import { input } from "@inquirer/prompts";

async function checkout() {
  const answer = await input({ message: `Apakah Kamu Yakin? (Y/N):` });
}
