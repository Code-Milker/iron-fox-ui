import { join } from "https://deno.land/std@0.224.0/path/join.ts";
import { createComponent } from "../../moomoo/component.ts";
import { renderTemplateWithContext } from "../../moomoo/moo-moo.ts";
import { generatePage } from "../../moomoo/page.ts";
import { ethAddressSchema, htmlFolderPath } from "../../types.ts";
import { Router } from "https://deno.land/x/oak/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";
import {
  fetchTransferOuts,
  formatAmount,
  formatDateTime,
  shortenHash,
  tokenAmount,
  weiToEther,
} from "../../utils.ts";
const html = String.raw;
const router = new Router();

router.get("/fox-trace-app", async (ctx) => {
  // get data and run validations
  const searchParams = ctx.request.url.searchParams;
  let address = await ethAddressSchema.safeParse(
    searchParams.get("publicAddress"),
  );
  // const txnHash = await txHashSchema.safeParse(searchParams.get("txnHash"));
  // determine flow
  const authroizedUser = true;
  if (!address.success && authroizedUser) {
    throw "invalid address";
  }
  address = address.data;
  // 1. great we have their address, lets display their transactions
  // in any easy format for them to be able to read and have them
  // select the transactions they were attacked by.

  const selectChain = createComponent()
    .addProvider({})
    .setState(() => ({
      address: address.data,
      title: "Step 1: Chain select",
      body: "Select the chain your funds were taken on",
      selectedChain: "1",
    }))
    .addActions({})
    .addSideEffects({})
    .addChildren({
      extra: () => {
        return html`
<div class="w-full my-10">
  <div class="mx-auto max-w-[600px] flex justify-center border rounded border-iron-fox-dark-gray pr-3">
    <select
      id="chain-id-select"
      class="w-full text-center px-6 py-3 rounded-l-md bg-iron-fox text-iron-fox-cyan border-iron-fox-dark-gray focus:outline-none font-thin caret-black cursor-pointer"
    >
      <option value="1">Ethereum (Mainnet)</option>
      <option value="56">Binance Smart Chain</option>
      <option value="137">Polygon</option>
      <option value="43114">Avalanche</option>
      <!-- Add additional chain options as needed -->
    </select>
  </div>
</div>
`;
      },
    })
    .setTemplate((ctx) =>
      `<div class="mt-10">${
        renderTemplateWithContext(
          join(Deno.cwd(), htmlFolderPath, "card.html"),
          ctx,
        )
      }</div>`
    )
    .build().render();

  // Helper: fetch transactions from Etherscan

  // Now load environment variables
  const env = config();
  const apiKey = env.ETHERSCAN_API_KEY;
  // Fetch the transactions on the server
  const txs = await fetchTransferOuts(address, apiKey);

  // Build the table component with state pre-populated with transactions
  const table = createComponent("table")
    .addProvider({})
    .setState(() => ({
      selectedTransactions: [] as string[],
      justSelectedTransaction: "",
      justUnselectedTransaction: "",
    }))
    .addActions({
      toggleTransaction: (ctx, hash: string) => {
        if (ctx.state.selectedTransactions.includes(hash)) {
          return {
            selectedTransactions: ctx.state.selectedTransactions.filter((h) =>
              h !== hash
            ),
          };
        } else {
          return {
            selectedTransactions: [
              ...ctx.state.selectedTransactions,
              hash,
            ],
          };
        }
      },
    })
    .addSideEffects({
      log: (ctx) => {
        console.log(ctx.state);
      },
    })
    .addChildren({})
    .setTemplate(
      (ctx) => {
        return html`
<button onclick="${ctx.sideEffects.log()}">hey</button>
      <table class="w-full min-w-full">
        <thead>
          <tr class="text-left text-sm font-medium text-iron-fox-cyan">
            <th class="py-2 flex justify-start">
            </th>
            <th class="py-2">Transaction Hash</th>
            <th class="py-2">Token</th>
            <th class="py-2">Amount</th>
            <th class="py-2">Date</th>
            <th class="py-2">From</th>
            <th class="py-2">To</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-iron-fox-dark-gray">
          ${
          txs
            .map((tx: any) => {
              const isERC20 = !!tx.tokenSymbol;
              const token = isERC20 ? tx.tokenSymbol : "ETH";
              const amount = isERC20 ? tokenAmount(tx) : weiToEther(tx.value);
              return `
          <tr class="hover:bg-iron-fox-light-gray cursor-pointer">
            <td class=" py-2">
              <input type="checkbox" class="form-checkbox" onclick="${
                ctx.actions.toggleTransaction(tx.hash)
              }"/>
            </td>
            <td class="px-4 py-2 text-sm text-iron-fox-dark-gray">${
                shortenHash(tx.hash)
              }</td>
            <td class="px-4 py-2 text-sm text-iron-fox-dark-gray text-center">${token}</td>
            <td class="px-4 py-2 text-sm text-iron-fox-dark-gray text-center">${
                formatAmount(amount)
              }</td>
            <td class="px-4 py-2 text-sm text-iron-fox-dark-gray text-center">${
                formatDateTime(tx.timeStamp)
              }</td>
            <td class="px-4 py-2 text-sm text-iron-fox-dark-gray text-center">${
                shortenHash(tx.from)
              }</td>
            <td class="px-4 py-2 text-sm text-iron-fox-dark-gray text-center">${
                shortenHash(tx.to)
              }</td>
          </tr>
        `;
            })
            .join("")
        }
        </tbody>
      </table>
  `;
      },
    )
    .build();

  // Build the rest of the page components
  const step2 = createComponent("step2")
    .addProvider({})
    .setState(() => ({
      title: "Step 2: Transaction select",
      body: "Select the transactions where your funds were taken",
    }))
    .addActions({
      someAction: (ctx) => {
        return { title: "new" };
      },
    })
    .addSideEffects({})
    .addChildren({
      extra: () => table.render(),
    })
    .setTemplate((step2) => {
      return `
<div class="mt-10">${
        renderTemplateWithContext(
          join(Deno.cwd(), htmlFolderPath, "card.html"),
          step2,
        )
      }
</div>
`;
    })
    .build().render();

  const button = createComponent("beginFoxTrace")
    .addProvider({})
    .setState(() => ({ text: "start fox trace report" }))
    .addActions({})
    .addSideEffects({})
    .addChildren({})
    .setTemplate((ctx) =>
      renderTemplateWithContext(
        join(Deno.cwd(), htmlFolderPath, "button.html"),
        ctx,
      )
    )
    .build().render();

  const step3 = createComponent("step3")
    .addProvider({})
    .setState(() => ({
      title: "Step 3: Verify Information and begin",
      body:
        "once you verify the selected transactions above are correct, you click below to generate your report",
    }))
    .addActions({})
    .addSideEffects({
      start: async () => {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          const responseData = await response.json();
          console.log("Response:", responseData);
        } else {
          console.error("HTTP Error:", response.status, response.statusText);
        }
      },
    })
    .addChildren({
      extra: () => button,
    })
    .setTemplate((ctx) => {
      return `
<div class="mt-10">${
        renderTemplateWithContext(
          join(Deno.cwd(), htmlFolderPath, "card.html"),
          ctx,
        )
      }
</div>
`;
    })
    .build().render();
  const content = createComponent("content")
    .addProvider({})
    .setState(() => ({
      title: "Fox Trace App",
    }))
    .addActions({})
    .addSideEffects({})
    .addChildren({
      content: () => `
  ${selectChain}
${step2}
${step3}
`,
    })
    .setTemplate((ctx) =>
      renderTemplateWithContext(
        join(Deno.cwd(), htmlFolderPath, "content.html"),
        ctx,
      )
    )
    .build().render();

  const p = await generatePage(content, {});
  ctx.response.body = p;
});

export default router;
