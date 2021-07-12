import axios from 'axios';
import React from 'react';

class SingleImage extends React.Component {
    state = { image: '', url:'', id:''  }
    async componentDidMount() {
        
        let id = this.props.match.params.id;
        let res = await axios
                    .get(`https://pixabay.com/api/?key=22353332-ff635ae258128e8bda31795f6&id=${id}&image_type=photo&pretty=true`)
                    .then(function(response){
                        return response
                    })
                    .catch(function(error){
                        console.log(error)
                    });
        this.setState({image : res.data.hits});

        this.state.image.map((img) => {
            this.setState({url: img.webformatURL, id: img.id})
            return <div></div>
        })
    }

    render()
    {
        return(
            <div className='ui raised very padded text container segment'>
                <div className='ui middle aligned center aligned grid'>
                    <div className='ui middle aligned large bordered images'>
                        <img key={this.state.id} src={this.state.url} alt='' />
                    </div> 
                </div>
            </div>        
        )
    }
}
  
export default  SingleImage;