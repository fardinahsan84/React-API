import React from 'react';
import axios from 'axios';
import SearchInput from './SearchInput';
import ImageList from './imageList';


class Home extends React.Component{
    state = {images : [] }

    componentDidMount() {
        this.allImages();
    }

    async allImages() {
        let data = await axios
          .get(`https://pixabay.com/api/?key=22353332-ff635ae258128e8bda31795f6&q=nature&per_page=${24}&image_type=photo&pretty=true`)
          .then(function(response) {
            return response;
          })
          .catch(function(error) {
            console.log(error);
          });
        this.setState({ images: data.data.hits });
        console.log(data);
    }

    onSearchSubmit= async(entry) => {
        console.log(entry)
        const response = await axios.get(`https://pixabay.com/api/?key=22353332-ff635ae258128e8bda31795f6&q=${entry}&per_page=${30}&image_type=photo&pretty=true`)
        //console.log(response)
        this.setState({ images: response.data.hits })
    }

  render(){
    return (
        <div>
            <div className='ui container'>
                <SearchInput onSearchSubmit = {this.onSearchSubmit} />
                {this.state.images.length} results found
                <ImageList images= {this.state.images} />
                
                </div>
        </div>

    )
  }
}
export default Home;