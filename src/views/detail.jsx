import React, { Component } from "react"
import axios from "axios"
class Detail extends Component {
    state = {
        posts: {},
        editMode: false,
    }
    componentDidMount() {
        console.log(this.props)
        axios.get("https://6183d29891d76c00172d1beb.mockapi.io/api/v1/maqolalar/" + this.props.match.params.id)
            .then((res) => { this.setState({ posts: res.data }) })
    }
    click = () => {
        axios.delete("https://6183d29891d76c00172d1beb.mockapi.io/api/v1/maqolalar/" + this.props.match.params.id)
            .then(() => {
                this.props.history.push("/")
            })
    }
    click1 = () => {
        this.setState({
            editMode: true,
        })

    }
    click2 = () => {
       
        axios.put("https://6183d29891d76c00172d1beb.mockapi.io/api/v1/maqolalar/" + this.props.match.params.id, this.state.posts)
            .then(() => {
                window.location.reload()
            })

    }
    render() {
        return (
            <>
                <div className="detail">
                    <h3>{this.state.posts.sarlavha}</h3>
                    <p>{this.state.posts.matn}</p>
                    <button onClick={this.click}>Uchirish</button>
                    <button onClick={this.click1}>Tahrir</button>
                    {
                        this.state.editMode === false ? null : (
                            <>
                                <input onChange={(e) => this.setState({ posts: { ...this.state.posts, sarlavha: e.target.value } })} type="text" value={this.state.posts.sarlavha} />
                                <textarea onChange={(e) => this.setState({ posts: { ...this.state.posts, matn: e.target.value } })} value={this.state.posts.matn} />
                                <button onClick={this.click2}>Yakunlash</button>
                            </>
                        )
                    }
                </div>
            </>
        )
    }
}
export default Detail;