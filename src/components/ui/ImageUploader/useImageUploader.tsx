import React, { useEffect, useRef, useState } from "react";
import type ImageUploader from "./ImageUploader";
import { useToast } from "../../../provider/ToastProvider";

export default function useImageUploader({
  value,
  onChange,
}: React.ComponentProps<typeof ImageUploader>) {
  const [hasImage, setHasImage] = useState(!!value);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { addToast } = useToast();

  useEffect(() => {
    if (value) {
      setHasImage(true);
    }
  }, [value]);

  const handleImageError = () => {
    setHasImage(false);
  };

  const handleFileSelect = (file: File) => {
    if (!file.type.startsWith("image/")) {
      addToast({
        variant: "error",
        title: "File is not an image",
        description: "Try uploading an image.",
      });
      return;
    }

    // Check file size (5MB limit)
    const maxSize = 5 * 1024 * 1024;
    if (file.size > maxSize) {
      addToast({
        variant: "error",
        title: "New image is too big",
        description: "Try uploading a smaller image.",
      });
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      onChange(base64String);
    };
    reader.readAsDataURL(file);
    addToast({
      variant: "success",
      title: "Image Upload succesfull",
    });
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return {
    handleClick,
    handleFileInputChange,
    hasImage,
    fileInputRef,
    handleImageError,
  };
}
