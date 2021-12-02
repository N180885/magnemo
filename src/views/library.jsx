import React, {Component} from "react";
import axios from "axios";
import {Link} from "react-router-dom"
class Library extends Component{
    state = {
        posts: [],
      };
      componentDidMount() {
        axios
          .get("https://6183d29891d76c00172d1beb.mockapi.io/api/v1/maqolalar")
          .then((res) => {
            this.setState({ posts: res.data });
          });
      }
      render() {
        return (
          <>
         
              {this.state.posts.map((res) => {
                return (
                    
                    res.kategoriya === "library" ? (
    
                      <div className="map">
                        <Link to={"/detail/" + res.id}>
                          <h3>{res.sarlavha}</h3>
                        </Link>
                        <p>{res.vaqt}</p>                       
                        <p>{res.kategoriya}</p>
                      </div>
    
                    ): null                
                );
              })}
           
          </>
        );
      }
} 
export default Library;