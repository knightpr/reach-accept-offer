import {loadStdlib} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
import { ask, yesno, done } from '@reach-sh/stdlib/ask.mjs';
const stdlib = loadStdlib(process.env);

(async () => {
    const startingBalance = stdlib.parseCurrency(100);

    const [ accAlice, accBob ] =
        await stdlib.newTestAccounts(2, startingBalance);
    console.log('Hello, Sender and Receiver!');

    console.log('Launching...');
    const fmt = (x) => stdlib.formatCurrency(x, 4);
    const getBalance = async (who) => fmt(await stdlib.balanceOf(who));
    const ctcAlice = accAlice.contract(backend);
    const ctcBob = accBob.contract(backend, ctcAlice.getInfo());

    const beforeAlice = await getBalance(accAlice);
    const beforeBob = await getBalance(accBob);

    console.log("Sender balance",beforeAlice);
    console.log("Receiver balance",beforeBob);

    console.log('Starting backends...');
    const Common ={
        informClosing:async (amt,info)=>{
            console.log("Closing app!."+info);
            const finalAlice = await getBalance(accAlice);
            const finalBob = await getBalance(accBob);
            console.log("Final Sender balance",finalAlice);
            console.log("Final Receiver balance",finalBob);
            // process.exit();
        }
    };
    await Promise.all([
        backend.Sender(ctcAlice, {
            ...stdlib.hasRandom,
            ...Common,
            getAmount:async ()=>{
                const amt = await ask(
                    `How much do you want to give?`,
                    stdlib.parseCurrency
                );
                return amt;
            }
            // implement Sender's interact object here
        }),
        backend.Receiver(ctcBob, {
            ...stdlib.hasRandom,
            ...Common,
            receivedAmount: (amt) =>{
                console.log("Received amount is: "+amt);
            },
            verifyAmount:async (amt) =>{
                const accepted = await ask(
                    `Do you accept the amount of ${fmt(amt)}?`,
                    yesno
                );
                return accepted;
            }
            // implement Receiver's interact object here
        }),
    ]);
    const afterAlice = await getBalance(accAlice);
    const afterBob = await getBalance(accBob);
    console.log("After, Sender balance",afterAlice);
    console.log("After, Receiver balance",afterBob);
    console.log('Goodbye, Sender and Receiver!');
})();
