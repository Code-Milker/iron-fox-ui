/// <reference lib="dom" />
import { z } from "https://cdn.jsdelivr.net/npm/zod@3.21.4/+esm";

// Ethereum Address Schema
export const ethAddressSchema = z
  .string()
  .length(42, "Ethereum address must be 42 characters long (including 0x)")
  .regex(
    /^0x[a-fA-F0-9]+$/,
    "Ethereum address must be a valid hexadecimal string",
  );

export const txHashSchema = z
  .string()
  .length(66, "Transaction hash must be 66 characters long (including 0x)")
  .regex(
    /^0x[a-fA-F0-9]+$/,
    "Transaction hash must be a valid hexadecimal string",
  );

// export const ethAddressOrTxHashSchema = z.union([
//   ethAddressSchema,
//   txHashSchema,
// ]);

export const htmlFolderPath = "html/";
export const publicFolderPath = "public/";
