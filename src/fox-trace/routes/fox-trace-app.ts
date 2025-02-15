import { join } from "https://deno.land/std@0.224.0/path/join.ts";
import { createComponent } from "../../moomoo/component.ts";
import { renderTemplateWithContext } from "../../moomoo/moo-moo.ts";
import { generatePage } from "../../moomoo/page.ts";
import { ethAddressSchema, htmlFolderPath } from "../../types.ts";
import { Router } from "https://deno.land/x/oak/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";
const router = new Router();
router.get("/fox-trace-app", async (ctx) => {
  // get data and run validations
  const searchParams = ctx.request.url.searchParams;
  let address = await ethAddressSchema.safeParse(
    searchParams.get("publicAddress"),
  );
  // const txnHash = await txHashSchema.safeParse(searchParams.get("txnHash"));
  //determine flow
  const authroizedUser = true;
  if (!address.success && authroizedUser) {
    throw "invalid address";
  }
  address = address.data;
  // 1. great we have their address, lets display their transactions
  // in any easy format for them to be able to read and have them
  // select the transactions they were attacked by.
  // transcation(s) from a table
  // 2. they selected their transactions, ask for confirmation before executing the report.
  // to verify you lost x amount on blah you lost y on blah for a net total of blah dollars <confirm>
  // 3. page clears and then we the inital transaction block with the amount and type.
  // when the next transaction is found it will transition in with a connecting edge, the edge determines amount moved
  // so we will need to create a json get for fetching report status which includes data on the whole thing

  const selectChain = createComponent()
    .addProvider({})
    .setState(() => ({
      address: address.data,
      title: "Step 1: Chain select",
      body: "Select the chain your funds were taken on",
    }))
    .addActions({})
    .addSideEffects({})
    .addChildren({
      extra: () => {
        return `
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
    ).build().render();

  // Helper: fetch transactions from Etherscan (for ETH transactions)

  // Create our component using the component maker
  // Example: Server-side code (e.g. in Node.js or getServerSideProps in Next.js)

  // If needed, install node-fetch (or use the built-in fetch if on Node 18+)
  // import fetch from 'node-fetch';

  // Helper to fetch transactions from Etherscan
  async function fetchTransactions(address: string, apiKey: string) {
    const url =
      `https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=desc&apikey=${apiKey}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(res);
    console.log(data);
    return data.status === "1" && Array.isArray(data.result) ? data.result : [];
  }
  function formatDate(timestamp: string) {
    const date = new Date(parseInt(timestamp) * 1000);
    return date.toLocaleDateString();
  }

  // Helper: convert Wei to Ether (for ETH txs)
  function weiToEther(wei: string) {
    return (parseFloat(wei) / 1e18).toFixed(4);
  }
  // Server-side async function to build the component HTML
  // Define your address and API key

  // Now you can access your variables:
  const apiKey = config().ETHERSCAN_API_KEY;
  console.log(apiKey);
  // Fetch the transactions on the server
  const txs = await fetchTransactions(address, apiKey);
  console.log(txs);

  // Build the component with state pre-populated with transactions
  const table = createComponent("app")
    .addProvider({/* any providers if needed */})
    .setState(() => ({
      txs, // preloaded transactions
      address,
      apiKey,
    }))
    .addActions({
      // You can still have actions if you plan to update state on the client later.
      updateTxs: (ctx: any, newTxs: any[]) => ({ txs: newTxs }),
    })
    // No side effect for fetching txs now since they're fetched server-side.
    .addSideEffects({})
    .addChildren({
      // Child function that generates table rows from transactions
      rows: (ctx: any) => {
        if (!ctx.state.txs || ctx.state.txs.length === 0) {
          return `<tr>
            <td colspan="7" class="px-4 py-2 text-center text-sm text-iron-fox-dark-gray">
              No transactions found.
            </td>
          </tr>`;
        }
        return ctx.state.txs.map((tx: any) => {
          // We assume ETH transactions here; adjust as needed.
          return `
            <tr class="hover:bg-iron-fox-light-gray cursor-pointer">
              <td class="px-4 py-2">
                <input type="checkbox" class="form-checkbox" />
              </td>
              <td class="px-4 py-2 text-sm text-iron-fox-dark-gray">${tx.hash}</td>
              <td class="px-4 py-2 text-sm text-iron-fox-dark-gray">ETH</td>
              <td class="px-4 py-2 text-sm text-iron-fox-dark-gray">${
            weiToEther(tx.value)
          }</td>
              <td class="px-4 py-2 text-sm text-iron-fox-dark-gray">${
            formatDate(tx.timeStamp)
          }</td>
              <td class="px-4 py-2 text-sm text-iron-fox-dark-gray">${tx.from}</td>
              <td class="px-4 py-2 text-sm text-iron-fox-dark-gray">${tx.to}</td>
            </tr>
          `;
        }).join("");
      },
    })
    .setTemplate((ctx: any) => `
      <table class="w-full min-w-full">
        <thead>
          <tr class="text-left text-sm font-medium text-iron-fox-cyan">
            <!-- Checkbox column header -->
            <th class="px-4 py-2 flex justify-start">
              <input type="checkbox" class="form-checkbox" />
            </th>
            <th class="px-4 py-2">Transaction Hash</th>
            <th class="px-4 py-2">Token</th>
            <th class="px-4 py-2">Amount</th>
            <th class="px-4 py-2">Date</th>
            <th class="px-4 py-2">From</th>
            <th class="px-4 py-2">To</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-iron-fox-dark-gray">
          ${ctx.children.rows}
        </tbody>
      </table>
    `)
    .build();

  // Return the rendered HTML of the component

  // Example usage: On your server, call buildTableComponent() to generate the HTML.
  const step2 = createComponent("step2")
    .addProvider({})
    .setState(() => ({
      title: "Step 2: Transaction select",
      body: "Select the transactions where your funds were taken",
    })).addActions({})
    .addSideEffects({})
    .addChildren({
      extra: () => table.render(),
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
    }).build().render();

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
    })).addActions({})
    .addSideEffects({})
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
    }).build().render();

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
