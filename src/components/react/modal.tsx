import type { FunctionalComponent } from "preact";
import { useEffect, useId } from "preact/hooks";

interface ModalProps {
  onClose?: () => void;
}

const Modal: FunctionalComponent<ModalProps> = ({ onClose, children }) => {
  const dialogId = useId();

  useEffect(() => {
    const dialog = document.getElementById(dialogId) as HTMLDialogElement;
    dialog.showModal();
  }, []);

  return (
    <dialog className="modal bg-transparent" id={dialogId}>
      <form method="dialog" class="modal-box">
        <div className="p-2 focus">{children}</div>
        <button
          className="btn btn-circle outline-none btn-ghost btn-sm absolute top-2 right-2"
          onClick={onClose}>
            <span className="icon-[system-uicons--close] text-2xl text-black"></span>
        </button>
      </form>
    </dialog>
  );
};

export default Modal;
