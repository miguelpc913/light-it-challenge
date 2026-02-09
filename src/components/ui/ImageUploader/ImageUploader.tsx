import { FiUpload } from "react-icons/fi";
import "./ImageUploader.css";
import useImageUploader from "./useImageUploader";

type Props = {
  value?: string;
  onChange: (base64: string) => void;
  error?: string;
};

export default function ImageUploader(props: Props) {
  const { value, error } = props;
  const {
    hasImage,
    handleClick,
    handleFileInputChange,
    fileInputRef,
    handleImageError,
  } = useImageUploader(props);

  return (
    <div className="image-uploader">
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileInputChange}
        className="image-uploader__input"
        aria-label="Upload image"
      />
      {hasImage ? (
        <div className="image-uploader__preview">
          <img
            onClick={handleClick}
            src={value}
            alt="Preview"
            className="image-uploader__preview-image"
            onError={handleImageError}
          />
        </div>
      ) : (
        <div
          className={`image-uploader__dropzone ${error ? "image-uploader__dropzone--error" : ""}`}
          onClick={handleClick}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              handleClick();
            }
          }}
          aria-label="Upload image"
        >
          <FiUpload className="image-uploader__icon" />
          <span className="image-uploader__text">Click to upload avatar</span>
          <span className="image-uploader__hint">PNG, JPG up to 5MB</span>
        </div>
      )}
      {error && <p className="image-uploader__error">{error}</p>}
    </div>
  );
}
