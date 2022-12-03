import { serve } from "https://deno.land/std@0.167.0/http/server.ts";
import { serveDir } from "https://deno.land/std@0.167.0/http/file_server.ts";
import type { ServeDirOptions } from "https://deno.land/std@0.167.0/http/file_server.ts";

const options: ServeDirOptions = {
  fsRoot: "static",
  enableCors: true,
  showDirListing: true,
};

serve((request) => serveDir(request, options));
