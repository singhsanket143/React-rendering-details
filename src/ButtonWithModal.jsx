import useModalDialog from "./hooks/useModalDialog";
import Modal from "./modal";

export default function ButtonWithModal() {
    const { isOpen, open, close } = useModalDialog();


    return (
        <>
            <button onClick={open}>Open Modal</button>
            {isOpen && <Modal close={close} />}
        </>
    );
}