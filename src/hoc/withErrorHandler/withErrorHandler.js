import React, {Component} from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Auxiliary/Auxiliary';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {

        state = {
            error: null
        };

        dismissErrorHandler = () => {
            this.setState({ error : null });
        };

        // componentDidMount () {
        //     // super(props);
            
        //     axios.interceptors.request.use(req => {
        //         this.setState({error: null});
        //         return req;
        //     })
        //     axios.interceptors.response.use(res => res, error => {
        //         this.setState({error: error});
        //     })
        // }

        // _isMounted = false;

        // constructor (props) {
        //     super(props);
        //     this.state = {
        //         error : null
        //     }
        //     // axios.interceptors.request.use(req => {
        //     //     this.setState({error: null});
        //     //     return req;
        //     // });
        //     // axios.interceptors.response.use(res => res, error => {
        //     //     this.setState({error: error});
        //     // });
        // }

        // componentDidMount() {
        //     this.reqInterceptor = axios.interceptors.request.use(req => {
        //         this.setState({error: null});
        //         return req;
        //     });
        //     this.resInterceptor = axios.interceptors.response.use(res => res, error => {
        //         this.setState({error: error});
        //     });
        // }

        // componentWillUnmount() {
        //     // console.log('Will Unmount', this.reqInterceptor, this.resInterceptor);
        //     axios.interceptors.request.eject(this.reqInterceptor);
        //     axios.interceptors.response.eject(this.resInterceptor);
        // }


        // componentWillMount () {
        //     axios.interceptors.request.use(req => {
        //         this.setState({error: null});
        //         return req;
        //     })
        //     axios.interceptors.response.use(res => res, error => {
        //         this.setState({error: error});
        //     })
        // }

        // errorConfirmedHandler = () => {
        //     this.setState({error: null});
        // }

        render () {
            axios.interceptors.request.use(req => {
                this.setState({error: null});
                return req;
            });
            axios.interceptors.response.use(res => res, error => {
                this.setState({error: error});
            });
            return (
                <Aux>
                    <Modal 
                        show={this.state.error}
                        modalClosed={this.dismissErrorHandler}
                    >
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>
            );
        }
    }
}

export default withErrorHandler;