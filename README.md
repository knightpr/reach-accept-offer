# reach-accept-offer (#algorand #reach )
This is simple reach program to offer amount and accept reject on the Algorand network

There are two participants (Sender and Receiver)
Sender offers some amount to the Receiver and Receiver decides whether to accept or reject!
Based on the action (accept or reject), amount is transferred on the Algorand network.

#Setup
### install reach
```
$ curl https://raw.githubusercontent.com/reach-sh/reach-lang/master/reach -o reach ; chmod +x reach
```
### Compile reach program
```
$ REACH_CONNECTOR_MODE=ALGO  REACH_DEBUG=0 ./reach compile
```
### Run client program
```
$ REACH_CONNECTOR_MODE=ALGO  REACH_DEBUG=0 ./reach run
```


