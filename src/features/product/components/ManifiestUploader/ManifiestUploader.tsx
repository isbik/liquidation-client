import { api } from "@/services";
import { CloudFile } from "@/types";
import { useStore } from "effector-react";
import React, { useRef } from "react";
import { $manifestFile, setManifestFile } from "../../product.create.model";

type Props = {};

const ManifiestUploader = (props: Props) => {
  const manifestFile = useStore($manifestFile);
  const fileInputField = useRef<HTMLInputElement>(null);

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    event.stopPropagation();

    const { files } = event.dataTransfer;

    uploadFiles(files);
  };

  const uploadFiles = (files: FileList | null) => {
    if (!files || manifestFile) return;

    for (let i = 0; i < files.length; i++) {
      const formData = new FormData();

      formData.append("file", files[0]);

      api.post<CloudFile>("/upload/file", formData).then((response) => {
        setManifestFile(response.data);
      });
    }
  };

  const handleDeleteFile = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();

    api.delete("/upload/delete/" + manifestFile?.id).then(() => {
      setManifestFile(null);
    });
  };

  return (
    <div className="mb-4 col-12">
      <div className="item-wrapper">
        <div
          onDragOver={(event) => {
            event.preventDefault();
            event.stopPropagation();
          }}
          onDrop={handleDrop}
          className="flex w-full h-32 gap-2 overflow-hidden overflow-x-auto border border-dashed rounded cursor-pointer"
        >
          {manifestFile === null && (
            <p className="flex items-center justify-center w-full h-full text-center">
              Перенесите манифест в поле и нажмите на кнопку “добавить”
            </p>
          )}
          {manifestFile && (
            <div className="flex flex-col items-center justify-center w-full text-center">
              <p className="mb-1">{manifestFile.filename}</p>
              <button
                onClick={(event) => handleDeleteFile(event)}
                className="px-2 py-2 text-white bg-blue-500 rounded"
              >
                Удалить файл
              </button>
            </div>
          )}
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
      <button
        onClick={(event) => {
          event.preventDefault();
          fileInputField.current?.click();
        }}
        className="px-8 py-4 ml-auto text-white bg-blue-500 border-none rounded"
      >
        Добавить манифест
      </button>
    </div>
  );
};

export { ManifiestUploader };
