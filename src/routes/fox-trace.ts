import { join } from "https://deno.land/std/path/mod.ts";
import { Router } from "https://deno.land/x/oak/mod.ts";
import { renderPage } from "../utils/moo-moo.ts";
const router = new Router();
router.get("/fox-trace", async (ctx) => {
  const main = await renderPage(
    join(Deno.cwd(), "src/partials", "fox-trace.html"),
    {},
    { poopoo: "hey" },
    "", // Pass the TypeScript file path
  );
  ctx.response.body = main;
});
export default router;
