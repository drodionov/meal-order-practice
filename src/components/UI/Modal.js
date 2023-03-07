import ReactDOM from "react-dom";
import classes from './Modal.module.css'

const Backdrop = ({onClose}) => {
  return <div className={classes.backdrop} onClick={onClose}/>
}

const portalElement = document.getElementById('overlays')

const ModalOverlay = props => {
  return <div className={classes.modal}>
    <div className={classes.content}>{props.children}</div>
  </div>
}

const Modal = (props) => {
  return <>
    {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, portalElement)}
    {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,
        portalElement)}
  < />
}

export default Modal