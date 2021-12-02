import React, { Component } from "react";
import Rasm from "./rasm.png";
class Main extends Component {
  state = {
    til: "",
    til1: "",
    mode: 0,
    raqam:""
  };

  click=()=>{
    this.setState({mode:+1});
    console.log(this.state.mode)

  }


  render() {
    return (
      <>
        <nav>
          <div className="Logo">
            <img src={Rasm} alt="" />
          </div>
          <div className="nav"></div>
        </nav>

        <main>
          <div className="main">
            <div className="main-left">
              <h1><span>"Hamkorbank"</span>акциядорлик-тижорат банки</h1>
              <h1 className="C">CЎРОВНОМА</h1>
              <ul>
                <li>
                  <input placeholder="Фамилиянгиз" />
                </li>
                <li>
                  <input placeholder="Исмингиз" />
                </li>
                <li>
                  <input placeholder="Шарифингиз" />
                </li>
              </ul>
            </div>
            <div className="main-right">
              <div className="foto">
                <img src="" alt="" />              
                <p>3.5x4.5 cm</p>
                <p><b>рангли фотосурат</b></p>
                <p>
                  (охирги 3 той давомида олинган расмий кийим(<b>галстукда</b>
                  )да)
                </p>
              </div>
            </div>
          </div>
          <div className="rem">
            <p>
              <b>Эслатма:</b> Берилган саволга жавоб вариантлари ёзилган
              бўлса, керакли жавобни танланг.
            </p>
          </div>
          <div className="boxes">
            <div className="box">
              <div className="box-left">
                <p>
                  Туғилган вактингиз ва жойингиз (куни, ойи, йили,
                  республика, вилоят, шаҳар, туман, қишлоқ номлари)
                </p>
              </div>
              <div className="box-right">
                  <textarea columns="0" rows="3" />
              </div>
            </div>
            <div className="box">
              <div className="box-left">
                <p>Миллатингиз</p>
              </div>
              <div className="box-right">
                
                <select>
                  <option value="" selected >O'zbek</option>
                  <option value="Qirg'iz">Qirg'iz</option>
                  <option value="Qozoq">Qozoq</option>
                  <option value="Tojik">Tojik</option>
                  <option value="Rus">Rus</option>
                  <option value="Koreys">Koreys</option>
                  <option value="Uyg'ur">Uyg'ur</option>
                  <option value="Turkman">Turkman</option>
                  <option value="Hindi">Hindi</option>
                  <option value="Tatar">Tatar</option>
                  <option value="Nemis">Nemis</option>
                  <option value="Turk">Turk</option>
                  <option value="Fransuz">Fransuz</option>
                  <option value="Yapon">Yapon</option>
                  <option value="Chechen">Chechen</option>
                  <option value="Moldovan">Moldovan</option>
                  <option value="Armyan">Armyan</option>
                  <option value="Hitoy">Hitoy</option>
                  <option value="Qoraqalpoq">Qoraqalpoq</option>
                  <option value="Ukrain">Ukrain</option>
                  <option value="Ozarbayjan">Ozarbayjan</option>
                  <option value="Belarus">Belarus</option>
                </select>
                </div>
            </div>
            <div className="box">
              <div className="box-left">
                <p>
                  Маълумотингиз, қачон ва қайси ўқув юртларини тамомлагансиз
                  Диплом бўйича мутахассислигингиз (диплом рақамини кўрсатинг)
                </p>
              </div>
              <div className="box-right">
                  <textarea columns="0" rows="3" />
              </div>
                            
            </div>
            <div className="box">
              <div className="box-left">
                <p>
                Илмий даражангиз, илмий унвонингиз, қачон берилган? (диплом
                  рақамларини кўрсатинг)
                </p>
              </div>
              <div className="box-right">
                  <textarea columns="0" rows="3" />
              </div>
            </div>
            <div className="box">
              <div className="box-left">
                <p>
                  Малакангизни оширганмисиз? Қачон, қаерда, муддати ва
                  мақсади (мавзуси) (охирги уч (беш) йил тўғрисида маълумот
                  беринг)
                </p>
              </div>
              <div className="box-right">
                  <textarea columns="0" rows="3" />
              </div>
            </div>
            <div className="box">
              <div className="box-left">
                <p>Сертификатларингиз борми?</p>
              </div>
              <div className="box-right">
                  <textarea columns="0" rows="3" />
              </div>
            </div>
            <div className="box">
              <div className="box-left">
                <p>Хорижий тилларни қай даражада биласиз?</p>
              </div>
              
              <div className="box-right">
                  <div className="lang">
                  <p>Инглиз тили</p>  
                      <select>
                          <option value="" selected >1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>                      
                      </select> 
                  </div>
                  <div className="lang">
                    <p>Рус тили </p>
                    <select>
                          <option value="" selected >1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>                      
                      </select> 
                  </div>
                  <div className="lang">
                  <select className="tilni-tanla" >
                          <option value="Tilni tanlang" selected disabled>Tilni tanlang</option>
                          <option>Немис тили</option>
                          <option>Турк тили</option>
                          <option>Араб тили</option>
                          <option>Хитой тили</option>
                          <option>Корейс тили</option>                      
                          <option>Япон тили</option>                      
                          <option>Тожик тили</option>                      
                          <option>Киргиз тили</option>                      
                          <option>Козок тили</option>                      
                          <option>Туркман тили</option>                      
                          <option>Француз тили</option>                      
                          <option>Хинд тили</option>                      
                          <option>Испан тили</option>                      
                      </select>
                    {/* <input onChange={(e)=>this.setState({til:e.target.value})} type="text" placeholder="Tilni kiriting" value={this.state.til}/> */}
                    <select>
                          <option value="" selected >1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>                      
                      </select> 
                  </div>
               
                  {this.state.mode===0? null: (
                    <>
                    <div className="lang">
                    <input onChange={(e)=>this.setState({til1:e.target.value})} type="text" placeholder="Tilni kiriting" value={this.state.til1}/>
                    <select>
                          <option value="" selected >1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>                      
                      </select> 
                      </div>
                  
                    </>
                  )}
                  <button onClick={this.click}>+</button>

              </div>
            </div>
            <div className="box">
              <div className="box-left">
                <p>Қандай Давлат мукофотларига сазовор бўлгансиз?</p>
              </div>
              <div className="box-right">
                   <textarea columns="0" rows="3" />
                   </div>
            </div>
            <div className="box">
              <div className="box-left">
                <p>ИНН рақамингиз</p>
              </div>
              <div className="box-right inn"><input type="text"/></div>
            </div>            
          </div>

          <div className="family">
              <p><b><i>Яқин қариндошларингиз (Ота-она, ака-ука, опа-сингиллар,турмуш ўртоғи, болаларингиз, қайнона-қайнота)<br/>
                  (Турмуш ўртоғингиз ва опа-сингилларингизнинг ҳозирги ва қизлик давридаги фамилиялари тўлиқ кўрсатилсин):</i></b></p>
          </div>
          <div className="jadval">
              <p>Қариндош- лик даражаси</p>
              <p>Фамилияси, исми ва отасининг исми</p>
              <p>Тугилган куни,ойи,йили ва жойи</p>
              <p>Иш жойининг тўлиқ ва лавозим номи</p>
              <p>Турар жойи (пропискаси бўйича вил.туман, МФЙ, кўча номи, уй рақами)</p>
          </div>
          <div className="input">
              <input/>
              <input/>
              <input/>
              <input/>
              <input/>
          </div>
          <div className="adres">
              <p>13. Расмий ёзишмалар учун яшаш манзилингиз</p>
              <input/>
          </div>
          <div className="mail">
              <p>14. Расмий ёзишмалар учун 
      электрон почта манзилингиз:</p>
               <input/>     
          </div>
          <div className="number">
              <p>15. Шахсий уяли телефон рақамингиз</p>
              <div className="raqam">
              <b>+998</b>
              <select>
                <option value="" selected >90</option>
                <option>91</option>
                <option>93</option>
                <option>94</option>
                <option>95</option>
                <option>97</option>
                <option>98</option>
                <option>99</option>
                <option>33</option>
              </select>
              <input onChange={(e)=>this.setState({raqam:e.target.value})} type="number" placeholder="Ракамингизни киритинг" value={this.state.raqam}/>
              {/* {if(this.state.raqam.length!===""){
                {(<b style={{color:"red", width:"200px", border: "none", marginLeft:"10px"}}>"Киритилмокда"</b>)}
                if(this.state.raqam.length===7){(<b style={{color:"red", width:"200px", border: "none", marginLeft:"10px"}}>"Тугри"</b>)}
              else{(<b style={{color:"red", width:"200px", border: "none", marginLeft:"10px"}}></b>)}}; */}

              { this.state.raqam.length===7? (<b style={{color:"red", width:"200px", border: "none", marginLeft:"10px"}}></b>):
                                             (<b style={{color:"red", width:"200px", border: "none", marginLeft:"10px"}}>Tekshiring</b>)}              
              
              </div>
          </div>
          <div className="date">
              <p>Tўлдирилган вақти</p>
              <input type="date" name="date" id="dateinput" ></input>

          </div>


        </main>
      </>
    );
  }
}
export default Main;
