import { useRef } from "react";
import styles from "./Modal.module.scss";
import type { ModalProps } from "./Modal.types";

const Modal = ({ children }: ModalProps) => {
    const modalRef = useRef<HTMLDivElement>(null);

    const onBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        e.isDefaultPrevented();
        if(modalRef.current && modalRef.current.contains(e.target as Node)){
            console.log("closed !!!!!")
        };
    }

    return (
        <div ref={modalRef} onClick={onBackgroundClick} className={styles.modalBackdrop}>
            <div className={styles.modal}>
                {children}
            </div>
        </div>
    )
}

export default Modal