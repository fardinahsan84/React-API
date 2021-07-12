import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

class Modal extends React.Component{
    state = { email : '' , password: ''}

    onClick = (event) => {
        event.preventDefault()
        this.props.loginSubmit(this.state);
    }
    onChange = (event) =>
    {
        this.setState({ [event.target.name] : event.target.value })
       // console.log(this.state);
    }

    render(){
    return ReactDOM.createPortal(
        <div className='ui dimmer show modals visible active'>
            <div className='ui raised very padded text container segment'>
            <div className='ui middle aligned center aligned grid'>
                <div className='column'>
                    <h2 className='ui teal header'>
                        <Link to='/' className='ui teal left aligned inverted segment'>
                            FAI
                        </Link>
                        <div className='content'>
                            Log-in to your account
                        </div>
                    </h2>
                    
                    <form  className='ui form'>
                    <div className='ui stacked segment'>
                        <div className='field'>
                            <div className='ui left icon input'>
                                <i className='user icon'></i>
                                <input type='text' name='email' placeholder='E-mail address' onChange={this.onChange} />
                            </div>
                        </div>
                        <div className='field'>
                        <div className='ui left icon input'>
                            <i className='lock icon'></i>
                            <input type='password' name='password' placeholder='Password' onChange={this.onChange} />
                        </div>
                        </div>
                        <div onClick={this.onClick} className='ui fluid large teal submit button'>
                            Login
                        </div>
                    </div>

                    <div className='ui error message'></div>

                    </form>

                    <div className='ui message'>
                    New to us? <a href='/'>Sign Up</a>
                    </div>
                </div>
            </div>
            </div>
        </div>,
        document.querySelector('#modal')
    )
    }
}

export default Modal;