import { join } from "https://deno.land/std/path/mod.ts";
import { Router } from "https://deno.land/x/oak/mod.ts";
import {
  createComponent,
  renderComponentMarkdown,
} from "../utils/moomoo/component.ts";
const router = new Router();
router.get("/fox-trace", async (ctx) => {
  const comp = createComponent().addProvider({ l: "asdf" })
    .setState(() => ({
      title: "Trace Your Stolen Funds",
      body:
        `Provide the wallet address or transaction ID associated with the stolen funds to generate a detailed report on where your funds have gone and potential recovery options.`,
      placeholder: "Enter your address or transaction hash",
      buttonText: "trace",
      sum: 0,
      userNumberInput: 1,
      cheese: "gouda",
    }))
    .addActions({
      addSum: (ctx) => {
        return { sum: ctx.state.sum + ctx.state.userNumberInput };
      },
      subtractSum: (ctx) => {
        return { sum: ctx.state.sum - 2 };
      },
      resetSum: (ctx) => {
        return { sum: 0 };
      },
    })
    .addSideEffects({
      logTitle: (ctx) => {
        console.log("Side Effect - Title:", ctx.state.title);
      },
      logSum: (ctx) => {
        console.log("Side Effect - Sum:", ctx.state.sum);
      },
    })
    .setTemplate((ctx) => `
    <div>
      <h1></h1>
      <p>${ctx.state.body}</p>
      <button onclick="${ctx.actions.addSum}">Add</button>
      <button onclick="${ctx.actions.subtractSum}">Subtract</button>
      <button onclick="${ctx.actions.resetSum}">Reset</button>
      <button onclick="${ctx.sideEffects.logSum}">Log Sum</button>
      <p>Current Sum: ${ctx.state.sum}</p>
    </div>
  `).render();
  console.log(comp.template());
  // const markdown = await renderComponentMarkdown(comp);
  // const res = await transpileFromString(JSON.stringify(comp.state));
  // console.log(comp.state);
  // console.log(comp.actions);
  // console.log(comp.template);
  ctx.response.body = `<html> <body>${comp}</body> </html>`;
});

export default router;
// const getPricing = async () => {
//   const pricing = await render(
//     join(Deno.cwd(), "src/partials", "pricing.html"),
//     {},
//     {
//       title: "Pricing",
//       body: ``,
//       extra: "",
//     },
//     "",
//   );
//   const content = await render(
//     join(Deno.cwd(), "src/partials", "content.html"),
//     {},
//     {
//       title: "Pricing",
//       content: pricing,
//     },
//     "",
//   );
//   return content;
// };
// const getFeatures = async () => {
//   const card1 = await render(
//     join(Deno.cwd(), "src/partials", "card.html"),
//     {},
//     {
//       title: "Bot Detection and Analysis",
//       body: `
//     Unveils transaction patterns characteristic of bot activity, identifying automated wallets used by hackers.`,
//       extra: "",
//     },
//     "",
//   );
//
//   const card2 = await render(
//     join(Deno.cwd(), "src/partials", "card.html"),
//     {},
//     {
//       title: "Mixer Decoding",
//       body: `
//     Analyzes mixed transactions to untangle scrambled trails and reveal fund origins.`,
//       extra: "",
//     },
//     "",
//   );
//
//   const card3 = await render(
//     join(Deno.cwd(), "src/partials", "card.html"),
//     {},
//     {
//       title: "Cross-Chain Tracking",
//       body: `
//     Traces assets across multiple chains, providing a seamless view of movements through bridges and swaps.`,
//       extra: "",
//     },
//     "",
//   );
//
//   const card4 = await render(
//     join(Deno.cwd(), "src/partials", "card.html"),
//     {},
//     {
//       title: "Attacker and Cash-Out Database",
//       body: `
//     Leverages a continually updated repository of known attacker wallets and cash-out addresses.`,
//       extra: "",
//     },
//     "",
//   );
//
//   const card5 = await render(
//     join(Deno.cwd(), "src/partials", "card.html"),
//     {},
//     {
//       title: "Recursive Transaction Analysis",
//       body: `
//     Uses advanced algorithms to recursively map transaction histories, identifying the flow of funds even through obfuscation layers.`,
//       extra: "",
//     },
//     "",
//   );
//
//   const card6 = await render(
//     join(Deno.cwd(), "src/partials", "card.html"),
//     {},
//     {
//       title: "Breadth-First Pathfinding",
//       body: `
//     Pinpoints critical nodes in the transaction graph, allowing precise identification of where funds are concentrated or cashed out.`,
//       extra: "",
//     },
//     "",
//   );
//
//   // cards = `${cards[0]}`;
//   const content = await render(
//     join(Deno.cwd(), "src/partials", "content.html"),
//     {},
//     {
//       title: "The Algorithm That Fights Back",
//       content: [card1, card2, card3].map((c) => `<div class="mb-5">${c}</div>`)
//         .join(""),
//     },
//     "",
//   );
//   return content;
// };
// const getProduct = async () => {
//   const button = await render(
//     join(Deno.cwd(), "src/partials", "button.html"),
//     {},
//     {
//       text: "trace",
//     },
//     "",
//   );
//   const input = await render(
//     join(Deno.cwd(), "src/partials", "input.html"),
//     {},
//     {
//       placeholder: "Enter your address or transaction hash",
//       button: button,
//     },
//     "",
//   );
//   const card = await render(
//     join(Deno.cwd(), "src/partials", "card.html"),
//     {},
//     {
//       title: "Trace Your Stolen Funds",
//       body:
//         `Provide the wallet address or transaction ID associated with the stolen funds to generate a detailed report on where your funds have gone and potential recovery options.`,
//       extra: input,
//     },
//     "",
//   );
//
//   const content = await render(
//     join(Deno.cwd(), "src/partials", "content.html"),
//     {},
//     {
//       title: "Fox Trace",
//       content: card,
//     },
//     "",
//   );
//   return content;
// export default router;
// const product = await getProduct();
// const features = await getFeatures();
// const pricing = await getPricing();
// const main = await renderPage(
//   join(Deno.cwd(), "src/partials", "fox-trace.html"),
//   {},
//   {
//     // product,
//     // features,
//     // pricing,
//   },
//   // "",
//   join(Deno.cwd(), "src/routes", "fox-trace-controller.ts"), // Pass the TypeScript file path
// );
