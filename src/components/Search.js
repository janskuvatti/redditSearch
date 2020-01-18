import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';

import Reddit from './Reddit'
const Search = () => {
    const [posts, setPosts] = useState([]);
    const [query, setQuery] = useState({
  
      search: '', 
      limit: '',
     
  });

    
    const handleInput = e  => {
      setQuery({...query, [e.target.name]: e.target.value})
  
      }
    
     
        const searchReddits = (e) => {
          e.preventDefault();
      
        fetch(`http://www.reddit.com/search.json?q=${query.search}&limit=${query.limit}`)
          
            .then(res => res.json())
            .then(data => {

             setPosts(data.data.children);
             console.log(posts.title)

             

            })
            .catch(err => console.log(err));
    }
    
return(

    <div>
          <form className="search-form">

<div id="search-container" className="container">
  <div id="search" className="card card-body bg-light mb-2">
    <h4>Search Reddit</h4>
      <div className="form-group">
        <TextField id="search-input" name="search" value={query.search} className="form-control mb-3" label="Search Term..." variant='filled' onChange={handleInput}/>
      </div>
      <div className="form-group">
        <TextField id="limit" name="limit" value={query.limit} className="form-control mb-3" variant='filled' label="Limit" onChange={handleInput}/>
      </div>
      <button type="submit" className="btn btn-dark btn-block mt-4" onClick={searchReddits} >Search</button>
  </div>
  </div>
  </form>
 
  {posts.map((post) => (

<Reddit

title={post.data.title}
text = {post.data.selftext}
link = {post.data.url}
/>
  ))}


  </div>
 
)
}
//img= {reddit.preview.images[0].source.url}

export default Search;