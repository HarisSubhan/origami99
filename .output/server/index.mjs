globalThis.__nitro_main__ = import.meta.url;
import { b as NodeResponse, s as serve } from "./_libs/srvx.mjs";
import { d as defineHandler, H as HTTPError, t as toEventHandler, a as defineLazyEventHandler, b as H3Core } from "./_libs/h3.mjs";
import { d as decodePath, w as withLeadingSlash, a as withoutTrailingSlash, j as joinURL } from "./_libs/ufo.mjs";
import { promises } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import "node:http";
import "node:stream";
import "node:stream/promises";
import "node:https";
import "node:http2";
import "./_libs/rou3.mjs";
function lazyService(loader) {
  let promise, mod;
  return {
    fetch(req) {
      if (mod) {
        return mod.fetch(req);
      }
      if (!promise) {
        promise = loader().then((_mod) => mod = _mod.default || _mod);
      }
      return promise.then((mod2) => mod2.fetch(req));
    }
  };
}
const services = {
  ["ssr"]: lazyService(() => import("./_ssr/index.mjs"))
};
globalThis.__nitro_vite_envs__ = services;
const headers = ((m) => function headersRouteRule(event) {
  for (const [key2, value] of Object.entries(m.options || {})) {
    event.res.headers.set(key2, value);
  }
});
const assets = {
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": '"f32-95vhufeblE9V/a4FSM+h0M2tzt0"',
    "mtime": "2026-08-21T13:09:28.275Z",
    "size": 3890,
    "path": "../public/favicon.ico"
  },
  "/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": '"500-ETWdb7vs/xf0Df4TyqYmvyaWG9c"',
    "mtime": "2026-08-21T13:05:20.454Z",
    "size": 1280,
    "path": "../public/robots.txt"
  },
  "/assets/admin.blogs-XX4Lz2K8.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1234-O4NSoo7qVk9pA0kb1xJeu3s+tEw"',
    "mtime": "2026-11-20T08:59:46.532Z",
    "size": 4660,
    "path": "../public/assets/admin.blogs-XX4Lz2K8.js"
  },
  "/google7636c7c244a81f8e.html": {
    "type": "text/html; charset=utf-8",
    "etag": '"35-/QDTxRy9tVoe/ZhKEgzi39uLCFg"',
    "mtime": "2026-08-21T13:05:20.436Z",
    "size": 53,
    "path": "../public/google7636c7c244a81f8e.html"
  },
  "/assets/admin.index-DWrLaozg.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"fa3-76olCjMlGxq2QSV1bpBpFtbO1TI"',
    "mtime": "2026-11-20T08:59:46.532Z",
    "size": 4003,
    "path": "../public/assets/admin.index-DWrLaozg.js"
  },
  "/assets/admin-FIuHhqNP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"82db-Q+sVbiq5qD6AjhWXX9UABB0rT5M"',
    "mtime": "2026-11-20T08:59:46.532Z",
    "size": 33499,
    "path": "../public/assets/admin-FIuHhqNP.js"
  },
  "/llms.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": '"b88-mU6lk6GtNx1bA8XfU0qOzvVnrSk"',
    "mtime": "2026-08-21T13:05:20.440Z",
    "size": 2952,
    "path": "../public/llms.txt"
  },
  "/assets/a1phoenixplumbing-shot-CwJknllO.jpg": {
    "type": "image/jpeg",
    "etag": '"1b4dd-vWq8Ix5IVWnWAskGFztsirV8ra4"',
    "mtime": "2026-11-20T08:59:46.522Z",
    "size": 111837,
    "path": "../public/assets/a1phoenixplumbing-shot-CwJknllO.jpg"
  },
  "/assets/admin.portfolio-BdeRmsy2.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"fae-B3xUrSGeHSlGrpCQWJPmH4TC8Xo"',
    "mtime": "2026-11-20T08:59:46.532Z",
    "size": 4014,
    "path": "../public/assets/admin.portfolio-BdeRmsy2.js"
  },
  "/assets/admin.pages-DjRmyVvZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"903-JKwnE1pJ3kG+jbtMrcos1v6IBT0"',
    "mtime": "2026-11-20T08:59:46.532Z",
    "size": 2307,
    "path": "../public/assets/admin.pages-DjRmyVvZ.js"
  },
  "/assets/a1phoenixplumbing-logo-6tYHhW8J.png": {
    "type": "image/png",
    "etag": '"104c1-KOx75EtsldXOl4QER/iOKS0Ulwg"',
    "mtime": "2026-11-20T08:59:46.522Z",
    "size": 66753,
    "path": "../public/assets/a1phoenixplumbing-logo-6tYHhW8J.png"
  },
  "/assets/admin.services-BllW_jd6.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"11e8-uK4DfyFlrj9HzsbGrUqux0DrMdk"',
    "mtime": "2026-11-20T08:59:46.532Z",
    "size": 4584,
    "path": "../public/assets/admin.services-BllW_jd6.js"
  },
  "/assets/admin.users-CyMHHrMU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"f57-UArfLUew+0xyhUA0H4js9jBpA/4"',
    "mtime": "2026-11-20T08:59:46.532Z",
    "size": 3927,
    "path": "../public/assets/admin.users-CyMHHrMU.js"
  },
  "/assets/admin.leads-DvrUYw3_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"fe5-nqIGbfe/PG19na2V0V5kuiTiD9o"',
    "mtime": "2026-11-20T08:59:46.532Z",
    "size": 4069,
    "path": "../public/assets/admin.leads-DvrUYw3_.js"
  },
  "/assets/ai-integration-guide-2026-cover-CEGw1Lta.jpg": {
    "type": "image/jpeg",
    "etag": '"143bf-tbc0ZiRLwCx063t+ruOH56X8nQQ"',
    "mtime": "2026-11-20T08:59:46.522Z",
    "size": 82879,
    "path": "../public/assets/ai-integration-guide-2026-cover-CEGw1Lta.jpg"
  },
  "/assets/agog-travel-wNUzs70s.jpg": {
    "type": "image/jpeg",
    "etag": '"ddf6-4TyzORteSRLsfUPagEcXM+xt41w"',
    "mtime": "2026-11-20T08:59:46.532Z",
    "size": 56822,
    "path": "../public/assets/agog-travel-wNUzs70s.jpg"
  },
  "/assets/albakirbarbershop-logo-C8wfUWbX.png": {
    "type": "image/png",
    "etag": '"2443-8D9cw4RicmYB7jI/sOELem6s2DU"',
    "mtime": "2026-11-20T08:59:46.522Z",
    "size": 9283,
    "path": "../public/assets/albakirbarbershop-logo-C8wfUWbX.png"
  },
  "/assets/alaya-noir-C6fECzGz.jpg": {
    "type": "image/jpeg",
    "etag": '"c42e-YB+skRMWJf1TN2o4ok2u5Q9vo28"',
    "mtime": "2026-11-20T08:59:46.522Z",
    "size": 50222,
    "path": "../public/assets/alaya-noir-C6fECzGz.jpg"
  },
  "/assets/agog-shot-jS9womde.jpg": {
    "type": "image/jpeg",
    "etag": '"3518a-kef5tCbh8QWBz0JuhkwTBv3y+bw"',
    "mtime": "2026-11-20T08:59:46.532Z",
    "size": 217482,
    "path": "../public/assets/agog-shot-jS9womde.jpg"
  },
  "/assets/ambient-DNxeURN7.jpg": {
    "type": "image/jpeg",
    "etag": '"f078-EtM+6ct/hKovDW6Wt9/XQj8wshk"',
    "mtime": "2026-11-20T08:59:46.522Z",
    "size": 61560,
    "path": "../public/assets/ambient-DNxeURN7.jpg"
  },
  "/assets/albakirbarbershop-shot-yHL6olpy.jpg": {
    "type": "image/jpeg",
    "etag": '"1e05c-Bi79PrUEFER0ucf3hXEMsSdvowk"',
    "mtime": "2026-11-20T08:59:46.522Z",
    "size": 122972,
    "path": "../public/assets/albakirbarbershop-shot-yHL6olpy.jpg"
  },
  "/assets/api-DbkAORLb.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1949-EMxMQhKGxKLQ13GLgJLF3lGn55k"',
    "mtime": "2026-11-20T08:59:46.532Z",
    "size": 6473,
    "path": "../public/assets/api-DbkAORLb.js"
  },
  "/assets/arrow-left-BQ2pQZVZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a6-SSoHXkMCudpKEuBxlseoxY7Fjwk"',
    "mtime": "2026-11-20T08:59:46.532Z",
    "size": 166,
    "path": "../public/assets/arrow-left-BQ2pQZVZ.js"
  },
  "/assets/amble-shot-DyC-yAmz.jpg": {
    "type": "image/jpeg",
    "etag": '"3462b-f3Gb/+jdIVNWBIbu7csg/6RIvgQ"',
    "mtime": "2026-11-20T08:59:46.522Z",
    "size": 214571,
    "path": "../public/assets/amble-shot-DyC-yAmz.jpg"
  },
  "/assets/avatar-1-CIPaLxC7.png": {
    "type": "image/png",
    "etag": '"24a1d-qeMIKGvyyjD0TL1t6ayiTFz/hRw"',
    "mtime": "2026-11-20T08:59:46.522Z",
    "size": 150045,
    "path": "../public/assets/avatar-1-CIPaLxC7.png"
  },
  "/assets/avatar-2-DjAUa5Nl.png": {
    "type": "image/png",
    "etag": '"3695c-MHQonRzvj5J/qiJ12DMPVjfT42g"',
    "mtime": "2026-11-20T08:59:46.522Z",
    "size": 223580,
    "path": "../public/assets/avatar-2-DjAUa5Nl.png"
  },
  "/assets/blog-CwbKBLUt.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b2a-I8080WFAUsjU9L0gX+6ukyILrxA"',
    "mtime": "2026-11-20T08:59:46.532Z",
    "size": 2858,
    "path": "../public/assets/blog-CwbKBLUt.js"
  },
  "/assets/blog._slug-D0oas580.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"11c-McspDzQ0JbuV9Dl/3Nsv+yTWRBA"',
    "mtime": "2026-11-20T08:59:46.532Z",
    "size": 284,
    "path": "../public/assets/blog._slug-D0oas580.js"
  },
  "/assets/axonpos-DJSH1lRh.jpg": {
    "type": "image/jpeg",
    "etag": '"fed3-B2mSZDc0h/vraLji86pkh2kHPEo"',
    "mtime": "2026-11-20T08:59:46.522Z",
    "size": 65235,
    "path": "../public/assets/axonpos-DJSH1lRh.jpg"
  },
  "/assets/blog._slug-BvCq5DCJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1a4-ZqKjj/hp0MmG6m8BxIPEbSh8Irs"',
    "mtime": "2026-11-20T08:59:46.532Z",
    "size": 420,
    "path": "../public/assets/blog._slug-BvCq5DCJ.js"
  },
  "/assets/avatar-3-CAzl70xr.png": {
    "type": "image/png",
    "etag": '"38a09-gz1xyRIa9dQThOKqNM6Fkj3tucU"',
    "mtime": "2026-11-20T08:59:46.522Z",
    "size": 231945,
    "path": "../public/assets/avatar-3-CAzl70xr.png"
  },
  "/assets/blog._slug-gfl3F6Yj.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ebe-eLwLg8izOhTmAv9m9xyTBJvIhxs"',
    "mtime": "2026-11-20T08:59:46.532Z",
    "size": 3774,
    "path": "../public/assets/blog._slug-gfl3F6Yj.js"
  },
  "/assets/building-2-Dnfyw9wO.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"180-BfYsQdMw9hY9DB10m+tUN8poUzs"',
    "mtime": "2026-11-20T08:59:46.532Z",
    "size": 384,
    "path": "../public/assets/building-2-Dnfyw9wO.js"
  },
  "/assets/avatar-5-92oNHbxn.png": {
    "type": "image/png",
    "etag": '"28ff5-KuXdS8dZZe0mWFTrBU4hhqCu+4A"',
    "mtime": "2026-11-20T08:59:46.522Z",
    "size": 167925,
    "path": "../public/assets/avatar-5-92oNHbxn.png"
  },
  "/assets/avatar-4-D0kb_vp0.png": {
    "type": "image/png",
    "etag": '"342b3-X6JmSFuhKrHvUb69d/o6hZpNtmE"',
    "mtime": "2026-11-20T08:59:46.522Z",
    "size": 213683,
    "path": "../public/assets/avatar-4-D0kb_vp0.png"
  },
  "/assets/case-seo-DS807iKi.jpg": {
    "type": "image/jpeg",
    "etag": '"f300-rVX3/gfZnFZMpc1ScJmZhiMX4M4"',
    "mtime": "2026-11-20T08:59:46.522Z",
    "size": 62208,
    "path": "../public/assets/case-seo-DS807iKi.jpg"
  },
  "/assets/caligaragedoorgates-logo-zzXifHqh.jpg": {
    "type": "image/jpeg",
    "etag": '"2a86-40RR5qrQQ7iEDnjqNaJxIArHSS8"',
    "mtime": "2026-11-20T08:59:46.522Z",
    "size": 10886,
    "path": "../public/assets/caligaragedoorgates-logo-zzXifHqh.jpg"
  },
  "/assets/case-marketing-BtXCZ9C7.jpg": {
    "type": "image/jpeg",
    "etag": '"13488-Z4vFkJLhyr/h0Adj1BdKntfXLqw"',
    "mtime": "2026-11-20T08:59:46.522Z",
    "size": 78984,
    "path": "../public/assets/case-marketing-BtXCZ9C7.jpg"
  },
  "/assets/case-software-BNyq__uA.jpg": {
    "type": "image/jpeg",
    "etag": '"106b3-WLRNrsm0WUsDM2KwYhrI6d4cACw"',
    "mtime": "2026-11-20T08:59:46.522Z",
    "size": 67251,
    "path": "../public/assets/case-software-BNyq__uA.jpg"
  },
  "/assets/case-brand-AXF9VY3a.jpg": {
    "type": "image/jpeg",
    "etag": '"11ce3-ZFCSwOqqkMjMbGvfWWuUg9AtK9w"',
    "mtime": "2026-11-20T08:59:46.522Z",
    "size": 72931,
    "path": "../public/assets/case-brand-AXF9VY3a.jpg"
  },
  "/assets/chart-line-BkvrQvm8.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b9-yutv9hPAh7PUpm0i5q6LQ4C8dCw"',
    "mtime": "2026-11-20T08:59:46.532Z",
    "size": 185,
    "path": "../public/assets/chart-line-BkvrQvm8.js"
  },
  "/assets/chevron-down-D4_UoSGr.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"81-isp4KjqU47tghHIhHKT4pigSnFU"',
    "mtime": "2026-11-20T08:59:46.532Z",
    "size": 129,
    "path": "../public/assets/chevron-down-D4_UoSGr.js"
  },
  "/assets/check-BkLG3XE_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"7d-cga1Htj9mPXkWHngtbvXlCg6NsM"',
    "mtime": "2026-11-20T08:59:46.532Z",
    "size": 125,
    "path": "../public/assets/check-BkLG3XE_.js"
  },
  "/assets/caliprogarage-logo-CjZuqe4o.jpg": {
    "type": "image/jpeg",
    "etag": '"1ff3-jJgeRa2a9USbkLJsahuaI2Ptsvo"',
    "mtime": "2026-11-20T08:59:46.522Z",
    "size": 8179,
    "path": "../public/assets/caliprogarage-logo-CjZuqe4o.jpg"
  },
  "/assets/caligaragedoorgates-shot-Bh8GfMLS.jpg": {
    "type": "image/jpeg",
    "etag": '"22125-6oAWQuxcpjrXpk49i+q9AOJL5rY"',
    "mtime": "2026-11-20T08:59:46.522Z",
    "size": 139557,
    "path": "../public/assets/caligaragedoorgates-shot-Bh8GfMLS.jpg"
  },
  "/assets/case-web-B5SvHdCC.jpg": {
    "type": "image/jpeg",
    "etag": '"1287d-Aiq2V/El862oEbbFHIgOHq6PP/8"',
    "mtime": "2026-11-20T08:59:46.522Z",
    "size": 75901,
    "path": "../public/assets/case-web-B5SvHdCC.jpg"
  },
  "/assets/caliprogarage-shot-C_IwnQ_e.jpg": {
    "type": "image/jpeg",
    "etag": '"26bcb-Z3uF0U9/DO5W+/FxCKZtESzlL2k"',
    "mtime": "2026-11-20T08:59:46.522Z",
    "size": 158667,
    "path": "../public/assets/caliprogarage-shot-C_IwnQ_e.jpg"
  },
  "/assets/cmj-door-Bfai63F5.jpg": {
    "type": "image/jpeg",
    "etag": '"f262-WDTq6QUxvnR4mc6/uZ7TP8DyXmc"',
    "mtime": "2026-11-20T08:59:46.522Z",
    "size": 62050,
    "path": "../public/assets/cmj-door-Bfai63F5.jpg"
  },
  "/assets/Contact-DYhuyxw5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2497-CMe4jnB+zTksWMtB6wBxHDsI2eM"',
    "mtime": "2026-11-20T08:59:46.532Z",
    "size": 9367,
    "path": "../public/assets/Contact-DYhuyxw5.js"
  },
  "/assets/cookies-FWCqMf5w.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"107b-o87q7/nwtXyXfZpMD/EYzkxuOf4"',
    "mtime": "2026-11-20T08:59:46.532Z",
    "size": 4219,
    "path": "../public/assets/cookies-FWCqMf5w.js"
  },
  "/assets/credit-card-oqH0JSk1.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d0-fQqiHf86t8o9UFqBlbl/Ux5LlNs"',
    "mtime": "2026-11-20T08:59:46.532Z",
    "size": 208,
    "path": "../public/assets/credit-card-oqH0JSk1.js"
  },
  "/assets/dialog-DeKJzDtF.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"163c-95CzjgJFKgQ4AsF7NzmITfaVdyY"',
    "mtime": "2026-11-20T08:59:46.532Z",
    "size": 5692,
    "path": "../public/assets/dialog-DeKJzDtF.js"
  },
  "/assets/culturehijab-shot-BUNTu7SV.jpg": {
    "type": "image/jpeg",
    "etag": '"122d1-PTfot9g7NqDKZ960Lnf8od0gcBw"',
    "mtime": "2026-11-20T08:59:46.522Z",
    "size": 74449,
    "path": "../public/assets/culturehijab-shot-BUNTu7SV.jpg"
  },
  "/assets/custom-software-vs-saas-cover-DaX6iGZ3.jpg": {
    "type": "image/jpeg",
    "etag": '"10b43-oz9n9j15KBCDy/jwrhcqcqIan6U"',
    "mtime": "2026-11-20T08:59:46.506Z",
    "size": 68419,
    "path": "../public/assets/custom-software-vs-saas-cover-DaX6iGZ3.jpg"
  },
  "/assets/digital-marketing-funnel-2026-cover-CUUllh_Z.jpg": {
    "type": "image/jpeg",
    "etag": '"9ff2-Z8LxRgvEvj/IulMLkYAyyzBVYZ8"',
    "mtime": "2026-11-20T08:59:46.522Z",
    "size": 40946,
    "path": "../public/assets/digital-marketing-funnel-2026-cover-CUUllh_Z.jpg"
  },
  "/assets/culturehijab-logo-D3bqhgE4.png": {
    "type": "image/png",
    "etag": '"22971-BVK7OZK/iRzfd4FBunhqz65X1CI"',
    "mtime": "2026-11-20T08:59:46.522Z",
    "size": 141681,
    "path": "../public/assets/culturehijab-logo-D3bqhgE4.png"
  },
  "/assets/dollar-sign-Blz_Pzli.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"dc-rhdBpmNmXfSYGZxIpS/Yn1JpZUc"',
    "mtime": "2026-11-20T08:59:46.532Z",
    "size": 220,
    "path": "../public/assets/dollar-sign-Blz_Pzli.js"
  },
  "/assets/dubaisafari-logo-BnDscaRJ.svg": {
    "type": "image/svg+xml",
    "etag": '"30af0-ozDoO3WQ4JS1+k9UghcbiWHIy4I"',
    "mtime": "2026-11-20T08:59:46.522Z",
    "size": 199408,
    "path": "../public/assets/dubaisafari-logo-BnDscaRJ.svg"
  },
  "/assets/enfieldroyal-logo-BwZIimsL.png": {
    "type": "image/png",
    "etag": '"46cc-m4oGBddi77ohabHMddECjW0p7zw"',
    "mtime": "2026-11-20T08:59:46.522Z",
    "size": 18124,
    "path": "../public/assets/enfieldroyal-logo-BwZIimsL.png"
  },
  "/assets/electrolux-power-H5vBuifN.jpg": {
    "type": "image/jpeg",
    "etag": '"fcf9-fJjlbY9s7bmkOM7890gLmlYiLys"',
    "mtime": "2026-11-20T08:59:46.532Z",
    "size": 64761,
    "path": "../public/assets/electrolux-power-H5vBuifN.jpg"
  },
  "/assets/evolve-lagree-D6V1KWey.jpg": {
    "type": "image/jpeg",
    "etag": '"fbd7-KpNZ2Y9cjwQ/JWufMPDnXkTBy94"',
    "mtime": "2026-11-20T08:59:46.522Z",
    "size": 64471,
    "path": "../public/assets/evolve-lagree-D6V1KWey.jpg"
  },
  "/assets/ecommerce-conversion-optimization-cover-CnvmBYA9.jpg": {
    "type": "image/jpeg",
    "etag": '"134fa-UIMk0hBgvAU078C9NSDZ0fvYZ9U"',
    "mtime": "2026-11-20T08:59:46.522Z",
    "size": 79098,
    "path": "../public/assets/ecommerce-conversion-optimization-cover-CnvmBYA9.jpg"
  },
  "/assets/dubaisafari-shot-BFszq4vD.jpg": {
    "type": "image/jpeg",
    "etag": '"36395-vAVus0Nlz/cle1Z0fFzkvO34hlY"',
    "mtime": "2026-11-20T08:59:46.522Z",
    "size": 222101,
    "path": "../public/assets/dubaisafari-shot-BFszq4vD.jpg"
  },
  "/assets/enfieldroyal-shot-k1A-UlBh.jpg": {
    "type": "image/jpeg",
    "etag": '"1b6d0-Zk48anROi9VT8fObpmIF0uaosUw"',
    "mtime": "2026-11-20T08:59:46.522Z",
    "size": 112336,
    "path": "../public/assets/enfieldroyal-shot-k1A-UlBh.jpg"
  },
  "/assets/erp-implementation-guide-cover-CjBDMogv.jpg": {
    "type": "image/jpeg",
    "etag": '"d92c-e9XhRkoJMgjW9BQSnxUOFH6shHU"',
    "mtime": "2026-11-20T08:59:46.522Z",
    "size": 55596,
    "path": "../public/assets/erp-implementation-guide-cover-CjBDMogv.jpg"
  },
  "/assets/exposksa-shot-CPNfTjTH.jpg": {
    "type": "image/jpeg",
    "etag": '"33c91-rR0vm87Omw16NQpf8eWBBcgCm7Q"',
    "mtime": "2026-11-20T08:59:46.522Z",
    "size": 212113,
    "path": "../public/assets/exposksa-shot-CPNfTjTH.jpg"
  },
  "/assets/git-branch-GbyBWa6t.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"166-qB/6HtBgQOJLFECBihgu39FDaf4"',
    "mtime": "2026-11-20T08:59:46.532Z",
    "size": 358,
    "path": "../public/assets/git-branch-GbyBWa6t.js"
  },
  "/assets/eye-BsAdS7KF.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"101-b6r4DqCm4AsyhNFZQqo/lgHeqCQ"',
    "mtime": "2026-11-20T08:59:46.532Z",
    "size": 257,
    "path": "../public/assets/eye-BsAdS7KF.js"
  },
  "/assets/Footer-CtAtiDSx.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"23931-2qJAAfaY7xeJQAOHAcOnKpEUW8U"',
    "mtime": "2026-11-20T08:59:46.532Z",
    "size": 145713,
    "path": "../public/assets/Footer-CtAtiDSx.js"
  },
  "/assets/glowie-shot-BYNlVIC2.jpg": {
    "type": "image/jpeg",
    "etag": '"10c6d-DsxcjlJQ6O1/+jIYUDpYEt/eYU4"',
    "mtime": "2026-11-20T08:59:46.522Z",
    "size": 68717,
    "path": "../public/assets/glowie-shot-BYNlVIC2.jpg"
  },
  "/assets/ImageUpload-CIfAtEi4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"7c7-LAEn9ii/LV1FlpIMYXsCLVkWdJo"',
    "mtime": "2026-11-20T08:59:46.532Z",
    "size": 1991,
    "path": "../public/assets/ImageUpload-CIfAtEi4.js"
  },
  "/assets/hazelbeautybar-shot-bF8ZXg3N.jpg": {
    "type": "image/jpeg",
    "etag": '"a597-LIvLW8xVY4eKro+zTPaL8wBM+Mg"',
    "mtime": "2026-11-20T08:59:46.522Z",
    "size": 42391,
    "path": "../public/assets/hazelbeautybar-shot-bF8ZXg3N.jpg"
  },
  "/assets/guides.ai-for-small-business-CggeFXGC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2e03-pTaSEjSkNfO1xDV3mhPccf5gJtk"',
    "mtime": "2026-11-20T08:59:46.532Z",
    "size": 11779,
    "path": "../public/assets/guides.ai-for-small-business-CggeFXGC.js"
  },
  "/assets/heart-DX6IK9vM.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"103-5VzXFR9hhu/ZxPTj+1R49oxeb2g"',
    "mtime": "2026-11-20T08:59:46.532Z",
    "size": 259,
    "path": "../public/assets/heart-DX6IK9vM.js"
  },
  "/assets/extends-Cewap6VE.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"da268-6IctmZE/S3QeZ4sfYQyN9JAUi+c"',
    "mtime": "2026-11-20T08:59:46.537Z",
    "size": 893544,
    "path": "../public/assets/extends-Cewap6VE.js"
  },
  "/assets/index-CGikvltn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"27a-3BKxKjftGb3GnARVddQ2CmMAT/Q"',
    "mtime": "2026-11-20T08:59:46.532Z",
    "size": 634,
    "path": "../public/assets/index-CGikvltn.js"
  },
  "/assets/index-CKxpEYGY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"9e1b-zHyamURXsw5C2WKEhFrcytOb3D4"',
    "mtime": "2026-11-20T08:59:46.532Z",
    "size": 40475,
    "path": "../public/assets/index-CKxpEYGY.js"
  },
  "/assets/index-DZrGMZrG.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13dca-O2rWBJ1Ziu1coQbUObvLkOfGX+o"',
    "mtime": "2026-11-20T08:59:46.532Z",
    "size": 81354,
    "path": "../public/assets/index-DZrGMZrG.js"
  },
  "/assets/loader-circle-CL2KXTBR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"91-tczSIMaH0Me/8OCuXP0MRC2cGsU"',
    "mtime": "2026-11-20T08:59:46.532Z",
    "size": 145,
    "path": "../public/assets/loader-circle-CL2KXTBR.js"
  },
  "/assets/index-dS849_Qf.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6895-nr43fa/PsbnrkG14KNaaT+rJ8qk"',
    "mtime": "2026-11-20T08:59:46.532Z",
    "size": 26773,
    "path": "../public/assets/index-dS849_Qf.js"
  },
  "/assets/inbox-D7-vEKND.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"11f-bebHZPLUzMAQwOLYmP++noLD7hk"',
    "mtime": "2026-11-20T08:59:46.532Z",
    "size": 287,
    "path": "../public/assets/inbox-D7-vEKND.js"
  },
  "/assets/lock-aDOAqx2O.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"cf-6ONTPLJqk1rvAGdItcZWv2XmOPY"',
    "mtime": "2026-11-20T08:59:46.532Z",
    "size": 207,
    "path": "../public/assets/lock-aDOAqx2O.js"
  },
  "/assets/label-wePogpL4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"484-CkjOts42/sjHTEg4m9vtvd6szv4"',
    "mtime": "2026-11-20T08:59:46.532Z",
    "size": 1156,
    "path": "../public/assets/label-wePogpL4.js"
  },
  "/assets/luxmark-logo-DtsuxfhK.jpg": {
    "type": "image/jpeg",
    "etag": '"1118-1L1M57KKRhg/fjBTSWbDFO+476o"',
    "mtime": "2026-11-20T08:59:46.522Z",
    "size": 4376,
    "path": "../public/assets/luxmark-logo-DtsuxfhK.jpg"
  },
  "/assets/myexploreislam-logo-mPqwxpUf.png": {
    "type": "image/png",
    "etag": '"48cc-iQXZdR7fqibkxEni8Kz/YaLrjzM"',
    "mtime": "2026-11-20T08:59:46.522Z",
    "size": 18636,
    "path": "../public/assets/myexploreislam-logo-mPqwxpUf.png"
  },
  "/assets/minus-BN8h3P6r.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"76-P91cDm15ZpGBV8pI1dzw3rjgjRI"',
    "mtime": "2026-11-20T08:59:46.532Z",
    "size": 118,
    "path": "../public/assets/minus-BN8h3P6r.js"
  },
  "/assets/mr-pure-water-Ba4yWh3W.jpg": {
    "type": "image/jpeg",
    "etag": '"17fb1-Coi+fn5R5pYsEYUVxDdIutnvpUE"',
    "mtime": "2026-11-20T08:59:46.532Z",
    "size": 98225,
    "path": "../public/assets/mr-pure-water-Ba4yWh3W.jpg"
  },
  "/assets/luxmark-shot-BanIeJdg.jpg": {
    "type": "image/jpeg",
    "etag": '"1e689-EMh5JWKf0hfJQTP96/tyKXr8q7w"',
    "mtime": "2026-11-20T08:59:46.522Z",
    "size": 124553,
    "path": "../public/assets/luxmark-shot-BanIeJdg.jpg"
  },
  "/assets/myexploreislam-shot-BRGqW3Qi.jpg": {
    "type": "image/jpeg",
    "etag": '"136f7-xV4jY7WJPbeDhUllr47Hx1uCCD4"',
    "mtime": "2026-11-20T08:59:46.522Z",
    "size": 79607,
    "path": "../public/assets/myexploreislam-shot-BRGqW3Qi.jpg"
  },
  "/assets/origami99-logo-white-DbBl43xP.png": {
    "type": "image/png",
    "etag": '"76fb-Y6ow6lm1QssIUjpe+4NwEJBJS+g"',
    "mtime": "2026-11-20T08:59:46.522Z",
    "size": 30459,
    "path": "../public/assets/origami99-logo-white-DbBl43xP.png"
  },
  "/assets/origami99-logo-Cp3nFqPZ.png": {
    "type": "image/png",
    "etag": '"7411-9DOMoFqSxlkl1A9jH+MFl9vZ6w0"',
    "mtime": "2026-11-20T08:59:46.522Z",
    "size": 29713,
    "path": "../public/assets/origami99-logo-Cp3nFqPZ.png"
  },
  "/assets/PageHeader-BkSBmfIq.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1b8-fKlWYpHczucELjl8BoOov454KT4"',
    "mtime": "2026-11-20T08:59:46.532Z",
    "size": 440,
    "path": "../public/assets/PageHeader-BkSBmfIq.js"
  },
  "/assets/plus-UkZttIKc.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"9a-cS3/nko4rqjA9PPJu13ssPitUcE"',
    "mtime": "2026-11-20T08:59:46.532Z",
    "size": 154,
    "path": "../public/assets/plus-UkZttIKc.js"
  },
  "/assets/PlatformsBackground-DMd9CNwK.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d893-qyN6JUYf35F2o8ywPbivDHjXM1U"',
    "mtime": "2026-11-20T08:59:46.532Z",
    "size": 55443,
    "path": "../public/assets/PlatformsBackground-DMd9CNwK.js"
  },
  "/assets/pos-and-loyalty-2026-cover-D8D6rPJZ.jpg": {
    "type": "image/jpeg",
    "etag": '"e3bd-oFLs2R+4dZI7hbGR65F7Mmhqj1A"',
    "mtime": "2026-11-20T08:59:46.522Z",
    "size": 58301,
    "path": "../public/assets/pos-and-loyalty-2026-cover-D8D6rPJZ.jpg"
  },
  "/assets/Platforms-N52ACije.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1389a-/YrEWfJ6WIsr1ZTZVx43eopLLFU"',
    "mtime": "2026-11-20T08:59:46.532Z",
    "size": 80026,
    "path": "../public/assets/Platforms-N52ACije.js"
  },
  "/assets/powercabs-book-ride-D3jiQ5k_.jpg": {
    "type": "image/jpeg",
    "etag": '"26b2b-UTGbTbIen7O3BGFX+GnEv8V7jMI"',
    "mtime": "2026-11-20T08:59:46.522Z",
    "size": 158507,
    "path": "../public/assets/powercabs-book-ride-D3jiQ5k_.jpg"
  },
  "/assets/powercabs-create-order-B98cD61t.jpg": {
    "type": "image/jpeg",
    "etag": '"1f288-nqnOfnNXZcZ6HVLV+usTH8Q8eOQ"',
    "mtime": "2026-11-20T08:59:46.522Z",
    "size": 127624,
    "path": "../public/assets/powercabs-create-order-B98cD61t.jpg"
  },
  "/assets/index-BRKNEHGX.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"940ab-zfrveKorOCOo++xV8reEjU3VY3E"',
    "mtime": "2026-11-20T08:59:46.536Z",
    "size": 606379,
    "path": "../public/assets/index-BRKNEHGX.js"
  },
  "/assets/powercabs-dashboard-D9z0G6JC.jpg": {
    "type": "image/jpeg",
    "etag": '"10db4-vpC/BEuh+LdgymFk72MmYfF+u2I"',
    "mtime": "2026-11-20T08:59:46.522Z",
    "size": 69044,
    "path": "../public/assets/powercabs-dashboard-D9z0G6JC.jpg"
  },
  "/assets/PremiumServicePage-CY1QxLYS.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d189-RKLdQPOHaKMM3iXY1cXezLwi5Xg"',
    "mtime": "2026-11-20T08:59:46.532Z",
    "size": 53641,
    "path": "../public/assets/PremiumServicePage-CY1QxLYS.js"
  },
  "/assets/rocket-xxpH8-XO.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"230-D26/4+VVglQiC/0XHyMdiMCZFHg"',
    "mtime": "2026-11-20T08:59:46.532Z",
    "size": 560,
    "path": "../public/assets/rocket-xxpH8-XO.js"
  },
  "/assets/powercabs-mobile-app-jV-8su1H.jpg": {
    "type": "image/jpeg",
    "etag": '"10e8c-C9Go+3azknMHrG7whr30My9maEE"',
    "mtime": "2026-11-20T08:59:46.522Z",
    "size": 69260,
    "path": "../public/assets/powercabs-mobile-app-jV-8su1H.jpg"
  },
  "/assets/real-estate-crm-buyers-guide-cover-Cu599sNw.jpg": {
    "type": "image/jpeg",
    "etag": '"cd6c-BNR1leWr+6njviQURoex4pFgWxo"',
    "mtime": "2026-11-20T08:59:46.522Z",
    "size": 52588,
    "path": "../public/assets/real-estate-crm-buyers-guide-cover-Cu599sNw.jpg"
  },
  "/assets/sanjoseheatcooling-logo-DviCFJQ6.png": {
    "type": "image/png",
    "etag": '"5288-vxEtLMv89nAS6RcE8zn3bRqhK4w"',
    "mtime": "2026-11-20T08:59:46.522Z",
    "size": 21128,
    "path": "../public/assets/sanjoseheatcooling-logo-DviCFJQ6.png"
  },
  "/assets/proj-f79c-lSolL8cK.jpg": {
    "type": "image/jpeg",
    "etag": '"9720-oibNPjY4XxUGhouaGPYwAXBpGP0"',
    "mtime": "2026-11-20T08:59:46.532Z",
    "size": 38688,
    "path": "../public/assets/proj-f79c-lSolL8cK.jpg"
  },
  "/assets/powercabs-live-orders-CXrLeUBZ.jpg": {
    "type": "image/jpeg",
    "etag": '"29985-fww6Zoe+H3v+vt907laC8oSp1fs"',
    "mtime": "2026-11-20T08:59:46.522Z",
    "size": 170373,
    "path": "../public/assets/powercabs-live-orders-CXrLeUBZ.jpg"
  },
  "/assets/realtoratif-shot-xkSf3KC8.jpg": {
    "type": "image/jpeg",
    "etag": '"19342-F5Es5nmhwVh/HBOP3VSTB+lbEZU"',
    "mtime": "2026-11-20T08:59:46.522Z",
    "size": 103234,
    "path": "../public/assets/realtoratif-shot-xkSf3KC8.jpg"
  },
  "/assets/privacy-DgxYMQnV.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"27ac-XFqPsN+yMbgqStSPRQQFAiWxWow"',
    "mtime": "2026-11-20T08:59:46.532Z",
    "size": 10156,
    "path": "../public/assets/privacy-DgxYMQnV.js"
  },
  "/assets/powercabs-employees-BxKDABGw.jpg": {
    "type": "image/jpeg",
    "etag": '"10165-S9UEDzC/C/b6IzOxJWaER6r2YCM"',
    "mtime": "2026-11-20T08:59:46.522Z",
    "size": 65893,
    "path": "../public/assets/powercabs-employees-BxKDABGw.jpg"
  },
  "/assets/Scene3D-MJEMmF_s.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2fad-uUVrLz9jlCliEgsbDnDFYUZVcCs"',
    "mtime": "2026-11-20T08:59:46.532Z",
    "size": 12205,
    "path": "../public/assets/Scene3D-MJEMmF_s.js"
  },
  "/assets/services.brand-identity-Dm3h1LM5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"989-z3Dp4+V6kCar6xmREJWgq4nazK0"',
    "mtime": "2026-11-20T08:59:46.532Z",
    "size": 2441,
    "path": "../public/assets/services.brand-identity-Dm3h1LM5.js"
  },
  "/assets/rxl-usa-BkRtggx6.jpg": {
    "type": "image/jpeg",
    "etag": '"d972-Fb5P+tvMz47FMss5KGdLW1VkI8Y"',
    "mtime": "2026-11-20T08:59:46.532Z",
    "size": 55666,
    "path": "../public/assets/rxl-usa-BkRtggx6.jpg"
  },
  "/assets/seo-for-ai-search-cover-CWIpHhA7.jpg": {
    "type": "image/jpeg",
    "etag": '"bf33-esVxIKniDcVbXKFPHqiRpnbNL0Y"',
    "mtime": "2026-11-20T08:59:46.522Z",
    "size": 48947,
    "path": "../public/assets/seo-for-ai-search-cover-CWIpHhA7.jpg"
  },
  "/assets/select-TquLIXXC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"757d-0cZu5IgdMFgIXb5O5qIPGNc20Nk"',
    "mtime": "2026-11-20T08:59:46.532Z",
    "size": 30077,
    "path": "../public/assets/select-TquLIXXC.js"
  },
  "/assets/services.digital-marketing-BstC3xhe.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"5f-SqStlWsuIKTT25xutp2ZoRAkx9Q"',
    "mtime": "2026-11-20T08:59:46.532Z",
    "size": 95,
    "path": "../public/assets/services.digital-marketing-BstC3xhe.js"
  },
  "/assets/services.digital-marketing.index-D0k-ZCGc.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"99f-9VnnROa+9V+h/MF6yqOXkz9P77o"',
    "mtime": "2026-11-20T08:59:46.532Z",
    "size": 2463,
    "path": "../public/assets/services.digital-marketing.index-D0k-ZCGc.js"
  },
  "/assets/sanjoseheatcooling-shot-CzNPnZMi.jpg": {
    "type": "image/jpeg",
    "etag": '"41734-rC0BO/sQjxCSc3QZPnZulSTNiPY"',
    "mtime": "2026-11-20T08:59:46.522Z",
    "size": 268084,
    "path": "../public/assets/sanjoseheatcooling-shot-CzNPnZMi.jpg"
  },
  "/assets/services.digital-marketing.google-ads-7saw6b4j.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"23ce-+Z/sMLHUioy/xymRmBBhxRjjuuY"',
    "mtime": "2026-11-20T08:59:46.532Z",
    "size": 9166,
    "path": "../public/assets/services.digital-marketing.google-ads-7saw6b4j.js"
  },
  "/assets/services.digital-marketing.meta-ads-C20vo2XY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"20e5-XjR+Ns0iHZz78QsA2mbJwx6NM18"',
    "mtime": "2026-11-20T08:59:46.532Z",
    "size": 8421,
    "path": "../public/assets/services.digital-marketing.meta-ads-C20vo2XY.js"
  },
  "/assets/services.digital-marketing.full-funnel-digital-marketing-By52DgCV.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"18e1-mQ7bqfmCNLgNpP5735uPbzkBJz4"',
    "mtime": "2026-11-20T08:59:46.532Z",
    "size": 6369,
    "path": "../public/assets/services.digital-marketing.full-funnel-digital-marketing-By52DgCV.js"
  },
  "/assets/services.digital-marketing.tiktok-short-form-ads-CxUXekn_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1b08-xwdYwhNQ+3+148TgW/Ao1UmqxR4"',
    "mtime": "2026-11-20T08:59:46.532Z",
    "size": 6920,
    "path": "../public/assets/services.digital-marketing.tiktok-short-form-ads-CxUXekn_.js"
  },
  "/assets/services.digital-marketing.video-editing-production-BdjfoILz.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1ebf-CKF6UZH0R4Gsozq/DgFHp/jra50"',
    "mtime": "2026-11-20T08:59:46.532Z",
    "size": 7871,
    "path": "../public/assets/services.digital-marketing.video-editing-production-BdjfoILz.js"
  },
  "/assets/services.software-6OTTJPfR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"5f-SqStlWsuIKTT25xutp2ZoRAkx9Q"',
    "mtime": "2026-11-20T08:59:46.532Z",
    "size": 95,
    "path": "../public/assets/services.software-6OTTJPfR.js"
  },
  "/assets/services.seo-8BBXkHie.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"7345-HFmOb13oSs7hDnU/NNS1HCxkCHc"',
    "mtime": "2026-11-20T08:59:46.532Z",
    "size": 29509,
    "path": "../public/assets/services.seo-8BBXkHie.js"
  },
  "/assets/services.software.index-DnFSS8J7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"9ee-EGZZPAWXgvbFQUQ8OLZIGckYtW8"',
    "mtime": "2026-11-20T08:59:46.532Z",
    "size": 2542,
    "path": "../public/assets/services.software.index-DnFSS8J7.js"
  },
  "/assets/services.software.custom-saas-products-DxHKic2N.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2be7-4mQFiUHGZ8dzQPpDtEqidSWgbTc"',
    "mtime": "2026-11-20T08:59:46.532Z",
    "size": 11239,
    "path": "../public/assets/services.software.custom-saas-products-DxHKic2N.js"
  },
  "/assets/services.software.erp-development-BP5sMJyz.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"22b4-dbJ0CBA/jf2wtUw8POGv5vnSCsw"',
    "mtime": "2026-11-20T08:59:46.532Z",
    "size": 8884,
    "path": "../public/assets/services.software.erp-development-BP5sMJyz.js"
  },
  "/assets/services.software.mobile-app-development-Bh6lWV0g.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"24fe-TGqc1aBYBjoTX9T02emNPBzb0/A"',
    "mtime": "2026-11-20T08:59:46.532Z",
    "size": 9470,
    "path": "../public/assets/services.software.mobile-app-development-Bh6lWV0g.js"
  },
  "/assets/services.software.ui-ux-design-BZijjeYi.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"214b-qYeLvtXCR+ynrMSclQhNkxRfZog"',
    "mtime": "2026-11-20T08:59:46.532Z",
    "size": 8523,
    "path": "../public/assets/services.software.ui-ux-design-BZijjeYi.js"
  },
  "/assets/services.web-development.shopify-ecommerce-DeczrL9i.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"26a4-3LnH4XypE6VmWUQsKAiYgUGAUNo"',
    "mtime": "2026-11-20T08:59:46.532Z",
    "size": 9892,
    "path": "../public/assets/services.web-development.shopify-ecommerce-DeczrL9i.js"
  },
  "/assets/services.web-development-6OTTJPfR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"5f-SqStlWsuIKTT25xutp2ZoRAkx9Q"',
    "mtime": "2026-11-20T08:59:46.532Z",
    "size": 95,
    "path": "../public/assets/services.web-development-6OTTJPfR.js"
  },
  "/assets/services.software.custom-software-development-CmnSTT5L.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4d00-rkPmb1D1nRRPhM8BWU9lYNvEgGM"',
    "mtime": "2026-11-20T08:59:46.532Z",
    "size": 19712,
    "path": "../public/assets/services.software.custom-software-development-CmnSTT5L.js"
  },
  "/assets/services.web-development.index-B2SZcjlE.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"978-4xtVWg343uE6bbpK/8E0sCjq8dM"',
    "mtime": "2026-11-20T08:59:46.532Z",
    "size": 2424,
    "path": "../public/assets/services.web-development.index-B2SZcjlE.js"
  },
  "/assets/services.web-development.custom-web-development-C4Iyflt2.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"69ac-cmtxCpeXYPh5XxYQzWLCyIn/RoI"',
    "mtime": "2026-11-20T08:59:46.532Z",
    "size": 27052,
    "path": "../public/assets/services.web-development.custom-web-development-C4Iyflt2.js"
  },
  "/assets/services.web-development.wix-no-code-DK8oijIT.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1c22-GosFN+VI/RfFlhx+yNyxKAVNuc4"',
    "mtime": "2026-11-20T08:59:46.532Z",
    "size": 7202,
    "path": "../public/assets/services.web-development.wix-no-code-DK8oijIT.js"
  },
  "/assets/services._slug-DNTTM_xO.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"5763-i9yz2fxTTZY8XTYv/jsl/Los4/8"',
    "mtime": "2026-11-20T08:59:46.532Z",
    "size": 22371,
    "path": "../public/assets/services._slug-DNTTM_xO.js"
  },
  "/assets/services.web-development.webflow-framer-Dp2be1Zw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1e37-wDZ6QbypDhDfcKPj4XM5V5fCmpU"',
    "mtime": "2026-11-20T08:59:46.532Z",
    "size": 7735,
    "path": "../public/assets/services.web-development.webflow-framer-Dp2be1Zw.js"
  },
  "/assets/services.web-development.wordpress-development-GMvT0pot.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"23f9-NjcyDxzbdqp4b9REyoiuyvn+gb8"',
    "mtime": "2026-11-20T08:59:46.532Z",
    "size": 9209,
    "path": "../public/assets/services.web-development.wordpress-development-GMvT0pot.js"
  },
  "/assets/services._slug-BC3NM08e.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"19d-8/uDpx0z+9fxyz0Jc3jb7/pZkKY"',
    "mtime": "2026-11-20T08:59:46.532Z",
    "size": 413,
    "path": "../public/assets/services._slug-BC3NM08e.js"
  },
  "/assets/shield-BDc4uRME.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"111-GiQoZMhvylGXG+F2rska1GgxJE4"',
    "mtime": "2026-11-20T08:59:46.532Z",
    "size": 273,
    "path": "../public/assets/shield-BDc4uRME.js"
  },
  "/assets/services._slug-BZaC3eBS.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"11c-McspDzQ0JbuV9Dl/3Nsv+yTWRBA"',
    "mtime": "2026-11-20T08:59:46.532Z",
    "size": 284,
    "path": "../public/assets/services._slug-BZaC3eBS.js"
  },
  "/assets/shield-check-CcAiPrih.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"141-8PKs1beqrkftDEQ8e9FZNV0aSJ0"',
    "mtime": "2026-11-20T08:59:46.532Z",
    "size": 321,
    "path": "../public/assets/shield-check-CcAiPrih.js"
  },
  "/assets/silentedgeco-logo-BW1NJjA_.png": {
    "type": "image/png",
    "etag": '"2d2b-gWNhkcMY0K2eEfX6uW2bc+RTaC4"',
    "mtime": "2026-11-20T08:59:46.522Z",
    "size": 11563,
    "path": "../public/assets/silentedgeco-logo-BW1NJjA_.png"
  },
  "/assets/shopify-vs-headless-cover-Di3-RyCV.jpg": {
    "type": "image/jpeg",
    "etag": '"160bb-YTM7PfkAqN1Lbx+zK66dEPOgRKw"',
    "mtime": "2026-11-20T08:59:46.522Z",
    "size": 90299,
    "path": "../public/assets/shopify-vs-headless-cover-Di3-RyCV.jpg"
  },
  "/assets/silentedgeco-shot-6IMIXHrZ.jpg": {
    "type": "image/jpeg",
    "etag": '"21d1b-ugY0oVSCGbKXxdfKoh+KvmTR6Q0"',
    "mtime": "2026-11-20T08:59:46.522Z",
    "size": 138523,
    "path": "../public/assets/silentedgeco-shot-6IMIXHrZ.jpg"
  },
  "/assets/snz-student-lUI5mnuL.jpg": {
    "type": "image/jpeg",
    "etag": '"c2c8-Hh3ezNnobgV7W3AqDWof35AkEb8"',
    "mtime": "2026-11-20T08:59:46.532Z",
    "size": 49864,
    "path": "../public/assets/snz-student-lUI5mnuL.jpg"
  },
  "/assets/snz-gateway-DxUg2Qe8.jpg": {
    "type": "image/jpeg",
    "etag": '"157d9-nf6YEd0/sA6W25g9Ojicrp2ixf4"',
    "mtime": "2026-11-20T08:59:46.532Z",
    "size": 88025,
    "path": "../public/assets/snz-gateway-DxUg2Qe8.jpg"
  },
  "/assets/star-PRrf56Q4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1d9-hBT21fXiYigEwNI8q3GpTHeDPl8"',
    "mtime": "2026-11-20T08:59:46.532Z",
    "size": 473,
    "path": "../public/assets/star-PRrf56Q4.js"
  },
  "/assets/snzventures-shot-Dff3qoEt.jpg": {
    "type": "image/jpeg",
    "etag": '"2a3e1-PQ6Qu16h8cWrPf8uIqXKK+aBaL8"',
    "mtime": "2026-11-20T08:59:46.522Z",
    "size": 173025,
    "path": "../public/assets/snzventures-shot-Dff3qoEt.jpg"
  },
  "/assets/switch-5Y6SIoyj.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"10a1-qn6AHRMjJ7MXCjY63AWdPd1v6vg"',
    "mtime": "2026-11-20T08:59:46.532Z",
    "size": 4257,
    "path": "../public/assets/switch-5Y6SIoyj.js"
  },
  "/assets/susan-shot-Co1VNx0d.jpg": {
    "type": "image/jpeg",
    "etag": '"977b-TqfvLHaXdB97YtVfzQ+h2eOvMLU"',
    "mtime": "2026-11-20T08:59:46.522Z",
    "size": 38779,
    "path": "../public/assets/susan-shot-Co1VNx0d.jpg"
  },
  "/assets/t1-sara-CSkDOztZ.jpg": {
    "type": "image/jpeg",
    "etag": '"46cc-J650ilP3BOGe5FadmofllaxCgvU"',
    "mtime": "2026-11-20T08:59:46.522Z",
    "size": 18124,
    "path": "../public/assets/t1-sara-CSkDOztZ.jpg"
  },
  "/assets/t10-fahad-CXJ6Woh0.jpg": {
    "type": "image/jpeg",
    "etag": '"55ca-j2LZjXdAgca63r0VhGwWqqJenHo"',
    "mtime": "2026-11-20T08:59:46.522Z",
    "size": 21962,
    "path": "../public/assets/t10-fahad-CXJ6Woh0.jpg"
  },
  "/assets/styles-CAlFJpJv.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"2df8d-NvUC2+MP3P+yK84iMVP2oSvK0Fo"',
    "mtime": "2026-11-20T08:59:46.532Z",
    "size": 188301,
    "path": "../public/assets/styles-CAlFJpJv.css"
  },
  "/assets/t12-ben-Co-OtvgW.jpg": {
    "type": "image/jpeg",
    "etag": '"4e72-jcyJy9kjC0XxQCv+I2RcuLUvchA"',
    "mtime": "2026-11-20T08:59:46.522Z",
    "size": 20082,
    "path": "../public/assets/t12-ben-Co-OtvgW.jpg"
  },
  "/assets/t2-james-rDRNdij6.jpg": {
    "type": "image/jpeg",
    "etag": '"4c72-Ajc5j67OS9604z6QkbHN3e81m2E"',
    "mtime": "2026-11-20T08:59:46.522Z",
    "size": 19570,
    "path": "../public/assets/t2-james-rDRNdij6.jpg"
  },
  "/assets/t11-layla-DNw_QoZw.jpg": {
    "type": "image/jpeg",
    "etag": '"6ebd-rbiEuV0NJ1Nw7iccf0QEdINfWbg"',
    "mtime": "2026-11-20T08:59:46.522Z",
    "size": 28349,
    "path": "../public/assets/t11-layla-DNw_QoZw.jpg"
  },
  "/assets/t3-priya-9vjPIcyw.jpg": {
    "type": "image/jpeg",
    "etag": '"4cf5-d2Luo8A2S1KB5t7TmOo1PpqGA+8"',
    "mtime": "2026-11-20T08:59:46.522Z",
    "size": 19701,
    "path": "../public/assets/t3-priya-9vjPIcyw.jpg"
  },
  "/assets/t4-david-BFCOJcUp.jpg": {
    "type": "image/jpeg",
    "etag": '"42f2-fUiwMbmbXr4AHnVx4kTFlwT87So"',
    "mtime": "2026-11-20T08:59:46.522Z",
    "size": 17138,
    "path": "../public/assets/t4-david-BFCOJcUp.jpg"
  },
  "/assets/t7-rachel-p1J6oJL3.jpg": {
    "type": "image/jpeg",
    "etag": '"6544-43Shi/AHtjGtjnHYrK6qxL/YgYE"',
    "mtime": "2026-11-20T08:59:46.522Z",
    "size": 25924,
    "path": "../public/assets/t7-rachel-p1J6oJL3.jpg"
  },
  "/assets/t6-antti-xUbOj62i.jpg": {
    "type": "image/jpeg",
    "etag": '"4db0-+Wq91LiCM/YxCdhECMjPiw4MeIE"',
    "mtime": "2026-11-20T08:59:46.522Z",
    "size": 19888,
    "path": "../public/assets/t6-antti-xUbOj62i.jpg"
  },
  "/assets/t5-mariam-D8XvIach.jpg": {
    "type": "image/jpeg",
    "etag": '"552a-+19Ml9kaiUvomlZAsnMHmsRqkOA"',
    "mtime": "2026-11-20T08:59:46.522Z",
    "size": 21802,
    "path": "../public/assets/t5-mariam-D8XvIach.jpg"
  },
  "/assets/t8-michael-DHS3NAp4.jpg": {
    "type": "image/jpeg",
    "etag": '"6526-Iv+GIbSjBa+VvxK1v3pbop7vVIU"',
    "mtime": "2026-11-20T08:59:46.522Z",
    "size": 25894,
    "path": "../public/assets/t8-michael-DHS3NAp4.jpg"
  },
  "/assets/t9-ahmed-CbEDAung.jpg": {
    "type": "image/jpeg",
    "etag": '"49fb-Y6l8EU/jS/nml6P1Cl78VTDNqhU"',
    "mtime": "2026-11-20T08:59:46.522Z",
    "size": 18939,
    "path": "../public/assets/t9-ahmed-CbEDAung.jpg"
  },
  "/assets/tamrsolutions-shot-D_1b_HBH.jpg": {
    "type": "image/jpeg",
    "etag": '"14107-WcJDriAS1WRt8ekGI5JxbTez7nM"',
    "mtime": "2026-11-20T08:59:46.522Z",
    "size": 82183,
    "path": "../public/assets/tamrsolutions-shot-D_1b_HBH.jpg"
  },
  "/assets/textarea-BeoZHhqF.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2cd-fsxxGaCTh9YedwqBy65h2VsBtk4"',
    "mtime": "2026-11-20T08:59:46.532Z",
    "size": 717,
    "path": "../public/assets/textarea-BeoZHhqF.js"
  },
  "/assets/thelongshotinc-logo-hgLjmdXi.jpg": {
    "type": "image/jpeg",
    "etag": '"18ea-74xPIDbzndPmRirdmU3qqyC6P/8"',
    "mtime": "2026-11-20T08:59:46.522Z",
    "size": 6378,
    "path": "../public/assets/thelongshotinc-logo-hgLjmdXi.jpg"
  },
  "/assets/Testimonials-tlJ4TDjI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2f30-icJBAvLnEI+0wplX8IiV3AVAp5w"',
    "mtime": "2026-11-20T08:59:46.532Z",
    "size": 12080,
    "path": "../public/assets/Testimonials-tlJ4TDjI.js"
  },
  "/assets/theductibles-shot-D9SGasUI.jpg": {
    "type": "image/jpeg",
    "etag": '"33079-Cuk2GJmssdWVKbyqiRbRAbdwtMQ"',
    "mtime": "2026-11-20T08:59:46.522Z",
    "size": 209017,
    "path": "../public/assets/theductibles-shot-D9SGasUI.jpg"
  },
  "/assets/trash-2-CgRdN8kQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"149-bbLuRVUlP7jDJ1d4oDAiC31N+E8"',
    "mtime": "2026-11-20T08:59:46.532Z",
    "size": 329,
    "path": "../public/assets/trash-2-CgRdN8kQ.js"
  },
  "/assets/thomas-forum-B9grMXe3.jpg": {
    "type": "image/jpeg",
    "etag": '"e10c-IaTBP5sqKEH64Pv5YXrB2SvMJ7A"',
    "mtime": "2026-11-20T08:59:46.522Z",
    "size": 57612,
    "path": "../public/assets/thomas-forum-B9grMXe3.jpg"
  },
  "/assets/thelongshotinc-shot-CQ1vD_FT.jpg": {
    "type": "image/jpeg",
    "etag": '"2406a-P3BguJy4wKPJElRrWEqUug/4rm8"',
    "mtime": "2026-11-20T08:59:46.522Z",
    "size": 147562,
    "path": "../public/assets/thelongshotinc-shot-CQ1vD_FT.jpg"
  },
  "/assets/truck-Bi-vDkaV.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"197-kfnWbNrY0gLGch016ez4qFM4fZ0"',
    "mtime": "2026-11-20T08:59:46.532Z",
    "size": 407,
    "path": "../public/assets/truck-Bi-vDkaV.js"
  },
  "/assets/trending-up-ry5Ceu-7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b0-f6559LnJyDpDVjoXL5e1dUaOS8Q"',
    "mtime": "2026-11-20T08:59:46.532Z",
    "size": 176,
    "path": "../public/assets/trending-up-ry5Ceu-7.js"
  },
  "/assets/use-mobile-ZsBaJoLh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"145-7be32mrjW08uMqTIG3HFCnzZH+c"',
    "mtime": "2026-11-20T08:59:46.532Z",
    "size": 325,
    "path": "../public/assets/use-mobile-ZsBaJoLh.js"
  },
  "/assets/Work-CRJzQSur.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"64b6-iab/WcfvE0c/mwMy33Y8AbNCtLY"',
    "mtime": "2026-11-20T08:59:46.532Z",
    "size": 25782,
    "path": "../public/assets/Work-CRJzQSur.js"
  },
  "/assets/use-transform-BIM6_hAb.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4f0-WxfPiLZ8bZV3qTkLReLh5hgI/rU"',
    "mtime": "2026-11-20T08:59:46.532Z",
    "size": 1264,
    "path": "../public/assets/use-transform-BIM6_hAb.js"
  },
  "/assets/useQuery-BBK2zO04.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2280-1dr6TbL8YjbUmFA4A9HAtawVvQ0"',
    "mtime": "2026-11-20T08:59:46.532Z",
    "size": 8832,
    "path": "../public/assets/useQuery-BBK2zO04.js"
  },
  "/assets/user-BXBjMP58.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"194-g8+95kUfv8z2V25V+4868A6r2c8"',
    "mtime": "2026-11-20T08:59:46.532Z",
    "size": 404,
    "path": "../public/assets/user-BXBjMP58.js"
  },
  "/assets/_shared-CSAN8ykZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1592-aLlbFzugO5MGSZx6pW+37tAQlok"',
    "mtime": "2026-11-20T08:59:46.532Z",
    "size": 5522,
    "path": "../public/assets/_shared-CSAN8ykZ.js"
  },
  "/assets/users-B3KmWuH4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"133-evku1VqsPoGVIyoOBBtW+6EQfbU"',
    "mtime": "2026-11-20T08:59:46.532Z",
    "size": 307,
    "path": "../public/assets/users-B3KmWuH4.js"
  },
  "/assets/utils-DCADjnpI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6b9b-tSfrzcIHWeVNKawNWV0bEDmYWfc"',
    "mtime": "2026-11-20T08:59:46.532Z",
    "size": 27547,
    "path": "../public/assets/utils-DCADjnpI.js"
  },
  "/assets/warehouse-management-automation-cover-DW0j3ef8.jpg": {
    "type": "image/jpeg",
    "etag": '"37863-7K9YB4uPS3xGpjjAjzQXP8TKsOQ"',
    "mtime": "2026-11-20T08:59:46.522Z",
    "size": 227427,
    "path": "../public/assets/warehouse-management-automation-cover-DW0j3ef8.jpg"
  },
  "/work/video/agog-travel.jpg": {
    "type": "image/jpeg",
    "etag": '"ddf6-4TyzORteSRLsfUPagEcXM+xt41w"',
    "mtime": "2026-08-21T13:05:20.461Z",
    "size": 56822,
    "path": "../public/work/video/agog-travel.jpg"
  },
  "/work/video/cmj-door.jpg": {
    "type": "image/jpeg",
    "etag": '"f262-WDTq6QUxvnR4mc6/uZ7TP8DyXmc"',
    "mtime": "2026-08-21T13:05:20.498Z",
    "size": 62050,
    "path": "../public/work/video/cmj-door.jpg"
  },
  "/work/video/alaya-noir.jpg": {
    "type": "image/jpeg",
    "etag": '"c42e-YB+skRMWJf1TN2o4ok2u5Q9vo28"',
    "mtime": "2026-08-21T13:05:20.476Z",
    "size": 50222,
    "path": "../public/work/video/alaya-noir.jpg"
  },
  "/work/video/axonpos.jpg": {
    "type": "image/jpeg",
    "etag": '"fed3-B2mSZDc0h/vraLji86pkh2kHPEo"',
    "mtime": "2026-08-21T13:05:20.492Z",
    "size": 65235,
    "path": "../public/work/video/axonpos.jpg"
  },
  "/work/video/ambient.jpg": {
    "type": "image/jpeg",
    "etag": '"f078-EtM+6ct/hKovDW6Wt9/XQj8wshk"',
    "mtime": "2026-08-21T13:05:20.484Z",
    "size": 61560,
    "path": "../public/work/video/ambient.jpg"
  },
  "/work/video/evolve-lagree.jpg": {
    "type": "image/jpeg",
    "etag": '"fbd7-KpNZ2Y9cjwQ/JWufMPDnXkTBy94"',
    "mtime": "2026-08-21T13:05:20.514Z",
    "size": 64471,
    "path": "../public/work/video/evolve-lagree.jpg"
  },
  "/work/video/proj-f79c.jpg": {
    "type": "image/jpeg",
    "etag": '"9720-oibNPjY4XxUGhouaGPYwAXBpGP0"',
    "mtime": "2026-08-21T13:05:20.533Z",
    "size": 38688,
    "path": "../public/work/video/proj-f79c.jpg"
  },
  "/work/video/electrolux-power.jpg": {
    "type": "image/jpeg",
    "etag": '"fcf9-fJjlbY9s7bmkOM7890gLmlYiLys"',
    "mtime": "2026-08-21T13:05:20.508Z",
    "size": 64761,
    "path": "../public/work/video/electrolux-power.jpg"
  },
  "/work/video/mr-pure-water.jpg": {
    "type": "image/jpeg",
    "etag": '"17fb1-Coi+fn5R5pYsEYUVxDdIutnvpUE"',
    "mtime": "2026-08-21T13:05:20.524Z",
    "size": 98225,
    "path": "../public/work/video/mr-pure-water.jpg"
  },
  "/work/video/snz-gateway.jpg": {
    "type": "image/jpeg",
    "etag": '"157d9-nf6YEd0/sA6W25g9Ojicrp2ixf4"',
    "mtime": "2026-08-21T13:05:20.547Z",
    "size": 88025,
    "path": "../public/work/video/snz-gateway.jpg"
  },
  "/work/video/snz-student.jpg": {
    "type": "image/jpeg",
    "etag": '"c2c8-Hh3ezNnobgV7W3AqDWof35AkEb8"',
    "mtime": "2026-08-21T13:05:20.555Z",
    "size": 49864,
    "path": "../public/work/video/snz-student.jpg"
  },
  "/work/video/rxl-usa.jpg": {
    "type": "image/jpeg",
    "etag": '"d972-Fb5P+tvMz47FMss5KGdLW1VkI8Y"',
    "mtime": "2026-08-21T13:05:20.540Z",
    "size": 55666,
    "path": "../public/work/video/rxl-usa.jpg"
  },
  "/work/video/thomas-forum.jpg": {
    "type": "image/jpeg",
    "etag": '"e10c-IaTBP5sqKEH64Pv5YXrB2SvMJ7A"',
    "mtime": "2026-08-21T13:05:20.558Z",
    "size": 57612,
    "path": "../public/work/video/thomas-forum.jpg"
  }
};
function readAsset(id) {
  const serverDir = dirname(fileURLToPath(globalThis.__nitro_main__));
  return promises.readFile(resolve(serverDir, assets[id].path));
}
const publicAssetBases = {};
function isPublicAssetURL(id = "") {
  if (assets[id]) {
    return true;
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) {
      return true;
    }
  }
  return false;
}
function getAsset(id) {
  return assets[id];
}
const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = {
  gzip: ".gz",
  br: ".br",
  zstd: ".zst"
};
const _UHDVyw = defineHandler((event) => {
  if (event.req.method && !METHODS.has(event.req.method)) {
    return;
  }
  let id = decodePath(withLeadingSlash(withoutTrailingSlash(event.url.pathname)));
  let asset;
  const encodingHeader = event.req.headers.get("accept-encoding") || "";
  const encodings = [...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(), ""];
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      event.res.headers.delete("Cache-Control");
      throw new HTTPError({ status: 404 });
    }
    return;
  }
  if (encodings.length > 1) {
    event.res.headers.append("Vary", "Accept-Encoding");
  }
  const ifNotMatch = event.req.headers.get("if-none-match") === asset.etag;
  if (ifNotMatch) {
    event.res.status = 304;
    event.res.statusText = "Not Modified";
    return "";
  }
  const ifModifiedSinceH = event.req.headers.get("if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    event.res.status = 304;
    event.res.statusText = "Not Modified";
    return "";
  }
  if (asset.type) {
    event.res.headers.set("Content-Type", asset.type);
  }
  if (asset.etag && !event.res.headers.has("ETag")) {
    event.res.headers.set("ETag", asset.etag);
  }
  if (asset.mtime && !event.res.headers.has("Last-Modified")) {
    event.res.headers.set("Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !event.res.headers.has("Content-Encoding")) {
    event.res.headers.set("Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !event.res.headers.has("Content-Length")) {
    event.res.headers.set("Content-Length", asset.size.toString());
  }
  return readAsset(id);
});
const findRouteRules = /* @__PURE__ */ (() => {
  const $0 = [{ name: "headers", route: "/assets/**", handler: headers, options: { "cache-control": "public, max-age=31536000, immutable" } }];
  return (m, p) => {
    let r = [];
    if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
    let s = p.split("/"), l = s.length;
    if (l > 1) {
      if (s[1] === "assets") {
        r.unshift({ data: $0, params: { "_": s.slice(2).join("/") } });
      }
    }
    return r;
  };
})();
const _lazy_NNWDVq = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
const findRoute = /* @__PURE__ */ (() => {
  const data = { route: "/**", handler: _lazy_NNWDVq };
  return ((_m, p) => {
    return { data, params: { "_": p.slice(1) } };
  });
})();
const globalMiddleware = [
  toEventHandler(_UHDVyw)
].filter(Boolean);
const errorHandler$1 = (error, event) => {
  const res = defaultHandler(error, event);
  return new NodeResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
  const unhandled = error.unhandled ?? !HTTPError.isError(error);
  const { status = 500, statusText = "" } = unhandled ? {} : error;
  if (status === 404) {
    const url = event.url || new URL(event.req.url);
    const baseURL = "/";
    if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) {
      return {
        status: 302,
        headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
      };
    }
  }
  const headers2 = new Headers(unhandled ? {} : error.headers);
  headers2.set("content-type", "application/json; charset=utf-8");
  const jsonBody = unhandled ? {
    status,
    unhandled: true
  } : typeof error.toJSON === "function" ? error.toJSON() : {
    status,
    statusText,
    message: error.message
  };
  return {
    status,
    statusText,
    headers: headers2,
    body: {
      error: true,
      ...jsonBody
    }
  };
}
const errorHandlers = [errorHandler$1];
async function errorHandler(error, event) {
  for (const handler of errorHandlers) {
    try {
      const response = await handler(error, event, { defaultHandler });
      if (response) {
        return response;
      }
    } catch (error2) {
      console.error(error2);
    }
  }
}
function createNitroApp() {
  const captureError = (error, errorCtx) => {
    if (errorCtx?.event) {
      const errors = errorCtx.event.req.context?.nitro?.errors;
      if (errors) {
        errors.push({ error, context: errorCtx });
      }
    }
  };
  const h3App = createH3App({
    onError(error, event) {
      return errorHandler(error, event);
    }
  });
  let appHandler = (req) => {
    req.context ||= {};
    req.context.nitro = req.context.nitro || { errors: [] };
    return h3App.fetch(req);
  };
  return {
    fetch: appHandler,
    h3: h3App,
    hooks: void 0,
    captureError
  };
}
function createH3App(config) {
  const h3App = new H3Core(config);
  h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
  h3App["~middleware"].push(...globalMiddleware);
  h3App["~getMiddleware"] = (event, route) => {
    const pathname = event.url.pathname;
    const method = event.req.method;
    const middleware = [];
    const routeRules = getRouteRules(method, pathname);
    event.context.routeRules = routeRules?.routeRules;
    if (routeRules?.routeRuleMiddleware.length) {
      middleware.push(...routeRules.routeRuleMiddleware);
    }
    middleware.push(...h3App["~middleware"]);
    if (route?.data?.middleware?.length) {
      middleware.push(...route.data.middleware);
    }
    return middleware;
  };
  return h3App;
}
const APP_ID = "default";
function useNitroApp() {
  let instance = useNitroApp._instance;
  if (instance) {
    return instance;
  }
  instance = useNitroApp._instance = createNitroApp();
  globalThis.__nitro__ = globalThis.__nitro__ || {};
  globalThis.__nitro__[APP_ID] = instance;
  return instance;
}
function getRouteRules(method, pathname) {
  const m = findRouteRules(method, pathname);
  if (!m?.length) {
    return { routeRuleMiddleware: [] };
  }
  const routeRules = {};
  for (const layer of m) {
    for (const rule of layer.data) {
      const currentRule = routeRules[rule.name];
      if (currentRule) {
        if (rule.options === false) {
          delete routeRules[rule.name];
          continue;
        }
        if (typeof currentRule.options === "object" && typeof rule.options === "object") {
          currentRule.options = {
            ...currentRule.options,
            ...rule.options
          };
        } else {
          currentRule.options = rule.options;
        }
        currentRule.route = rule.route;
        currentRule.params = {
          ...currentRule.params,
          ...layer.params
        };
      } else if (rule.options !== false) {
        routeRules[rule.name] = {
          ...rule,
          params: layer.params
        };
      }
    }
  }
  const middleware = [];
  const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
  for (const rule of orderedRules) {
    if (rule.options === false || !rule.handler) {
      continue;
    }
    middleware.push(rule.handler(rule));
  }
  return {
    routeRules,
    routeRuleMiddleware: middleware
  };
}
function _captureError(error, type) {
  console.error(`[${type}]`, error);
  useNitroApp().captureError?.(error, { tags: [type] });
}
function trapUnhandledErrors() {
  process.on("unhandledRejection", (error) => _captureError(error, "unhandledRejection"));
  process.on("uncaughtException", (error) => _captureError(error, "uncaughtException"));
}
const tracingSrvxPlugins = [];
const _parsedPort = Number.parseInt(process.env.NITRO_PORT ?? process.env.PORT ?? "");
const port = Number.isNaN(_parsedPort) ? 3e3 : _parsedPort;
const host = process.env.NITRO_HOST || process.env.HOST;
const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const nitroApp = useNitroApp();
serve({
  port,
  hostname: host,
  tls: cert && key ? {
    cert,
    key
  } : void 0,
  fetch: nitroApp.fetch,
  plugins: [...tracingSrvxPlugins]
});
trapUnhandledErrors();
const nodeServer = {};
export {
  nodeServer as default
};
