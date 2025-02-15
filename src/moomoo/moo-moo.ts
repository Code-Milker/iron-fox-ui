import { join } from "https://deno.land/std/path/mod.ts";
import { htmlFolderPath, publicFolderPath } from "../types.ts";

export function interpolateFileSync(
  filePath: string,
  vars: Record<string, any>,
): string {
  const template = Deno.readTextFileSync(filePath);

  // Step 1: Clean up unused ${ctx.<any>.<var>} placeholders
  const cleanedTemplate = template.replace(/\$\{ctx\.[^}]+\}/g, (match) => {
    // Extract the path (e.g., "ctx.name" or "ctx.address.city")
    const path = match.slice(2, -1); // Remove "${" and "}"
    const keys = path.split(".").slice(1); // Remove "ctx" and get the nested keys

    // Check if the variable exists in the `vars` object
    const value = keys.reduce((acc, key) => acc?.[key], vars);

    // TODO: Allow users to customize behavior when no value is passed.
    // Options:
    // 1. Throw an error (fail fast).
    // 2. Warn (log a message but continue).
    // 3. Replace with a default value (e.g., "" or "N/A").
    // Example:
    // if (value === undefined) {
    //   throw new Error(`Missing value for placeholder: ${match}`);
    //   // OR
    //   console.warn(`Warning: Missing value for placeholder: ${match}`);
    //   // OR
    //   return "N/A"; // Replace with a default value
    // }

    return value === undefined ? "" : match; // Remove if undefined, keep otherwise
  });

  // Step 2: Interpolate the cleaned template
  try {
    return new Function("ctx", `return \`${cleanedTemplate}\`;`)(vars);
  } catch {
    console.error(`Template: ${template}`);
    return template; // Return original for debugging
  }
}

export function generateRandomId(length = 8): string {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

const id = generateRandomId();
console.log(id);
