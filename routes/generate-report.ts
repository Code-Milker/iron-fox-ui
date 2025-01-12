import { Router } from "https://deno.land/x/oak/mod.ts";

const router = new Router();

router.post("/generate-report", async (ctx) => {
  // try {
    // Parse the JSON body
    console.log('start')
    console.log(ctx.request.body)
    console.log(await ctx.request.body.json())

    console.log('finish')
  //   const body = await ctx.request.body().value;
  //
  //   // Extract the transactionHash
  //   const { transactionHash } = body;
  //
  //   if (!transactionHash) {
  //     ctx.response.status = 400;
  //     ctx.response.body = { error: "Transaction hash is required" };
  //     return;
  //   }
  //
  //   console.log("Transaction Hash received:", transactionHash);
  //
  //   // Simulate report generation
  //   const report = {
  //     status: "success",
  //     message: `Report generated for transaction hash ${transactionHash}`,
  //     details: {
  //       transactionHash,
  //       generatedAt: new Date().toISOString(),
  //     },
  //   };
  //
  //   ctx.response.status = 200;
  //   ctx.response.body = report;
  // } catch (error) {
  //   console.error("Error handling request:", error);
  //   ctx.response.status = 500;
  //   ctx.response.body = { error: "Internal Server Error" };
  // }
});

export default router;
