# Edge SDK Backup & Restore

## Requirements
1. SDK A - a used instance with data in the store.
2. SDK B - an unused instance, with an empty store.


## Flow
1. SDK A creates a Backup `jwe`
2. SDK B restores from the `jwe`


## Code Reference
* Create the `jwe` using the Agent function provided.

Example 
```TS
const jwe = await Agent_a.backup.createJWE();
```

* Transfer the `jwe` to another SDK.
* Restore from the `jwe` using the Agent function provided.

Example
```TS
await Agent_b.backup.restore(jwe);
```
