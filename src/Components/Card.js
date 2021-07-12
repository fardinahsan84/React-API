import React from 'react';

class Card extends React.Component {
    state = { user: '' }
    componentDidMount() {
        let user = this.props.match.params.user
        this.setState({ user} )
    }
    render()
    {
        const { user } = this.state
        return(
            <div 
            className='ui raised very padded text container segment'
            style={{ marginTop:'80px'}}>
                <h3 className='ui header'>{ user}</h3>
                <p>Aute fugiat labore magna anim cillum elit. Voluptate officia eiusmod est deserunt velit dolore laborum sint adipisicing mollit incididunt labore minim occaecat. Culpa deserunt exercitation magna magna sunt nulla in anim dolor. Anim aute velit laborum laborum sint proident nisi esse et. Elit enim amet minim deserunt ullamco sunt exercitation. Enim eu velit eu adipisicing mollit veniam. Nisi aute cupidatat cupidatat ad do labore velit cillum amet adipisicing magna quis aliquip.</p>
            </div>
            
        )
    }
}

export default Card;