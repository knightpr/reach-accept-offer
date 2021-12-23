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
      1: [ctc0],
      4: [ctc0, ctc0],
      5: [ctc0, ctc0, ctc1],
      6: [ctc0, ctc0]
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
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Null;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 0,
    out_tys: [],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v97, time: v96, didSend: v19, from: v95 } = txn1;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v95],
    evt_cnt: 0,
    funcNum: 1,
    lct: v96,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [], secs: v101, time: v100, didSend: v24, from: v99 } = txn2;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v103 = true;
      const v104 = v100;
      
      if (await (async () => {
        
        return v103;})()) {
        sim_r.isHalt = false;
        }
      else {
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
    tys: [ctc2],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v101, time: v100, didSend: v24, from: v99 } = txn2;
  ;
  let v103 = true;
  let v104 = v100;
  
  while (await (async () => {
    
    return v103;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc0],
      timeoutAt: undefined,
      waitIfNotPresent: false
      }));
    const {data: [v117], secs: v119, time: v118, didSend: v41, from: v116 } = txn3;
    ;
    const v122 = stdlib.addressEq(v95, v116);
    stdlib.assert(v122, {
      at: './index.rsh:33:16:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Receiver'
      });
    const v125 = stdlib.protect(ctc1, await interact.verifyAmount(v117), {
      at: './index.rsh:35:62:application',
      fs: ['at ./index.rsh:34:22:application call to [unknown function] (defined at: ./index.rsh:34:26:function exp)'],
      msg: 'verifyAmount',
      who: 'Receiver'
      });
    
    const txn4 = await (ctc.sendrecv({
      args: [v95, v99, v117, v125],
      evt_cnt: 1,
      funcNum: 4,
      lct: v118,
      onlyIf: true,
      out_tys: [ctc1],
      pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        const {data: [v127], secs: v129, time: v128, didSend: v52, from: v126 } = txn4;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const v131 = stdlib.addressEq(v99, v126);
        stdlib.assert(v131, {
          at: './index.rsh:38:18:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Receiver'
          });
        if (v127) {
          sim_r.txns.push({
            amt: v117,
            kind: 'from',
            to: v99,
            tok: undefined
            });
          
          sim_r.isHalt = false;
          }
        else {
          sim_r.txns.push({
            amt: v117,
            kind: 'from',
            to: v95,
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
      tys: [ctc2, ctc2, ctc0, ctc1],
      waitIfNotPresent: false
      }));
    const {data: [v127], secs: v129, time: v128, didSend: v52, from: v126 } = txn4;
    ;
    const v131 = stdlib.addressEq(v99, v126);
    stdlib.assert(v131, {
      at: './index.rsh:38:18:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Receiver'
      });
    if (v127) {
      ;
      const v151 = stdlib.protect(ctc1, await interact.requestMoreAmount(), {
        at: './index.rsh:50:67:application',
        fs: ['at ./index.rsh:49:22:application call to [unknown function] (defined at: ./index.rsh:49:26:function exp)'],
        msg: 'requestMoreAmount',
        who: 'Receiver'
        });
      
      const txn5 = await (ctc.sendrecv({
        args: [v95, v99, v151],
        evt_cnt: 1,
        funcNum: 5,
        lct: v128,
        onlyIf: true,
        out_tys: [ctc1],
        pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn5) => {
          const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
          
          const {data: [v153], secs: v155, time: v154, didSend: v83, from: v152 } = txn5;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const v157 = stdlib.addressEq(v99, v152);
          stdlib.assert(v157, {
            at: './index.rsh:54:18:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Receiver'
            });
          const cv103 = v153;
          const cv104 = v154;
          
          await (async () => {
            const v103 = cv103;
            const v104 = cv104;
            
            if (await (async () => {
              
              return v103;})()) {
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined
                })
              sim_r.isHalt = true;
              }})();
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined,
        tys: [ctc2, ctc2, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [v153], secs: v155, time: v154, didSend: v83, from: v152 } = txn5;
      ;
      const v157 = stdlib.addressEq(v99, v152);
      stdlib.assert(v157, {
        at: './index.rsh:54:18:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Receiver'
        });
      const cv103 = v153;
      const cv104 = v154;
      
      v103 = cv103;
      v104 = cv104;
      
      continue;
      
      }
    else {
      ;
      const v144 = 'Sorry for the contract!';
      stdlib.protect(ctc3, await interact.informClosing(v117, v144), {
        at: './index.rsh:43:39:application',
        fs: ['at ./index.rsh:42:17:application call to [unknown function] (defined at: ./index.rsh:42:41:function exp)'],
        msg: 'informClosing',
        who: 'Receiver'
        });
      
      return;
      }
    
    
    
    }
  return;
  
  
  
  
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
  const ctc3 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:20:12:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [], secs: v97, time: v96, didSend: v19, from: v95 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v97, time: v96, didSend: v19, from: v95 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v101, time: v100, didSend: v24, from: v99 } = txn2;
  ;
  let v103 = true;
  let v104 = v100;
  
  while (await (async () => {
    
    return v103;})()) {
    const v115 = stdlib.protect(ctc0, await interact.getAmount(), {
      at: './index.rsh:31:54:application',
      fs: ['at ./index.rsh:30:20:application call to [unknown function] (defined at: ./index.rsh:30:24:function exp)'],
      msg: 'getAmount',
      who: 'Sender'
      });
    
    const txn3 = await (ctc.sendrecv({
      args: [v95, v99, v115],
      evt_cnt: 1,
      funcNum: 3,
      lct: v104,
      onlyIf: true,
      out_tys: [ctc0],
      pay: [v115, []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        const {data: [v117], secs: v119, time: v118, didSend: v41, from: v116 } = txn3;
        
        sim_r.txns.push({
          amt: v117,
          kind: 'to',
          tok: undefined
          });
        const v122 = stdlib.addressEq(v95, v116);
        stdlib.assert(v122, {
          at: './index.rsh:33:16:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Sender'
          });
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined,
      tys: [ctc3, ctc3, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [v117], secs: v119, time: v118, didSend: v41, from: v116 } = txn3;
    ;
    const v122 = stdlib.addressEq(v95, v116);
    stdlib.assert(v122, {
      at: './index.rsh:33:16:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Sender'
      });
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc1],
      timeoutAt: undefined,
      waitIfNotPresent: false
      }));
    const {data: [v127], secs: v129, time: v128, didSend: v52, from: v126 } = txn4;
    ;
    const v131 = stdlib.addressEq(v99, v126);
    stdlib.assert(v131, {
      at: './index.rsh:38:18:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Sender'
      });
    if (v127) {
      ;
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 5,
        out_tys: [ctc1],
        timeoutAt: undefined,
        waitIfNotPresent: false
        }));
      const {data: [v153], secs: v155, time: v154, didSend: v83, from: v152 } = txn5;
      ;
      const v157 = stdlib.addressEq(v99, v152);
      stdlib.assert(v157, {
        at: './index.rsh:54:18:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Sender'
        });
      const cv103 = v153;
      const cv104 = v154;
      
      v103 = cv103;
      v104 = cv104;
      
      continue;
      
      }
    else {
      ;
      const v141 = 'Sorry for the contract!';
      stdlib.protect(ctc2, await interact.informClosing(v117, v141), {
        at: './index.rsh:43:39:application',
        fs: ['at ./index.rsh:42:17:application call to [unknown function] (defined at: ./index.rsh:42:41:function exp)'],
        msg: 'informClosing',
        who: 'Sender'
        });
      
      return;
      }
    
    
    
    }
  return;
  
  
  
  
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
int 0
==
assert
pop
// "CheckPay"
// "./index.rsh:20:12:dot"
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
// "./index.rsh:20:12:dot"
// "[]"
txn Sender
int 1
bzero
dig 1
extract 0 32
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
bz l2_afterHandler1
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
store 255
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
// "CheckPay"
// "./index.rsh:22:14:dot"
// "[]"
load 255
txn Sender
concat
int 1
itob // bool
substring 7 8
global Round
itob
concat
b loopBody2
l2_afterHandler1:
l3_afterHandler2:
// Handler 3
dup
int 3
==
bz l4_afterHandler3
pop
// check step
int 4
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
extract 32 32
store 254
pop
txna ApplicationArgs 2
dup
len
int 8
==
assert
dup
btoi
store 253
pop
// "CheckPay"
// "./index.rsh:33:16:dot"
// "[]"
load 253
dup
bz l5_checkTxnK
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
l5_checkTxnK:
pop
// Just "sender correct"
// "./index.rsh:33:16:dot"
// "[]"
load 255
txn Sender
==
assert
load 255
load 254
concat
load 253
itob
concat
int 1
bzero
dig 1
extract 0 72
app_global_put
pop
int 5
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l4_afterHandler3:
// Handler 4
dup
int 4
==
bz l6_afterHandler4
pop
// check step
int 5
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
extract 32 32
store 254
dup
int 64
extract_uint64
store 253
pop
txna ApplicationArgs 2
dup
len
int 1
==
assert
dup
btoi
store 252
pop
// "CheckPay"
// "./index.rsh:38:18:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:38:18:dot"
// "[]"
load 254
txn Sender
==
assert
load 252
bz l7_ifF
load 253
dup
bz l8_makeTxnK
itxn_begin
itxn_field Amount
int pay
itxn_field TypeEnum
load 254
itxn_field Receiver
itxn_submit
int 0
l8_makeTxnK:
pop
load 255
load 254
concat
int 1
bzero
dig 1
extract 0 64
app_global_put
pop
int 6
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l7_ifF:
load 253
dup
bz l9_makeTxnK
itxn_begin
itxn_field Amount
int pay
itxn_field TypeEnum
load 255
itxn_field Receiver
itxn_submit
int 0
l9_makeTxnK:
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
l10_makeTxnK:
pop
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l6_afterHandler4:
// Handler 5
dup
int 5
==
bz l11_afterHandler5
pop
// check step
int 6
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
extract 32 32
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
// "./index.rsh:54:18:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:54:18:dot"
// "[]"
load 254
txn Sender
==
assert
load 255
load 254
concat
load 253
itob // bool
substring 7 8
global Round
itob
concat
b loopBody2
l11_afterHandler5:
int 0
assert
loopBody2:
dup
extract 0 1
btoi
store 255
dup
int 1
extract_uint64
store 254
pop
dup
extract 0 32
store 253
dup
extract 32 32
store 252
pop
load 255
bz l12_ifF
load 253
load 252
concat
int 1
bzero
dig 1
extract 0 64
app_global_put
pop
int 4
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l12_ifF:
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
l13_makeTxnK:
pop
txn OnCompletion
int DeleteApplication
==
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
  stateSize: 72,
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
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
                "internalType": "uint256",
                "name": "v117",
                "type": "uint256"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
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
                "name": "v127",
                "type": "bool"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
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
                "name": "v153",
                "type": "bool"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T2",
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
                "name": "v117",
                "type": "uint256"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
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
                "name": "v127",
                "type": "bool"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
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
                "name": "v153",
                "type": "bool"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162000f9338038062000f9383398101604081905262000026916200019c565b600080554360035560408051825181526020808401511515908201527ff6b2f582026eaf8fd1fe583a836da56a1b30b8bd595170ad494773aa9148b06e910160405180910390a16200007b34156007620000cc565b6040805160208082018352338083526001600081905543905583519182015290910160405160208183030381529060405260029080519060200190620000c3929190620000f6565b50505062000244565b81620000f25760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001049062000207565b90600052602060002090601f01602090048101928262000128576000855562000173565b82601f106200014357805160ff191683800117855562000173565b8280016001018555821562000173579182015b828111156200017357825182559160200191906001019062000156565b506200018192915062000185565b5090565b5b8082111562000181576000815560010162000186565b600060408284031215620001af57600080fd5b604080519081016001600160401b0381118282101715620001e057634e487b7160e01b600052604160045260246000fd5b6040528251815260208301518015158114620001fb57600080fd5b60208201529392505050565b600181811c908216806200021c57607f821691505b602082108114156200023e57634e487b7160e01b600052602260045260246000fd5b50919050565b610d3f80620002546000396000f3fe60806040526004361061006e5760003560e01c8063a98bf2231161004b578063a98bf223146100c3578063ab53f2c6146100d6578063ad9fa3d8146100f9578063f4cedab01461010c57005b80631e93b0f1146100775780632c10a1591461009b57806383230757146100ae57005b3661007557005b005b34801561008357600080fd5b506003545b6040519081526020015b60405180910390f35b6100756100a9366004610a86565b61011f565b3480156100ba57600080fd5b50600154610088565b6100756100d1366004610a86565b61029c565b3480156100e257600080fd5b506100eb6104ea565b604051610092929190610aa9565b610075610107366004610a86565b610587565b61007561011a366004610a86565b610730565b61012f60016000541460096108e8565b6101498135158061014257506001548235145b600a6108e8565b60008080556002805461015b90610b06565b80601f016020809104026020016040519081016040528092919081815260200182805461018790610b06565b80156101d45780601f106101a9576101008083540402835291602001916101d4565b820191906000526020600020905b8154815290600101906020018083116101b757829003601f168201915b50505050508060200190518101906101ec9190610b57565b90507f79ca1a789d797004bc78dff9632d64e202e102f2d008dcc20c5a645ef7d4a7d18260405161021d9190610bbf565b60405180910390a1610231341560086108e8565b6040805160808101825260008183018181526060830182905282528251808401909352808352602080840191909152810191909152815181516001600160a01b03909116905280513360209182015280820180516001905251439101526102978161090d565b505050565b6102ac60056000541460116108e8565b6102c6813515806102bf57506001548235145b60126108e8565b6000808055600280546102d890610b06565b80601f016020809104026020016040519081016040528092919081815260200182805461030490610b06565b80156103515780601f1061032657610100808354040283529160200191610351565b820191906000526020600020905b81548152906001019060200180831161033457829003601f168201915b50505050508060200190518101906103699190610be0565b90507ff0ce61bd733256e13049010befa30f7514f9c0015409b84e04039d1ddbde50208260405161039a9190610c71565b60405180910390a16103ae3415600f6108e8565b60208101516103c9906001600160a01b0316331460106108e8565b6103d96040830160208401610c85565b156104925780602001516001600160a01b03166108fc82604001519081150290604051600060405180830381858888f1935050505015801561041f573d6000803e3d6000fd5b506040805180820182526000808252602080830182815285516001600160a01b0390811680865287840151821683526006909455436001558551808401949094529051168285015283518083038501815260609092019093528051919261048c926002929091019061099f565b50505050565b805160408083015190516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156104cf573d6000803e3d6000fd5b50600080805560018190556104e690600290610a23565b5050565b6000606060005460028080546104ff90610b06565b80601f016020809104026020016040519081016040528092919081815260200182805461052b90610b06565b80156105785780601f1061054d57610100808354040283529160200191610578565b820191906000526020600020905b81548152906001019060200180831161055b57829003601f168201915b50505050509050915091509091565b61059760066000541460156108e8565b6105b1813515806105aa57506001548235145b60166108e8565b6000808055600280546105c390610b06565b80601f01602080910402602001604051908101604052809291908181526020018280546105ef90610b06565b801561063c5780601f106106115761010080835404028352916020019161063c565b820191906000526020600020905b81548152906001019060200180831161061f57829003601f168201915b50505050508060200190518101906106549190610ca0565b90507f6400b2d6f9cf1ee77fd1bb0def0e909478fed2c7d6840e4096150c1f483892ac826040516106859190610c71565b60405180910390a1610699341560136108e8565b60208101516106b4906001600160a01b0316331460146108e8565b6040805160808101825260008183018181526060830182905282528251808401845281815260208082019290925281830152835182516001600160a01b039182169052848201518351911690820152909161071491908501908501610c85565b602080830180519215159092529051439101526102978161090d565b610740600460005414600d6108e8565b61075a8135158061075357506001548235145b600e6108e8565b60008080556002805461076c90610b06565b80601f016020809104026020016040519081016040528092919081815260200182805461079890610b06565b80156107e55780601f106107ba576101008083540402835291602001916107e5565b820191906000526020600020905b8154815290600101906020018083116107c857829003601f168201915b50505050508060200190518101906107fd9190610ca0565b6040805184358152602080860135908201529192507fb586755d90ded52ac0645858b09d27f42fbe59c32320b3b1d760dd0397cb5714910160405180910390a161084e34602084013514600b6108e8565b8051610866906001600160a01b03163314600c6108e8565b60408051606080820183526000808352602080840182815284860183815287516001600160a01b0390811680885289850151821684528a850135835260059095554360015587518085019590955291519091168387015251828401528451808303909301835260809091019093528051919261048c926002929091019061099f565b816104e65760405163100960cb60e01b81526004810182905260240160405180910390fd5b6020810151511561098657604080518082018252600080825260208083018281528551516001600160a01b0390811680865287518401518216835260049094554360015585518084019490945290511682850152835180830385018152606090920190935280519192610297926002929091019061099f565b6000808055600181905561099c90600290610a23565b50565b8280546109ab90610b06565b90600052602060002090601f0160209004810192826109cd5760008555610a13565b82601f106109e657805160ff1916838001178555610a13565b82800160010185558215610a13579182015b82811115610a135782518255916020019190600101906109f8565b50610a1f929150610a59565b5090565b508054610a2f90610b06565b6000825580601f10610a3f575050565b601f01602090049060005260206000209081019061099c91905b5b80821115610a1f5760008155600101610a5a565b600060408284031215610a8057600080fd5b50919050565b600060408284031215610a9857600080fd5b610aa28383610a6e565b9392505050565b82815260006020604081840152835180604085015260005b81811015610add57858101830151858201606001528201610ac1565b81811115610aef576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c90821680610b1a57607f821691505b60208210811415610a8057634e487b7160e01b600052602260045260246000fd5b80516001600160a01b0381168114610b5257600080fd5b919050565b600060208284031215610b6957600080fd5b6040516020810181811067ffffffffffffffff82111715610b9a57634e487b7160e01b600052604160045260246000fd5b604052610ba683610b3b565b81529392505050565b80358015158114610b5257600080fd5b8135815260408101610bd360208401610baf565b1515602083015292915050565b600060608284031215610bf257600080fd5b6040516060810181811067ffffffffffffffff82111715610c2357634e487b7160e01b600052604160045260246000fd5b604052610c2f83610b3b565b8152610c3d60208401610b3b565b6020820152604083015160408201528091505092915050565b80358252610c6660208201610baf565b151560208301525050565b60408101610c7f8284610c56565b92915050565b600060208284031215610c9757600080fd5b610aa282610baf565b600060408284031215610cb257600080fd5b6040516040810181811067ffffffffffffffff82111715610ce357634e487b7160e01b600052604160045260246000fd5b604052610cef83610b3b565b8152610cfd60208401610b3b565b6020820152939250505056fea2646970667358221220bc6dd55a2b7907d8fe0527b2360229f6b068a2c9c2ac34d7bd061c7a0eddf98064736f6c63430008090033`,
  BytecodeLen: 3987,
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
