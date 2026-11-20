import { useRef, useState } from "react";
import { Upload, Loader2, X } from "lucide-react";
import { uploadsApi } from "@/lib/admin/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function ImageUpload({
  value,
  onChange,
  label = "Image",
}: {
  value?: string | null;
  onChange: (url: string | null) => void;
  label?: string;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const pick = () => inputRef.current?.click();

  const onFile = async (file: File) => {
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

  return (
    <div className="space-y-2">
      <p className="text-sm font-medium">{label}</p>
      <div className="flex items-start gap-3">
        {value ? (
          <div className="relative h-20 w-32 overflow-hidden rounded-md border border-border bg-muted">
            <img src={value} alt="" className="h-full w-full object-cover" />
            <button
              type="button"
              onClick={() => onChange(null)}
              className="absolute right-1 top-1 rounded-full bg-background/80 p-1 hover:bg-background"
              aria-label="Remove image"
            >
              <X className="h-3 w-3" />
            </button>
          </div>
        ) : (
          <div className="flex h-20 w-32 items-center justify-center rounded-md border border-dashed border-border bg-muted/50 text-xs text-muted-foreground">
            No image
          </div>
        )}
        <div className="flex-1 space-y-2">
          <Button type="button" variant="outline" size="sm" onClick={pick} disabled={busy}>
            {busy ? <Loader2 className="mr-2 h-3 w-3 animate-spin" /> : <Upload className="mr-2 h-3 w-3" />}
            {value ? "Replace" : "Upload"}
          </Button>
          <Input
            placeholder="…or paste image URL"
            value={value ?? ""}
            onChange={(e) => onChange(e.target.value || null)}
          />
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) onFile(f);
              e.target.value = "";
            }}
          />
          {error && <p className="text-xs text-destructive">{error}</p>}
        </div>
      </div>
    </div>
  );
}
