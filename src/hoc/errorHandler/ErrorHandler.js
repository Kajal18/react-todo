import React, { useReducer } from 'react'
import Modal from '../../component/layout/Modal/Modal';
import useHttpErrorHanlder from '../../hoc/hooks/httpErrorHandler'

const errorHanlder = (WrappedComponent, axios) => {
    return props => {
        const { error, errorConfirmedHandler } = useHttpErrorHanlder(axios)

        return (
            < React.Fragment >
                <Modal show={error} closeAndRemove={errorConfirmedHandler}>
                    {error ? error.message : null}
                </Modal>
                <WrappedComponent {...props} />
            </ React.Fragment >
        )
    }
}

export default errorHanlder