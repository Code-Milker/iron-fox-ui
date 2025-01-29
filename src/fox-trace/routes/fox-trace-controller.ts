/// <reference lib="dom" />

import { ethAddressOrTxHashSchema } from "../../utils/types.ts";

const res = ethAddressOrTxHashSchema.safeParse({});
// console.log({ ethAddressOrTxHashSchema });
