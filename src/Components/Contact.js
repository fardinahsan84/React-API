import React from 'react';
import { Link } from 'react-router-dom';


const Contact = () => {
    return (
        <div>
            <div
            className='ui raised very padded text container segment'
            style={{marginTop: '80 px'}} 
            >
                <Link to='/Fardin Ahsan'> <h3 className='ui header'>Fardin Ahsan</h3></Link>
                <p>Aliquip culpa adipisicing enim sint anim pariatur ut eiusmod laborum anim incididunt sit. Non occaecat dolore Lorem enim. Mollit nostrud veniam qui in sunt adipisicing ullamco.</p>
            </div>
            <div
            className='ui raised very padded text container segment'
            style={{marginTop: '80 px'}} 
            >
                <Link to='/card/Joy'> <h3 className='ui header'>Joy</h3></Link>
                <p>Aliquip culpa adipisicing enim sint anim pariatur ut eiusmod laborum anim incididunt sit. Non occaecat dolore Lorem enim. Mollit nostrud veniam qui in sunt adipisicing ullamco.</p>
            </div>
            <div
            className='ui raised very padded text container segment'
            style={{marginTop: '80 px'}} 
            >
                <Link to='/Imran'> <h3 className='ui header'>Imran</h3></Link>
                <p>Aliquip culpa adipisicing enim sint anim pariatur ut eiusmod laborum anim incididunt sit. Non occaecat dolore Lorem enim. Mollit nostrud veniam qui in sunt adipisicing ullamco.</p>
            </div>
        </div>
    )
}
export default Contact;