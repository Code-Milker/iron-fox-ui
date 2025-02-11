import { join } from "https://deno.land/std/path/mod.ts";
import { createComponent } from "../../moomoo/component.ts";
import { interpolateFileSync } from "../../moomoo/moo-moo.ts";
import { htmlFolderPath } from "../../types.ts";

const getApp = () => {
  const pricingComponent = createComponent("foxTraceApp").addProvider({})
    .setState(() => {
      return { title: "" };
    })
    .addActions({})
    .addSideEffects({})
    .addChildren({})
    .setTemplate((ctx) =>
      `here is the app

`
    ).render()
    .template();
  const content = createComponent("pricingContent").addProvider({})
    .setState(() => {
      return {
        title: "Pricing",
      };
    })
    .addActions({})
    .addSideEffects({})
    .addChildren({ content: () => pricingComponent })
    .setTemplate((ctx) => {
      return interpolateFileSync(
        join(Deno.cwd(), htmlFolderPath, "content.html"),
        ctx,
      );
    }).render().template();
  return content;
};
const getPricing = () => {
  const pricingComponent = createComponent("pricing").addProvider({})
    .setState(() => {
      return { title: "Pricing" };
    })
    .addActions({})
    .addSideEffects({})
    .addChildren({})
    .setTemplate((ctx) => {
      return interpolateFileSync(
        join(Deno.cwd(), htmlFolderPath, "pricing.html"),
        ctx,
      );
    }).render().template();
  const content = createComponent("pricingContent").addProvider({})
    .setState(() => {
      return {
        title: "Pricing",
      };
    })
    .addActions({})
    .addSideEffects({})
    .addChildren({ content: () => pricingComponent })
    .setTemplate((ctx) => {
      return interpolateFileSync(
        join(Deno.cwd(), htmlFolderPath, "content.html"),
        ctx,
      );
    }).render().template();
  return content;
};
const getProduct = () => {
  const button = createComponent("traceButton")
    .addProvider({})
    .setState(() => ({ text: "trace" }))
    .addActions({})
    .addSideEffects({})
    .addChildren({})
    .setTemplate((ctx) =>
      interpolateFileSync(
        join(Deno.cwd(), htmlFolderPath, "button.html"),
        ctx,
      )
    )
    .render()
    .template();

  const input = createComponent("traceInput")
    .addProvider({})
    .setState(() => ({
      placeholder: "Enter your address or transaction hash",
    }))
    .addActions({})
    .addSideEffects({})
    .addChildren({ button: () => button })
    .setTemplate((ctx) =>
      interpolateFileSync(join(Deno.cwd(), htmlFolderPath, "input.html"), ctx)
    )
    .render()
    .template();

  const productCard = createComponent("productCard")
    .addProvider({})
    .setState(() => ({
      title: "Trace Your Stolen Funds",
      body:
        "Provide the wallet address or transaction ID associated with the stolen funds to generate a detailed report on where your funds have gone and potential recovery options.",
    }))
    .addActions({})
    .addSideEffects({})
    .addChildren({ extra: () => input })
    .setTemplate((ctx) =>
      interpolateFileSync(join(Deno.cwd(), htmlFolderPath, "card.html"), ctx)
    )
    .render()
    .template();

  const content = createComponent("productContent")
    .addProvider({})
    .setState(() => ({ title: "Fox Trace" }))
    .addActions({})
    .addSideEffects({})
    .addChildren({ content: () => productCard })
    .setTemplate((ctx) =>
      interpolateFileSync(
        join(Deno.cwd(), htmlFolderPath, "content.html"),
        ctx,
      )
    )
    .render()
    .template();

  return content;
};

const getFeatures = () => {
  const featuresComponent = createComponent("features")
    .addProvider({})
    .setState(() => ({ title: "The Algorithm That Fights Back" }))
    .addActions({})
    .addSideEffects({})
    .addChildren({
      content: () =>
        [
          {
            title: "Bot Detection and Analysis",
            body:
              "Unveils transaction patterns characteristic of bot activity, identifying automated wallets used by hackers.",
          },
          {
            title: "Mixer Decoding",
            body:
              "Analyzes mixed transactions to untangle scrambled trails and reveal fund origins.",
          },
          {
            title: "Cross-Chain Tracking",
            body:
              "Traces assets across multiple chains, providing a seamless view of movements through bridges and swaps.",
          },
          {
            title: "Attacker and Cash-Out Database",
            body:
              "Leverages a continually updated repository of known attacker wallets and cash-out addresses.",
          },
          {
            title: "Recursive Transaction Analysis",
            body:
              "Uses advanced algorithms to recursively map transaction histories, identifying the flow of funds even through obfuscation layers.",
          },
          {
            title: "Breadth-First Pathfinding",
            body:
              "Pinpoints critical nodes in the transaction graph, allowing precise identification of where funds are concentrated or cashed out.",
          },
        ]
          .map(({ title, body }, index) =>
            createComponent("featureCard" + index)
              .addProvider({})
              .setState(() => ({ title, body }))
              .addActions({})
              .addSideEffects({})
              .addChildren({})
              .setTemplate((ctx) =>
                `<div class="mb-5">${
                  interpolateFileSync(
                    join(Deno.cwd(), htmlFolderPath, "card.html"),
                    ctx,
                  )
                }</div>`
              )
              .render()
              .template()
          )
          .join(""), // Convert array to a single string inside the function
    })
    .setTemplate((ctx) =>
      interpolateFileSync(
        join(Deno.cwd(), htmlFolderPath, "content.html"),
        ctx,
      )
    )
    .render()
    .template();

  return featuresComponent;
};
export default { getFeatures, getPricing, getProduct, getApp };
