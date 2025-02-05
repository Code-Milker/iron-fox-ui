import { join } from "https://deno.land/std@0.224.0/path/join.ts";
import { createComponent } from "../../moomoo/component.ts";
import { interpolateFileSync } from "../../moomoo/moo-moo.ts";
import { generatePage } from "../../moomoo/page.ts";
import { ethAddressSchema, htmlFolderPath, txHashSchema } from "../../types.ts";
import { Router } from "https://deno.land/x/oak/mod.ts";

const router = new Router();
router.get("/fox-trace-app", async (ctx) => {
  // get data and run validations
  const searchParams = ctx.request.url.searchParams;
  const address = await ethAddressSchema.safeParse(
    searchParams.get("publicAddress"),
  );
  // const txnHash = await txHashSchema.safeParse(searchParams.get("txnHash"));
  //determine flow
  const authroizedUser = true;
  if (!address.success && authroizedUser) {
    throw "invalid address";
  }
  // 1. great we have their address, lets display their transactions
  // in any easy format for them to be able to read and have them
  // select the transactions they were attacked by.
  // transcation(s) from a table
  // 2. they selected their transactions, ask for confirmation before executing the report.
  // to verify you lost x amount on blah you lost y on blah for a net total of blah dollars <confirm>
  // 3. page clears and then we the inital transaction block with the amount and type.
  // when the next transaction is found it will transition in with a connecting edge, the edge determines amount moved
  // so we will need to create a json get for fetching report status which includes data on the whole thing

  const selectChain = createComponent("selectChain")
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
        interpolateFileSync(join(Deno.cwd(), htmlFolderPath, "card.html"), ctx)
      }</div>`
    )
    .render()
    .template();

  const table = createComponent("app")
    .addProvider({})
    .setState(() => ({
      title: "Fox Trace",
      body: ``,
    }))
    .addActions({})
    .addSideEffects({})
    .addChildren({ extra: () => selectChain })
    .setTemplate((ctx) => `
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
      <!-- Example row; replace or loop as needed -->
      <tr class="hover:bg-iron-fox-light-gray cursor-pointer">
        <!-- Checkbox cell -->
        <td class="px-4 py-2">
          <input type="checkbox" class="form-checkbox" />
        </td>
        <td class="px-4 py-2 text-sm text-iron-fox-dark-gray">0xABC123...XYZ</td>
        <td class="px-4 py-2 text-sm text-iron-fox-dark-gray">WBTC</td>
        <td class="px-4 py-2 text-sm text-iron-fox-dark-gray">10.5</td>
        <td class="px-4 py-2 text-sm text-iron-fox-dark-gray">2025-02-05</td>
        <td class="px-4 py-2 text-sm text-iron-fox-dark-gray">0xFROM123...</td>
        <td class="px-4 py-2 text-sm text-iron-fox-dark-gray">0xTO456...</td>
      </tr>
      <tr class="hover:bg-iron-fox-light-gray cursor-pointer">
        <!-- Checkbox cell -->
        <td class="px-4 py-2">
          <input type="checkbox" class="form-checkbox" />
        </td>
        <td class="px-4 py-2 text-sm text-iron-fox-dark-gray">0xABC123...XYZ</td>
        <td class="px-4 py-2 text-sm text-iron-fox-dark-gray">ETH</td>
        <td class="px-4 py-2 text-sm text-iron-fox-dark-gray">10.5</td>
        <td class="px-4 py-2 text-sm text-iron-fox-dark-gray">2025-02-05</td>
        <td class="px-4 py-2 text-sm text-iron-fox-dark-gray">0xFROM123...</td>
        <td class="px-4 py-2 text-sm text-iron-fox-dark-gray">0xTO456...</td>
      </tr>
      <tr class="hover:bg-iron-fox-light-gray cursor-pointer">
        <!-- Checkbox cell -->
        <td class="px-4 py-2">
          <input type="checkbox" class="form-checkbox" />
        </td>
        <td class="px-4 py-2 text-sm text-iron-fox-dark-gray">0xABC123...XYZ</td>
        <td class="px-4 py-2 text-sm text-iron-fox-dark-gray">ETH</td>
        <td class="px-4 py-2 text-sm text-iron-fox-dark-gray">10.5</td>
        <td class="px-4 py-2 text-sm text-iron-fox-dark-gray">2025-02-05</td>
        <td class="px-4 py-2 text-sm text-iron-fox-dark-gray">0xFROM123...</td>
        <td class="px-4 py-2 text-sm text-iron-fox-dark-gray">0xTO456...</td>
      </tr>
      <tr class="hover:bg-iron-fox-light-gray cursor-pointer">
        <!-- Checkbox cell -->
        <td class="px-4 py-2">
          <input type="checkbox" class="form-checkbox" />
        </td>
        <td class="px-4 py-2 text-sm text-iron-fox-dark-gray">0xABC123...XYZ</td>
        <td class="px-4 py-2 text-sm text-iron-fox-dark-gray">ETH</td>
        <td class="px-4 py-2 text-sm text-iron-fox-dark-gray">10.5</td>
        <td class="px-4 py-2 text-sm text-iron-fox-dark-gray">2025-02-05</td>
        <td class="px-4 py-2 text-sm text-iron-fox-dark-gray">0xFROM123...</td>
        <td class="px-4 py-2 text-sm text-iron-fox-dark-gray">0xTO456...</td>
      </tr>
      <!-- More rows... -->
    </tbody>
  </table>
`).render().template();

  const step2 = createComponent("step2")
    .addProvider({})
    .setState(() => ({
      title: "Step 2: Transaction select",
      body: "Select the transactions where your funds were taken",
    })).addActions({})
    .addSideEffects({})
    .addChildren({
      extra: () => table,
    })
    .setTemplate((ctx) => {
      return `
<div class="mt-10">${
        interpolateFileSync(
          join(Deno.cwd(), htmlFolderPath, "card.html"),
          ctx,
        )
      }
</div>
`;
    }).render().template();

  const button = createComponent("beginFoxTrace")
    .addProvider({})
    .setState(() => ({ text: "start fox trace report" }))
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
        interpolateFileSync(
          join(Deno.cwd(), htmlFolderPath, "card.html"),
          ctx,
        )
      }
</div>
`;
    }).render().template();

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
      interpolateFileSync(
        join(Deno.cwd(), htmlFolderPath, "content.html"),
        ctx,
      )
    )
    .render()
    .template();

  const p = await generatePage(content, {});
  ctx.response.body = p;
});

export default router;
