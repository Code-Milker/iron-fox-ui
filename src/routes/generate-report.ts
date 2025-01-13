import { Router } from "https://deno.land/x/oak/mod.ts";
import { ethAddressOrTxHashSchema } from "../utils/types.ts";
const router = new Router();
router.post("/generate-report", async (ctx) => {
  const payload = await ctx.request.body.json();
});

export default router;
