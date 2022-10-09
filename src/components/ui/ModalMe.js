import { useEffect, useRef, useState } from 'react';
import { Modal as BsModal } from 'bootstrap';

function Modal({ children, onClose, open, title }) {
	const modalEl = useRef();

	const [modal, setModal] = useState(null);

	useEffect(() => {
		const modalObj = new BsModal(modalEl.current);
		setModal(modalObj);
	}, []);

	useEffect(() => {
		console.log(modal);
		console.log(modalEl.current);
		if (open) {
			return modal?.show();
		}
		modal?.hide();
	}, [open, modal]);

	// if (!open) {
	// 	return <></>;
	// }

	return (
		<div
			className='modal fade'
			tabIndex='-1'
			ref={modalEl}
			onClick={onClose}
			// style={{ display: open ? 'block' : 'none' }}
		>
			<div
				className='modal-dialog modal-dialog-centered'
				onClick={(e) => e.stopPropagation()}
			>
				<div className='modal-content'>
					<div className='modal-header'>
						<button type='button' className='btn-close invisible'></button>
						<h5 className='modal-title'>{title}</h5>
						<button
							type='button'
							className='btn-close'
							onClick={onClose}
						></button>
					</div>
					<div className='modal-body'>{children}</div>
				</div>
			</div>
		</div>
	);
}

export default Modal;
