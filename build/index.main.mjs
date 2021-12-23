// Automatically generated with Reach 0.1.7 (d2352c9e)
/* eslint-disable */
export const _version = '0.1.7';
export const _versionHash = '0.1.7 (d2352c9e)';
export const _backendVersion = 6;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Receiver(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Receiver expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Receiver expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc0],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v64], secs: v66, time: v65, didSend: v25, from: v63 } = txn1;
  ;
  const v71 = stdlib.protect(ctc1, await interact.verifyAmount(v64), {
    at: './index.rsh:28:58:application',
    fs: ['at ./index.rsh:27:18:application call to [unknown function] (defined at: ./index.rsh:27:22:function exp)'],
    msg: 'verifyAmount',
    who: 'Receiver'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v63, v64, v71],
    evt_cnt: 1,
    funcNum: 1,
    lct: v65,
    onlyIf: true,
    out_tys: [ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [v73], secs: v75, time: v74, didSend: v35, from: v72 } = txn2;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      if (v73) {
        sim_r.txns.push({
          amt: v64,
          kind: 'from',
          to: v72,
          tok: undefined
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined
          })
        sim_r.isHalt = true;
        }
      else {
        sim_r.txns.push({
          amt: v64,
          kind: 'from',
          to: v63,
          tok: undefined
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc3, ctc0, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v73], secs: v75, time: v74, didSend: v35, from: v72 } = txn2;
  ;
  if (v73) {
    ;
    return;
    }
  else {
    ;
    const v89 = 'Sorry for the contract!';
    stdlib.protect(ctc2, await interact.informClosing(v64, v89), {
      at: './index.rsh:37:35:application',
      fs: ['at ./index.rsh:36:13:application call to [unknown function] (defined at: ./index.rsh:36:37:function exp)'],
      msg: 'informClosing',
      who: 'Receiver'
      });
    
    return;
    }
  
  
  
  };
export async function Sender(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Sender expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Sender expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Null;
  
  
  const v62 = stdlib.protect(ctc0, await interact.getAmount(), {
    at: './index.rsh:21:50:application',
    fs: ['at ./index.rsh:20:16:application call to [unknown function] (defined at: ./index.rsh:20:20:function exp)'],
    msg: 'getAmount',
    who: 'Sender'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v62],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:23:12:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v62, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [v64], secs: v66, time: v65, didSend: v25, from: v63 } = txn1;
      
      sim_r.txns.push({
        amt: v64,
        kind: 'to',
        tok: undefined
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v64], secs: v66, time: v65, didSend: v25, from: v63 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc1],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v73], secs: v75, time: v74, didSend: v35, from: v72 } = txn2;
  ;
  if (v73) {
    ;
    return;
    }
  else {
    ;
    const v86 = 'Sorry for the contract!';
    stdlib.protect(ctc2, await interact.informClosing(v64, v86), {
      at: './index.rsh:37:35:application',
      fs: ['at ./index.rsh:36:13:application call to [unknown function] (defined at: ./index.rsh:36:37:function exp)'],
      msg: 'informClosing',
      who: 'Sender'
      });
    
    return;
    }
  
  
  
  };
const _ALGO = {
  appApproval: `#pragma version 5
txn RekeyTo
global ZeroAddress
==
assert
txn Lease
global ZeroAddress
==
assert
int 0
store 0
txn ApplicationID
bz alloc
byte base64()
app_global_get
dup
int 0
extract_uint64
store 1
int 8
extract_uint64
store 2
txn NumAppArgs
int 3
==
assert
txna ApplicationArgs 0
btoi
preamble:
// Handler 0
dup
int 0
==
bz l0_afterHandler0
pop
// check step
int 0
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
byte base64()
pop
txna ApplicationArgs 2
dup
len
int 8
==
assert
dup
btoi
store 255
pop
// "CheckPay"
// "./index.rsh:23:12:dot"
// "[]"
int 100000
dup
bz l1_checkTxnK
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
global CurrentApplicationAddress
dig 1
gtxns Receiver
==
assert
l1_checkTxnK:
pop
// "CheckPay"
// "./index.rsh:23:12:dot"
// "[]"
load 255
dup
bz l2_checkTxnK
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
global CurrentApplicationAddress
dig 1
gtxns Receiver
==
assert
l2_checkTxnK:
pop
txn Sender
load 255
itob
concat
int 1
bzero
dig 1
extract 0 40
app_global_put
pop
int 1
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l0_afterHandler0:
// Handler 1
dup
int 1
==
bz l3_afterHandler1
pop
// check step
int 1
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
dup
extract 0 32
store 255
dup
int 32
extract_uint64
store 254
pop
txna ApplicationArgs 2
dup
len
int 1
==
assert
dup
btoi
store 253
pop
// "CheckPay"
// "./index.rsh:31:14:dot"
// "[]"
load 253
bz l4_ifF
load 254
dup
bz l5_makeTxnK
itxn_begin
itxn_field Amount
int pay
itxn_field TypeEnum
txn Sender
itxn_field Receiver
itxn_submit
int 0
l5_makeTxnK:
pop
int 0
itxn_begin
itxn_field Amount
int pay
itxn_field TypeEnum
global CreatorAddress
itxn_field CloseRemainderTo
global CurrentApplicationAddress
itxn_field Receiver
itxn_submit
int 0
l6_makeTxnK:
pop
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l4_ifF:
load 254
dup
bz l7_makeTxnK
itxn_begin
itxn_field Amount
int pay
itxn_field TypeEnum
load 255
itxn_field Receiver
itxn_submit
int 0
l7_makeTxnK:
pop
int 0
itxn_begin
itxn_field Amount
int pay
itxn_field TypeEnum
global CreatorAddress
itxn_field CloseRemainderTo
global CurrentApplicationAddress
itxn_field Receiver
itxn_submit
int 0
l8_makeTxnK:
pop
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l3_afterHandler1:
int 0
assert
updateState:
byte base64()
load 1
itob
load 2
itob
concat
app_global_put
checkSize:
load 0
dup
dup
int 1
+
global GroupSize
==
assert
txn GroupIndex
==
assert
int 1000
*
txn Fee
<=
assert
done:
int 1
return
alloc:
txn OnCompletion
int NoOp
==
assert
int 0
store 1
int 0
store 2
b updateState
`,
  appClear: `#pragma version 5
int 0
`,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 40,
  unsupported: [],
  version: 6
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v64",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v64",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v73",
                "type": "bool"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v73",
                "type": "bool"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516107b13803806107b1833981016040819052610022916101a0565b6000805543600355604080518251815260208084015151908201527fd2fa1fac07e66d08cb46271d2f3a2585d9761d2d591a51cc30a2056942bc38db910160405180910390a160208101515161007b90341460076100de565b6040805180820182526000602080830182815233808552868301515182526001938490554390935584518083019390935251828501528351808303850181526060909201909352805191926100d69260029290910190610107565b505050610279565b816101035760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546101139061023e565b90600052602060002090601f016020900481019282610135576000855561017b565b82601f1061014e57805160ff191683800117855561017b565b8280016001018555821561017b579182015b8281111561017b578251825591602001919060010190610160565b5061018792915061018b565b5090565b5b80821115610187576000815560010161018c565b60008183036040808212156101b457600080fd5b80518082016001600160401b0380821183831017156101e357634e487b7160e01b600052604160045260246000fd5b818452865183526020601f19860112156101fc57600080fd5b83519450602085019150848210818311171561022857634e487b7160e01b600052604160045260246000fd5b5090915260209384015182529283015250919050565b600181811c9082168061025257607f821691505b6020821081141561027357634e487b7160e01b600052602260045260246000fd5b50919050565b610529806102886000396000f3fe6080604052600436106100405760003560e01c80631e93b0f114610049578063832307571461006d5780639a3e391214610082578063ab53f2c61461009557005b3661004757005b005b34801561005557600080fd5b506003545b6040519081526020015b60405180910390f35b34801561007957600080fd5b5060015461005a565b61004761009036600461037f565b6100b8565b3480156100a157600080fd5b506100aa610267565b604051610064929190610397565b6100c86001600054146009610304565b6100e2813515806100db57506001548235145b600a610304565b6000808055600280546100f4906103f4565b80601f0160208091040260200160405190810160405280929190818152602001828054610120906103f4565b801561016d5780601f106101425761010080835404028352916020019161016d565b820191906000526020600020905b81548152906001019060200180831161015057829003601f168201915b50505050508060200190518101906101859190610429565b90507fc2181c40b1b03253329d7cd30c0cb2b8c24f7c72d3e1bae33dca44e26dcbc021826040516101b691906104b0565b60405180910390a16101ca34156008610304565b6101da60408301602084016104d1565b1561022a576020810151604051339180156108fc02916000818181858888f1935050505015801561020f573d6000803e3d6000fd5b506000808055600181905561022690600290610329565b5050565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561020f573d6000803e3d6000fd5b60006060600054600280805461027c906103f4565b80601f01602080910402602001604051908101604052809291908181526020018280546102a8906103f4565b80156102f55780601f106102ca576101008083540402835291602001916102f5565b820191906000526020600020905b8154815290600101906020018083116102d857829003601f168201915b50505050509050915091509091565b816102265760405163100960cb60e01b81526004810182905260240160405180910390fd5b508054610335906103f4565b6000825580601f10610345575050565b601f0160209004906000526020600020908101906103639190610366565b50565b5b8082111561037b5760008155600101610367565b5090565b60006040828403121561039157600080fd5b50919050565b82815260006020604081840152835180604085015260005b818110156103cb578581018301518582016060015282016103af565b818111156103dd576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061040857607f821691505b6020821081141561039157634e487b7160e01b600052602260045260246000fd5b60006040828403121561043b57600080fd5b6040516040810181811067ffffffffffffffff8211171561046c57634e487b7160e01b600052604160045260246000fd5b60405282516001600160a01b038116811461048657600080fd5b81526020928301519281019290925250919050565b803580151581146104ab57600080fd5b919050565b81358152604081016104c46020840161049b565b1515602083015292915050565b6000602082840312156104e357600080fd5b6104ec8261049b565b939250505056fea264697066735822122077e074c5d099052cba355ffdfe1df8138eea683c5d0ff38251880b362f1f3ba064736f6c63430008090033`,
  BytecodeLen: 1969,
  Which: `oD`,
  version: 5,
  views: {
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Receiver": Receiver,
  "Sender": Sender
  };
export const _APIs = {
  };
