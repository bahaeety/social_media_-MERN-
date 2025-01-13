import { Camera } from 'lucide-react';

export default function ImageUpload  ({ imagePreview, onImageChange })  {
  return (
    <div className="image-upload">
      <div className="image-upload__preview">
        {imagePreview ? (
          <img src={imagePreview} alt="Preview" />
        ) : (
          <Camera size={32} color="#1DA1F2" />
        )}
      </div>
      <input
        type="file"
        id="profile-image"
        accept="image/*"
        onChange={onImageChange}
        style={{ display: 'none' }}
      />
      <label htmlFor="profile-image" className="image-upload__button">
        Choose Photo
      </label>
    </div>
  );
};