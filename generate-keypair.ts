import { addKeypairToEnvFile } from "@solana-developers/helpers";
import { Keypair } from "@solana/web3.js";
const keypair = Keypair.generate();

addKeypairToEnvFile(keypair, "SECRET");

console.log(`The public key is: `, keypair.publicKey.toBase58());
console.log(`The secret key is: `, keypair.secretKey);
console.log(`✅ Finished!`);
