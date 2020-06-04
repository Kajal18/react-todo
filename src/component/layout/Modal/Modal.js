import React from 'react'
import classes from './Modal.module.css'
import Backdrop from '../Backdrop/Backdrop'
import { Button } from 'reactstrap'

const Modal = props => {
    return (
        <React.Fragment>
            <Backdrop show={props.show} clicked={props.closeModal}></Backdrop>
            <div
                className={classes.Modal}
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}
            >
                <p>{props.text}</p>
                <Button className={classes.ModalButton} onClick={props.closeAndRemove}>Ok</Button>
            </div>
        </React.Fragment>
    )

}

export default React.memo(Modal, (prevProps, nextProps) => nextProps.show == prevProps.show && nextProps.children == prevProps.children
)