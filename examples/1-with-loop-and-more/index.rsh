'reach 0.1';

const Common = {
    informClosing: Fun([UInt, Bytes(23)], Null)
}
export const main = Reach.App(() => {
    const Sender = Participant('Sender', {
        getAmount: Fun([], UInt),
        ...Common,
        // Specify Sender's interact interface here
    });
    const Receiver = Participant('Receiver', {
        // Specify Receiver's interact interface here
        receivedAmount: Fun([UInt], Null),
        verifyAmount: Fun([UInt], Bool),
        requestMoreAmount:Fun([],Bool),
        ...Common
    });
    deploy();
    Sender.publish();
    commit();
    Receiver.publish();
    // The second one to publish always attaches
    var more = true;
    invariant( balance() == 0);

    while(more) {
        commit();
        // The first one to publish deploys the contract
        Sender.only(() => {
            const amt = declassify(interact.getAmount());
        });
        Sender.publish(amt).pay(amt);
        Receiver.only(() => {
            const accepted = declassify(interact.verifyAmount(amt)); // in step
        });
        commit();
        Receiver.publish(accepted);
        if (!accepted) {
            transfer(amt).to(Sender);
            commit();
            each([Sender, Receiver], () => {
                interact.informClosing(amt, 'Sorry for the contract!');
            });
            exit();
        }else{
            transfer(amt).to(Receiver);
        }
        Receiver.only(() => {
            const needMore = declassify(interact.requestMoreAmount());

        });
        commit();
        Receiver.publish(needMore);
        more = needMore;
        continue;
    }
    commit();


    exit();
});
