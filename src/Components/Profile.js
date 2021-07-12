import React from 'react';
import axios from 'axios';

class Profile extends React.Component {
    state = { user: '', api: ' ' , redirect: false }

    
     async componentDidMount() {
        let key = this.props.match.params.key;
        this.setState({ api: key, redirect : true} );

        let res = await axios.get('http://localhost/API/users.php?key=frf3453543fref435t54fg45f54yg')
        .then(function(response){ return response.data; })
        .then(users => { 
            this.setState({user:users});
            this.setState({redirect : true});
        })
        .catch(function (error) {
            console.log(error);
        });

        console.log(res);
        
    }

    render()
    {
        return(
            <div
            className='ui raised very padded text container segment'
            style={{ marginTop:'80px'}}>
                <h3 className='ui header'>{this.state.api}</h3>
                <p>Aute fugiat labore magna anim cillum elit. Voluptate officia eiusmod est deserunt velit dolore laborum sint adipisicing mollit incididunt labore minim occaecat. Culpa deserunt exercitation magna magna sunt nulla in anim dolor. Anim aute velit laborum laborum sint proident nisi esse et. Elit enim amet minim deserunt ullamco sunt exercitation. Enim eu velit eu adipisicing mollit veniam. Nisi aute cupidatat cupidatat ad do labore velit cillum amet adipisicing magna quis aliquip.</p>
            </div>
        )
    }
}

export default Profile;