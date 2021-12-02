import React from 'react'
import { Switch, Route, NavLink } from 'react-router-dom';
import Sidebar from './sidebar';
import Img1 from "./img/img1.jpg"
import Img2 from "./img/img2.jpg"
import Img3 from "./img/img3.jpg"
const Main=()=>{
    return(
    <>
        <div className="main">
            <Sidebar />
            <div className="center">
                <Switch>
                    <Route exact path="/">
                        <div className="div">
                            <div className="bir">
                                <iframe src="https://www.kun.uz" width="200px" height="100px"/>
                                <img src={Img1} alt="" />
                                <h3>US intelligence agencies say they may never be able to identify the origins of Covid-19, but they have concluded it was not created as a biological weapon</h3>
                            </div>
                            <div className="ikki">
                                <a href="https://www.bbc.com/news/world-asia-india-59059493">Read news</a>
                                <img src={Img2} alt="" />
                                <h3>When India's cricket team lost last Sunday's key match to Pakistan in the T20 World Cup in Dubai, Indian fans took to social media to passionately vent their anger.</h3>

                            </div>
                            <div className="uch">
                                <a href="https://www.bbc.com/news/science-environment-58171814">Read news</a>
                                <img src={Img3} alt="" />
                                <h3>Tackling climate change will require world leaders to take action on a global level.</h3>

                            </div>
                        </div>
                        
                    </Route>
                    <Route exact path="/https://www.bbc.com/news/world-us-canada-59100114">Bu page</Route>
                    <Route exact path="/about">Bu about page</Route>
                    <Route exact path="/contact">Bu contact page</Route>
                    
                </Switch>
            </div>
        </div>
    </>
    )
}
export default Main;