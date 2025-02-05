/// <reference lib="dom" />

import { createComponent } from "../../moomoo/component.ts";
import { generatePage } from "../../moomoo/page.ts";
import { ethAddressOrTxHashSchema } from "../../types.ts";
import foxTrace from "./fox-trace.ts";
import { Router } from "https://deno.land/x/oak/mod.ts";
const res = ethAddressOrTxHashSchema.safeParse({});
// console.log({ ethAddressOrTxHashSchema });
//
const router = new Router();
router.get("/fox-trace", async (ctx) => {
  const page = createComponent("foxTrace").addProvider({ l: "asdf" })
    .setState(() => ({
      title: "Trace Your Stolen Funds",
      body:
        `Provide the wallet address or transaction ID associated with the stolen funds to generate a detailed report on where your funds have gone and potential recovery options.`,
      placeholder: "Enter your address or transaction hash",
      buttonText: "trace",
    }))
    .addActions({})
    .addSideEffects({}).addChildren({
      pricing: (ctx) => {
        return foxTrace.getPricing();
      },
      product: (ctx) => {
        return foxTrace.getProduct();
      },
      features: (ctx) => {
        return foxTrace.getFeatures();
      },
      getApp: (ctx) => {
        return foxTrace.getApp();
      },
    })
    .setTemplate((ctx) => {
      return `<div>
  <h1></h1>
  ${ctx.children.product} ${ctx.children.features} ${ctx.children.pricing}
</div>`;
    }).render();
  console.log({ p: page.template() });
  const p = await generatePage(page.template(), {
    z: "https://cdn.jsdelivr.net/npm/zod@3.21.4/+esm",
  });
  ctx.response.body = p;
});
export default router;
