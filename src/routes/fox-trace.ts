import { join } from "https://deno.land/std/path/mod.ts";
import { Router } from "https://deno.land/x/oak/mod.ts";
import { render, renderPage } from "../utils/moo-moo.ts";
const router = new Router();
router.get("/fox-trace", async (ctx) => {
  const product = await getProduct();
  const features = await getFeatures();
  const main = await renderPage(
    join(Deno.cwd(), "src/partials", "fox-trace.html"),
    {},
    { product, features },
    "", // Pass the TypeScript file path
  );
  ctx.response.body = main;
});

const getPricing = async () => {
  const card = await render(
    join(Deno.cwd(), "src/partials", "card.html"),
    {},
    {
      title: "Bot Detection and Analysis",
      body: `
    Unveils transaction patterns characteristic of bot activity, identifying automated wallets used by hackers.`,
      extra: "",
    },
    "",
  );

  const content = await render(
    join(Deno.cwd(), "src/partials", "content.html"),
    {},
    {
      title: "The Algorithm That Fights Back",
      card: card,
    },
    "",
  );
  return content;
};

const getFeatures = async () => {
  const card = await render(
    join(Deno.cwd(), "src/partials", "card.html"),
    {},
    {
      title: "Bot Detection and Analysis",
      body: `
    Unveils transaction patterns characteristic of bot activity, identifying automated wallets used by hackers.`,
      extra: "",
    },
    "",
  );

  const content = await render(
    join(Deno.cwd(), "src/partials", "content.html"),
    {},
    {
      title: "The Algorithm That Fights Back",
      card: card,
    },
    "",
  );
  return content;
};
const getProduct = async () => {
  const button = await render(
    join(Deno.cwd(), "src/partials", "button.html"),
    {},
    {
      text: "trace",
    },
    "",
  );
  const input = await render(
    join(Deno.cwd(), "src/partials", "input.html"),
    {},
    {
      placeholder: "Enter your address or transaction hash",
      button: button,
    },
    "",
  );
  const card = await render(
    join(Deno.cwd(), "src/partials", "card.html"),
    {},
    {
      title: "Trace Your Stolen Funds",
      body:
        `Provide the wallet address or transaction ID associated with the stolen funds to generate a detailed report on where your funds have gone and potential recovery options.`,
      extra: input,
    },
    "",
  );

  const content = await render(
    join(Deno.cwd(), "src/partials", "content.html"),
    {},
    {
      title: "Fox Trace",
      card: card,
    },
    "",
  );
  return content;
};
export default router;
