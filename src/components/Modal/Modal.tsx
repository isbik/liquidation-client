import React, { useEffect } from "react";

type Props = {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
};

const Modal = ({ title, children, isOpen, setIsOpen }: Props) => {
  useEffect(() => {
    const html = document.querySelector("html");

    if (!html) return;

    if (isOpen) {
      html.style.overflow = "hidden";
    } else {
      html.style.overflow = "";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center w-screen h-screen bg-black/50">
      <div className="relative flex flex-col items-center max-w-md px-4 py-10 text-center text-white bg-blue-700 rounded-lg">
        <svg
          onClick={() => setIsOpen(false)}
          className="absolute cursor-pointer top-5 right-5"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17 17L1 1M17 1L1 17"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        <p className="mb-8 font-bold">{title}</p>
        {children}
        <button
          onClick={() => setIsOpen(false)}
          className="w-24 px-4 py-2 mt-8 text-white bg-blue-500 border-none rounded-lg"
        >
          Готово
        </button>
      </div>
    </div>
  );
};

export { Modal };
