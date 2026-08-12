import { CloudUploadIcon, Loader2 } from "lucide-react";
import { useRef, useState } from "react";
import { toast } from "sonner";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";

type Props = {
  setHasImage: (value: boolean) => void;
};
export default function SelectFile({ setHasImage }: Props) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [open, setOpen] = useState(false);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];

    if (!selectedFile) return;

    setFile(selectedFile);
    setHasImage(true);
  };

  const handleUpload = () => {
    setUploading(true);

    // Temporary upload simulation
    setTimeout(() => {
      setUploading(false);
      setOpen(false);
      toast.success("File uploaded successfully!");
    }, 1000);
  };
  return (
    <div>
      <Dialog
        open={open}
        onOpenChange={setOpen}
      >
        <DialogTrigger render={<Button variant="secondary" />}>
          Select File
        </DialogTrigger>

        <DialogContent className="bg-black text-white">
          <DialogHeader>
            <DialogTitle>Upload an image</DialogTitle>

            <DialogDescription>
              Accepted formats: .png, .jpg, .jpeg, .webp
            </DialogDescription>
          </DialogHeader>

          <Input
            ref={fileInputRef}
            type="file"
            accept="image/png,image/jpeg,image/webp"
            className="hidden"
            onChange={handleFileSelect}
          />
          <div
            onClick={() => fileInputRef.current?.click()}
            className="border-chart-4 flex h-50 cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border"
          >
            <CloudUploadIcon size={40} />

            {file ? (
              <p className="text-sm text-white">{file.name}</p>
            ) : (
              <>
                <p className="text-sm text-white/80">
                  Drag and drop or click to upload.
                </p>

                <p className="text-muted-foreground text-sm">
                  Max file size: 50MB
                </p>
              </>
            )}
          </div>

          {/* Confirm button */}
          <Button
            disabled={!file || uploading}
            onClick={handleUpload}
            className="bg-white text-black hover:bg-zinc-200 disabled:bg-zinc-400 disabled:text-zinc-700"
          >
            {uploading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Uploading...
              </>
            ) : (
              "Confirm upload"
            )}
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
