'reach 0.1';

const Common = {
    informClosing: Fun([UInt, Bytes(23)], Null)
}
export const main = Reach.App(() => {
    const Sender = Participant('Sender', {
        getAmount: Fun([], UInt),
        ...Common
        // Specify Sender's interact interface here
    });
    const Receiver = Participant('Receiver', {
        // Specify Receiver's interact interface here
        receivedAmount: Fun([UInt], Null),
        verifyAmount: Fun([UInt], Bool),
        ...Common
    });
    deploy();
    // The first one to publish deploys the contract
    Sender.only(() => {
        const amt = declassify(interact.getAmount());
    });
    Sender.publish(amt).pay(amt);
    commit();

    // The second one to publish always attaches
    Receiver.only(() => {
        const accepted = declassify(interact.verifyAmount(amt)); // in step
    });

    Receiver.publish(accepted);

    if (!accepted) {
        transfer(amt).to(Sender);
        commit();
        each([Sender, Receiver], () => {
            interact.informClosing(amt, 'Sorry for the contract!');
        });
        exit();
    }

    transfer(amt).to(Receiver);// in the consensus step
    commit();


    exit();
});
