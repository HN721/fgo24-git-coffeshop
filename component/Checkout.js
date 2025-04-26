import { input } from "@inquirer/prompts";
import keranjang from "./Cartdata.js";

export default async function checkout() {
  const nama = await input({ message: `Masukan Nama Anda` });
  const email = await input({ message: `Masukan Email Anda` });
  console.log("Pesanan Anda:");
  keranjang.forEach((item, index) =>
    console.log(`${index + 1}. ${item.nama} dengan harga: ${item.harga}`)
  );

  const pay = await input({ message: `Apakah Sesuai ? Y/N` });
  if (pay === "y") {
    console.log(`----------Invoice---------- `);
    console.log(`Nama: ${nama}`);
    console.log(`Email: ${email}`);
    keranjang.forEach((item, index) =>
      console.log(`Pesanan kamu: ${item.nama} Rp.${item.harga}`)
    );
  }
}
