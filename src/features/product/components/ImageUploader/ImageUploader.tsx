import { api } from "@/services";
import { CloudFile } from "@/types";
import { useStore } from "effector-react";
import React, { useRef } from "react";
import { toast } from "react-toastify";
import { $images, setImages } from "../../product.create.model";

type Props = {};

const ImageUploader = (props: Props) => {
  const images = useStore($images);
  const fileInputField = useRef<HTMLInputElement>(null);

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    event.stopPropagation();

    const { files } = event.dataTransfer;

    uploadFiles(files);
  };

  const uploadFiles = (files: FileList | null) => {
    if (!files) return;

    for (let i = 0; i < files.length; i++) {
      const formData = new FormData();

      formData.append("file", files[0]);

      api.post<CloudFile>("/upload/image", formData).then((response) => {
        if (images.length >= 8) {
          return toast.warn("Нельзя загрузить больше 8 файлов");
        }
        setImages([...images, response.data]);
      });
    }
  };

  const handleDeleteImage = (event: React.MouseEvent, id: number) => {
    event.preventDefault();
    event.stopPropagation();

    api.delete("/upload/delete/" + id).then(() => {
      setImages(images.filter(({ id: _id }) => id !== _id));
    });
  };

  return (
    <div className="col-12">
      <div className="item-wrapper">
        <div className="title">Изображения</div>
        <p className="mb-1">Не более 8 изображений</p>
        <div
          onDragOver={(event) => {
            event.preventDefault();
            event.stopPropagation();
          }}
          onDrop={handleDrop}
          className="flex w-full h-32 gap-2 overflow-hidden overflow-x-auto border border-dashed rounded cursor-pointer"
        >
          {images.length === 0 && (
            <p className="flex items-center justify-center w-full h-full text-center">
              Перенесите изображения в поле или нажмите на кнопку “добавить”
            </p>
          )}
          {images.map((image) => (
            <div className="relative w-32 h-32 aspect-square" key={image.id}>
              <button
                onClick={(event) => handleDeleteImage(event, image.id)}
                className="absolute top-1 right-1"
              >
                x
              </button>
              <img className="w-full h-full" src={image.url} />
            </div>
          ))}
          <button
            onClick={(event) => {
              event.preventDefault();
              fileInputField.current?.click();
            }}
            className="text-white bg-blue-500 border-none"
          >
            Добавить
          </button>
        </div>
      </div>
      <input
        onChange={(event) => {
          uploadFiles(event.target.files);
        }}
        type="file"
        ref={fileInputField}
        multiple
        className="hidden"
      />
    </div>
  );
};

export { ImageUploader };
