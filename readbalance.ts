import * as Web3 from '@solana/web3.js';
import base58 from 'bs58'

async function main() {
    const decoded = base58.decode('3rrLXHNFNHU2fb2agLYBkyAuWcfzvPcnsBWnXzAUyLUPQNX7YhtLYuiw2u3qTf2zXMpokoqLkiTdUor5K7SNgiU9')
    const keyPair = Web3.Keypair.fromSecretKey(decoded)

    const publicKeyFrom = new Web3.PublicKey('GdDp3mRUjXz4nWtQ8EshpeRxK1aguofbqeymLcqWL77w');
    const publicKeyTo = new Web3.PublicKey('3gv8mQufpR4ZXzxW3VkmcGjT2pHRhKv5P4ETiFzp1wZk');

    const instruction = Web3.SystemProgram.transfer({
        fromPubkey: publicKeyFrom,
        toPubkey: publicKeyTo,
        lamports: 1,
    });
    const transaction = new Web3.Transaction();
    transaction.add(instruction);

    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))
    const txSignature = await Web3.sendAndConfirmTransaction(connection, transaction, [keyPair]);

    console.log('txHash', txSignature)
}

main();