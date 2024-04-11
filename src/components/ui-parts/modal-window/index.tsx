type ModalProps = {
  isOpen?: boolean;
  onCancel: () => void;
  onOk: () => void;
};

export const Modal = ({ isOpen = false, onCancel, onOk }: ModalProps) => {
  return (
    <div
      className="modal pointer-events-none fixed left-0 top-0 z-50 flex size-full items-center justify-center"
      style={{ opacity: isOpen ? 1 : 0 }}
    >
      <div className="modal-overlay absolute size-full bg-gray-900 opacity-50"></div>

      <div
        className="modal-container z-50 mx-auto w-11/12 overflow-y-auto rounded bg-white shadow-lg md:max-w-md"
        aria-modal="true"
      >
        <div className="modal-close absolute right-0 top-0 z-50 mr-4 mt-4 flex cursor-pointer flex-col items-center text-sm text-white">
          <svg
            className="fill-current text-white"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
          >
            <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
          </svg>
          <span className="text-sm">(Esc)</span>
        </div>
        {/* Title */}
        <div className="modal-content px-6 py-4 text-left">
          <div className="flex items-center justify-between pb-3">
            <p className="text-2xl font-bold">Simple Modal!</p>
            <div className="modal-close z-50 cursor-pointer">
              <svg
                className="fill-current text-black"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
              </svg>
            </div>
          </div>
          {/* Body */}
          <p>Modal content can go here</p>
          <p>...</p>
          <p>...</p>
          <p>...</p>
          <p>...</p>
          {/* Footer */}
          <div className="flex justify-end pt-2">
            <button className="mr-2 rounded-lg bg-transparent p-3 px-4 text-indigo-500 hover:bg-gray-100 hover:text-indigo-400">
              Action
            </button>
            <button className="modal-close rounded-lg bg-indigo-500 p-3 px-4 text-white hover:bg-indigo-400">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
