import React, { Component } from "react";
import axios from "axios"
class NewPost extends Component {
    state = {
        sarlavha:"",
        matn:"",
        kategoriya:"",

    }
    click=()=>{
        let data={
            sarlavha:this.state.sarlavha,
            matn:this.state.matn,
            kategoriya:this.state.kategoriya,
            vaqt: new Date().toLocaleString(),
        }
        axios.post("https://6183d29891d76c00172d1beb.mockapi.io/api/v1/maqolalar", data)
        .then(()=>{
            this.setState({
                sarlavha:"",
                matn:"",
                kategoriya:""
            })
        })
    }
    render() {
        return (
            <>
            <div className="post">
                <input onChange={(e)=>this.setState({sarlavha:e.target.value})} type="text" placeholder="sarlavha" value={this.state.sarlavha}/>
                <textarea onChange={(e)=>this.setState({matn:e.target.value})} placeholder="matn" value={this.state.matn}/>
                <select onChange={(e)=>this.setState({kategoriya:e.target.value})} value={this.state.kategoriya}>
                    <option value ="" selected desabled>Kategoriya</option>
                    <option value="sport">Sport</option>
                    <option value="music">Music</option>
                    <option value="fotos">Fotos</option>
                    <option value="library">Library</option>
                    <option value="movies">Movies</option>
                    <option></option>
                </select>
                <button onClick={this.click}>Nash qilish</button>
                </div>
            </>
        )
    }
}
export default NewPost;