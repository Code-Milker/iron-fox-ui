import { join } from "https://deno.land/std/path/mod.ts";
import { Router } from "https://deno.land/x/oak/mod.ts";
import { render, renderPage } from "../utils/moo-moo.ts";
const router = new Router();

router.get("/", async (ctx) => {
  const filePath = join(Deno.cwd(), "src/partials", "main.html");
  const card = await render(
    join(Deno.cwd(), "src/partials", "card-with-img.html"),
    {},
    {
      img: "magnify.jpg",
      title: "Fox Trace",
      body:
        `Leverages advanced algorithms and blockchain analytics to uncover hidden
    trails, identify malicious actors, and provide actionable insights. It
    empowers crypto enthusiasts, security professionals, and law enforcement
    agencies to do stuff.`,
      extra: "",
    },
    "",
  );

  const content = await render(
    join(Deno.cwd(), "src/partials", "content.html"),
    {},
    {
      title: "Products",
      content: card,
    },
    "",
  );

  const main = await renderPage(
    filePath,
    {
      content: content, // Add Products Partial
      mission: join(Deno.cwd(), "src/partials", "mission.html"), // Add Products Partial
    },
    {},
    "", // Pass the TypeScript file path
  );
  ctx.response.body = main;
});
export default router;
