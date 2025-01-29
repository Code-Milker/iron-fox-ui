/// <reference lib="dom" />

import { ethAddressOrTxHashSchema } from "../../types.ts";

const res = ethAddressOrTxHashSchema.safeParse({});
// console.log({ ethAddressOrTxHashSchema });
