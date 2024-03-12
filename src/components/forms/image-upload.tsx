import { useState } from "react";
import { Trash } from "lucide-react";
import { useToast } from "../ui/use-toast";
import { Button } from "../ui/button";

interface ImageUploadProps {
  onChange?: any;
  onRemove: (value: File[]) => void;
  value: File[];
  imgMaxLimit: number;
}

export default function ImageUpload({
  onChange,
  onRemove,
  value,
  imgMaxLimit,
}: ImageUploadProps) {
  const { toast } = useToast();

  const handleDeleteFile = (index: number) => {
    const files = [...value];
    files.splice(index, 1);
    onRemove(files);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const selectedFiles = Array.from(files);
      onChange([...value, ...selectedFiles]);
      e.target.value = ""; // Clear file input
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      const selectedFiles = Array.from(files);
      onChange([...value, ...selectedFiles]);
    }
  };

  return (
    <div>
      <div className="mb-4 flex items-center gap-4">
        {value.map((file, index) => (
          <div
            key={index}
            className="relative w-[200px] h-[200px] rounded-md overflow-hidden"
          >
            <div className="z-10 absolute top-2 right-2">
              <Button
                type="button"
                onClick={() => handleDeleteFile(index)}
                variant="destructive"
                size="sm"
              >
                <Trash className="h-4 w-4" />
              </Button>
            </div>
            <picture>
              <img
                className="object-cover w-full h-full"
                src={URL.createObjectURL(file)}
                alt="Image"
              />
            </picture>
          </div>
        ))}
      </div>
      <div
        className="border-2 border-dashed border-gray-400 p-4 text-center cursor-pointer"
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        {value.length < imgMaxLimit && (
          <label htmlFor="file-input" className="cursor-pointer">
            <p>Drag & Drop Image Here or Click to Add</p>
            <input
              id="file-input"
              type="file"
              accept="image/*"
              className="hidden"
              multiple
              onChange={handleFileChange}
            />
          </label>
        )}
      </div>
    </div>
  );
}
