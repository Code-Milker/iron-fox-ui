import { join } from "https://deno.land/std/path/mod.ts";
import { Router } from "https://deno.land/x/oak/mod.ts";
import { renderTemplateWithContext } from "../moomoo/moo-moo.ts";
import { createComponent } from "../moomoo/component.ts";
import { htmlFolderPath } from "../types.ts";
import { generatePage } from "../moomoo/page.ts";
const router = new Router();

router.get("/", async (ctx) => {
  const card = createComponent("card")
    .addProvider({})
    .setState(() => ({
      title: "Fox Trace",
      body:
        `Leverages advanced algorithms and blockchain analytics to uncover hidden
      trails, identify malicious actors, and provide actionable insights. It
      empowers crypto enthusiasts, security professionals, and law enforcement
      agencies to do stuff.`,
      src: "magnify.jpg",
    }))
    .addActions({
      "test": (ctx) => {
        return { body: ctx.state.body };
      },
    })
    .addSideEffects({})
    .addChildren({
      "child": (ctx) => {
        return "";
      },
    })
    .setTemplate((ctx) =>
      renderTemplateWithContext(
        join(Deno.cwd(), htmlFolderPath, "card-with-img.html"),
        ctx,
      )
    ).build().render();

  const content = createComponent("prouduct")
    .addProvider({})
    .setState(() => ({
      title: "Products",
    }))
    .addActions({})
    .addSideEffects({})
    .addChildren({ content: () => card })
    .setTemplate((ctx) =>
      renderTemplateWithContext(
        join(Deno.cwd(), htmlFolderPath, "content.html"),
        ctx,
      )
    )
    .build().render();
  const main = createComponent("content")
    .addProvider({})
    .setState(() => ({}))
    .addActions({})
    .addSideEffects({})
    .addChildren({
      content: () => content,
      mission: () =>
        renderTemplateWithContext(
          join(Deno.cwd(), htmlFolderPath, "mission.html"),
          {},
        ),
    })
    .setTemplate((ctx) =>
      renderTemplateWithContext(
        join(Deno.cwd(), htmlFolderPath, "main.html"),
        ctx,
      )
    )
    .build().render();

  ctx.response.body = await generatePage(main, {});
  // ctx.response.body = "<html><body><div>test</div></body><html>";
});
export default router;
