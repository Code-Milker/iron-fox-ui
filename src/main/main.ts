import { join } from "https://deno.land/std/path/mod.ts";
import { Router } from "https://deno.land/x/oak/mod.ts";
import { interpolateFileSync } from "../moomoo/moo-moo.ts";
import { createComponent } from "../moomoo/component.ts";
import { htmlFolderPath } from "../types.ts";
import { generatePage } from "../moomoo/page.ts";
import { createComponent2 } from "../moomoo/sandbox.ts";
const router = new Router();

router.get("/", async (ctx) => {
  const component = createComponent2("app")
    .addProvider({ apiURL: "https://aaa.com" })
    .setState(() => ({ counter: 0, text: "" }))
    .addActions({
      increment: (ctx) => {
        return { counter: ctx.state.counter + 1 }; // Correct: returns Partial<State>
      },
      setText: (ctx, newText: string) => {
        return { text: newText }; // Correct: returns Partial<State>
      },
    }).addSideEffects({}).addChildren({}).setTemplate(() => "").build();
  console.log({ component });
  const card = createComponent("cardWithImg")
    .addProvider({})
    .setState(() => ({
      title: "Fox Trace",
      body:
        `Leverages advanced algorithms and blockchain analytics to uncover hidden
      trails, identify malicious actors, and provide actionable insights. It
      empowers crypto enthusiasts, security professionals, and law enforcement
      agencies to do stuff.`,
    }))
    .addActions({})
    .addSideEffects({})
    .addChildren({})
    .setTemplate((ctx) =>
      interpolateFileSync(
        join(Deno.cwd(), htmlFolderPath, "card-with-img.html"),
        ctx,
      )
    )
    .render()
    .template();

  const content = createComponent("content")
    .addProvider({})
    .setState(() => ({
      title: "Products",
    }))
    .addActions({})
    .addSideEffects({})
    .addChildren({ content: () => card })
    .setTemplate((ctx) =>
      interpolateFileSync(
        join(Deno.cwd(), htmlFolderPath, "content.html"),
        ctx,
      )
    )
    .render()
    .template();

  const main = createComponent("mainPage")
    .addProvider({})
    .setState(() => ({}))
    .addActions({})
    .addSideEffects({})
    .addChildren({
      content: () => content,
      mission: () =>
        interpolateFileSync(
          join(Deno.cwd(), htmlFolderPath, "mission.html"),
          {},
        ),
    })
    .setTemplate((ctx) =>
      interpolateFileSync(
        join(Deno.cwd(), htmlFolderPath, "main.html"),
        ctx,
      )
    )
    .render()
    .template();

  ctx.response.body = await generatePage(main, {});
  // ctx.response.body = "<html><body><div>test</div></body><html>";
});
export default router;
