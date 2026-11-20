import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as uploadsApi } from "./api-BO2MH7X_.mjs";
import { B as Button } from "./button-BC9oXVxV.mjs";
import { I as Input } from "./label-4pBKAOFV.mjs";
import { X, $ as LoaderCircle, ag as Upload } from "../_libs/lucide-react.mjs";
function ImageUpload({
  value,
  onChange,
  label = "Image"
}) {
  const inputRef = reactExports.useRef(null);
  const [busy, setBusy] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(null);
  const pick = () => inputRef.current?.click();
  const onFile = async (file) => {
    setBusy(true);
    setError(null);
    try {
      const { url } = await uploadsApi.upload(file);
      onChange(url);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Upload failed");
    } finally {
      setBusy(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
      value ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-20 w-32 overflow-hidden rounded-md border border-border bg-muted", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: value, alt: "", className: "h-full w-full object-cover" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => onChange(null),
            className: "absolute right-1 top-1 rounded-full bg-background/80 p-1 hover:bg-background",
            "aria-label": "Remove image",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-3 w-3" })
          }
        )
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-20 w-32 items-center justify-center rounded-md border border-dashed border-border bg-muted/50 text-xs text-muted-foreground", children: "No image" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "button", variant: "outline", size: "sm", onClick: pick, disabled: busy, children: [
          busy ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-2 h-3 w-3 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "mr-2 h-3 w-3" }),
          value ? "Replace" : "Upload"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            placeholder: "…or paste image URL",
            value: value ?? "",
            onChange: (e) => onChange(e.target.value || null)
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            ref: inputRef,
            type: "file",
            accept: "image/*",
            className: "hidden",
            onChange: (e) => {
              const f = e.target.files?.[0];
              if (f) onFile(f);
              e.target.value = "";
            }
          }
        ),
        error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-destructive", children: error })
      ] })
    ] })
  ] });
}
export {
  ImageUpload as I
};
