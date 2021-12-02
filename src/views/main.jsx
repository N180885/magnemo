import React, { Component } from "react";
import Navbar from "../components/navbar";
import NewPost from "./newPost";
import Detail from "./detail";
import Footbar from "../components/footbar";
import Home from "./home";
import Fotos from "./fotos";
import Music from "./music";
import Sport from "./sport";
import Library from "./library";
import Movies from "./movies";
import { Switch, Route } from "react-router-dom";
import axios from "axios";

class Main extends Component {
  state = {
    show: false,
    region:"",
    data:{}
  };

  click = () => {
    this.setState({ show: !this.state.show });
  };
  click1=()=>{
    axios.get(`https://api.weatherapi.com/v1/current.json?key=f8f40074fe084c8a99c113418211611&q=${this.state.region}&aqi=no`,
    {
      headers:
      {
        "Transfer-Encoding": "chunked",
        "Connection": "keep-alive",
        "Vary": "Accept-Encoding",
        "CDN-PullZone": "93447",
        "CDN-Uid": "8fa3a04a-75d9-4707-8056-b7b33c8ac7fe",
        "CDN-RequestCountryCode": "GB",
        "CDN-ProxyVer": "1.0",
        "CDN-RequestPullSuccess": "True",
        "CDN-RequestPullCode": "200",
        "CDN-CachedAt": "11/16/2021 16:34:31",
        "CDN-EdgeStorageId": "786",
        "CDN-Status": "200",
        "CDN-RequestId": "207f9aae77d7c4daf8f2de8427fe1838",
        "CDN-Cache": "MISS",
        "Cache-Control": "public, max-age=180",
        "Content-Type": "application/json",
        "Date": "Tue, 16 Nov 2021 16:34:31 GMT",
        "Server": "BunnyCDN-UK1-786"
      }
    })
    .then((res)=>{
      
      this.setState({data:res.data.current})})  
}

  render() {
    return (
      <>
        <Navbar />
        <main>
          <aside>
            <div className="aside">
            <div className="btn">
            <button
              className={this.state.show ? "on" : "off"}
              onClick={this.click}
            >
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </button>
            </div>
            <div className="havo">
              <input onChange={(e)=>this.setState({region:e.target.value})} type="text" placeholder="Region" />
              <button onClick={this.click1}>View</button>
              <p>{this.state.data.temp_c}</p>
              <div className="img"><img src={this.state.data.condition?.icon} alt="" /></div>
            </div>

            </div>
            <div className={this.state.show ? "show" : "hide"}>
              <h1>Menu</h1>
              <p>O'zbek milliy taomlari</p>
              <p>O'zbek milliy taomlari</p>
              <p>O'zbek milliy taomlari</p>
              <p>O'zbek milliy taomlari</p>
              <p>O'zbek milliy taomlari</p>
              <p>O'zbek milliy taomlari</p>
              <p>O'zbek milliy taomlari</p>
              <p>O'zbek milliy taomlari</p>
              <p>O'zbek milliy taomlari</p>
              <p>O'zbek milliy taomlari</p>
            </div>
          </aside>
          <div className="center">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/newPost" component={NewPost} />
              <Route exact path="/detail/:id" component={Detail} />
              <Route exact path="/fotos" component={Fotos} />
              <Route exact path="/music" component={Music} />
              <Route exact path="/sport" component={Sport} />
              <Route exact path="/library" component={Library} />
              <Route exact path="/movies" component={Movies} />
            </Switch>
          </div>
        </main>
        <Footbar />
      </>
    );
  }
}
export default Main;
