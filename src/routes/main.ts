import { join } from "https://deno.land/std/path/mod.ts";
import { Router } from "https://deno.land/x/oak/mod.ts";
import { renderPage } from "../utils/moo-moo.ts";
const router = new Router();

router.get("/", async (ctx) => {
  const filePath = join(Deno.cwd(), "src/partials", "main.html");
  const main = await renderPage(
    filePath,
    {
      card: join(Deno.cwd(), "src/partials", "card.html"),
      content: join(Deno.cwd(), "src/partials", "content.html"), // Add Products Partial
      mission: join(Deno.cwd(), "src/partials", "mission.html"), // Add Products Partial
    },
    {},
    "", // Pass the TypeScript file path
  );
  ctx.response.body = main;
});
export default router;
