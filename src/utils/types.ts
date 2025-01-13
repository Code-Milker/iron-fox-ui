import { z } from "https://deno.land/x/zod@v3.21.4/mod.ts";

// Common regex for validating hexadecimal strings
const hexRegex = /^0x[a-fA-F0-9]+$/;

// Ethereum Address Schema
const ethAddressSchema = z
  .string()
  .length(42, "Ethereum address must be 42 characters long (including 0x)")
  .regex(hexRegex, "Ethereum address must be a valid hexadecimal string");

const txHashSchema = z
  .string()
  .length(66, "Transaction hash must be 66 characters long (including 0x)")
  .regex(hexRegex, "Transaction hash must be a valid hexadecimal string");

export const ethAddressOrTxHashSchema = z.union([
  ethAddressSchema,
  txHashSchema,
]);
