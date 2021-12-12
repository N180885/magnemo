import React, { Component } from "react";
import Rasm from "./rasm.png";
class Main extends Component {
  state = {
    til: "",
    til1: "",
    mode: [],
    fam: [],
    fam1: "",
    raqam: "",
    mail: "",
    mails: "",
    inn: "",
    file: null,
  };

  click = () => {
    let copy = [...this.state.mode];
    copy.unshift(this.state.til1);
    this.setState({ mode: copy });
  };
  click1 = () => {
    let copy = [...this.state.fam];
    copy.unshift(this.state.fam1);
    this.setState({ fam: copy });
  };

  dow = (event) => {
    this.setState({
      file: URL.createObjectURL(event.target.files[0]),
    });
  };

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
              <h1>
                <span>"Hamkorbank"</span>акциядорлик-тижорат банки
              </h1>
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
                <p>3.5x4.5 cм</p>
                <p>
                  <b>рангли фотосурат</b>
                </p>
                <p>
                  (охирги 3 той давомида олинган расмий кийим(<b>галстукда</b>
                  )да)
                </p>
                <img src={this.state.file} alt="" />
              </div>
              <input
                type="file"
                onChange={this.dow}
                id="file"
                style={{ display: "none" }}
              />

              <button>
                <label for="file">Расмни юклаш</label>
              </button>
            </div>
          </div>
          <div className="rem">
            <p>
              <b>Эслатма:</b> Берилган саволга жавоб вариантлари ёзилган бўлса,
              керакли жавобни танланг.
            </p>
          </div>
          <div className="boxes">
            <div className="box">
              <div className="box-left">
                <p>
                  Туғилган вактингиз ва жойингиз (куни, ойи, йили, республика,
                  вилоят, шаҳар, туман, қишлоқ номлари)
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
                  <option value="" selected>
                  Ўзбек
                  </option>
                  <option value="Qirg'iz">Қирғиз</option>
                  <option value="Qozoq">Қозоқ</option>
                  <option value="Tojik">Тожик</option>
                  <option value="Rus">Рус</option>
                  <option value="Koreys">Корейс</option>
                  <option value="Uyg'ur">Уйғур</option>
                  <option value="Turkman">Туркман</option>
                  <option value="Hindi">Хинд</option>
                  <option value="Tatar">Татар</option>
                  <option value="Nemis">Немис</option>
                  <option value="Turk">Турк</option>
                  <option value="Fransuz">Француз</option>
                  <option value="Yapon">Япон</option>
                  <option value="Chechen">Чечен</option>
                  <option value="Moldovan">Молдован</option>
                  <option value="Armyan">Армян</option>
                  <option value="Hitoy">Хитой</option>
                  <option value="Qoraqalpoq">Қорақалпоқ</option>
                  <option value="Ukrain">Украин</option>
                  <option value="Ozarbayjan">Озарбайжон</option>
                  <option value="Belarus">Беларус</option>
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
                  Малакангизни оширганмисиз? Қачон, қаерда, муддати ва мақсади
                  (мавзуси) (охирги уч (беш) йил тўғрисида маълумот беринг)
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
                    <option value="" selected>
                      1
                    </option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
                <div className="lang">
                  <p>Рус тили </p>
                  <select>
                    <option value="" selected>
                      1
                    </option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
                <div className="lang">
                  <select className="tilni-tanla">
                    <option value="Tilni tanlang" selected disabled>
                      Тилни танланг
                    </option>
                    <option>Немис тили</option>
                    <option>Турк тили</option>
                    <option>Араб тили</option>
                    <option>Хитой тили</option>
                    <option>Корейс тили</option>
                    <option>Япон тили</option>
                    <option>Тожик тили</option>
                    <option>Қирғиз тили</option>
                    <option>Қозоқ тили</option>
                    <option>Туркман тили</option>
                    <option>Француз тили</option>
                    <option>Хинд тили</option>
                    <option>Испан тили</option>
                  </select>

                  <select>
                    <option value="" selected>
                      1
                    </option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>

                {this.state.mode.map(() => {
                  return (
                    <>
                      <div className="lang">
                        <select className="tilni-tanla">
                          <option value="Tilni tanlang" selected disabled>
                            Тилни танланг
                          </option>
                          <option>Немис тили</option>
                    <option>Турк тили</option>
                    <option>Араб тили</option>
                    <option>Хитой тили</option>
                    <option>Корейс тили</option>
                    <option>Япон тили</option>
                    <option>Тожик тили</option>
                    <option>Қирғиз тили</option>
                    <option>Қозоқ тили</option>
                    <option>Туркман тили</option>
                    <option>Француз тили</option>
                    <option>Хинд тили</option>
                    <option>Испан тили</option>
                        </select>
                        {/* <input
                          onChange={(e) =>
                            this.setState({ til1: e.target.value })
                          }
                          type="text"
                          placeholder="Тилни киритинг"
                        /> */}
                        <select>
                          <option value="" selected>
                            1
                          </option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                      </div>
                    </>
                  );
                })}
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
                <p>ИНПС рақамингиз</p>
              </div>
              <div className="box-right">
                <input
                  onChange={(e) => this.setState({ inn: e.target.value })}
                  type="number"
                  className="inn"
                  placeholder="ИНПС рақамингизни киритинг"
                />
                {this.state.inn.length === 14 ? (
                  <b
                    style={{
                      color: "green",
                      width: "200px",
                      border: "none",
                      marginLeft: "10px",
                    }}
                  >
                    Тўғри киритилди
                  </b>
                ) : (
                  <b
                    style={{
                      color: "red",
                      width: "200px",
                      border: "none",
                      marginLeft: "10px",
                    }}
                  >
                    Текширинг
                  </b>
                )}
              </div>
            </div>
          </div>
          <div className="family">
            <p>
              <b>
                <i>
                  Яқин қариндошларингиз (Ота-она, ака-ука, опа-сингиллар,турмуш
                  ўртоғи, болаларингиз, қайнона-қайнота)
                  <br />
                  (Турмуш ўртоғингиз ва опа-сингилларингизнинг ҳозирги ва қизлик
                  давридаги фамилиялари тўлиқ кўрсатилсин):
                </i>
              </b>
            </p>
          </div>
          <div className="jadval">
            <p>Қариндош- лик даражаси</p>
            <p>Фамилияси, исми ва отасининг исми</p>
            <p>Тугилган куни,ойи,йили ва жойи</p>
            <p>Иш жойининг тўлиқ ва лавозим номи</p>
            <p>
              Турар жойи (пропискаси бўйича вил.туман, МФЙ, кўча номи, уй
              рақами)
            </p>
          </div>
          <div className="family1">
            <div className="input">
            <select className="check-family">
                          <option value="Tilni tanlang" selected disabled>
                          Оила аъзоингизни танланг
                          </option>
                          <option>Бобом</option>
                          <option>Бувим</option>
                          <option>Отам</option>
                          <option>Онам</option>
                          <option>Акам</option>
                          <option>Укам</option>
                          <option>Опам</option>
                          <option>Синглим</option>
                          <option>Турмуш ўртоғим</option>
                          <option>Ўғлим</option>
                          <option>Қизим</option>
                          <option>Қайнотам</option>
                          <option>Қайнонам</option>
                        </select>              
              <textarea />
              <textarea />
              <textarea />
              <textarea />
              <button onClick={this.click1}>+</button>
            </div>
            {this.state.fam.map(() => {
              return (
                <>
                  <div className="input">
                  <select className="check-family">
                          <option value="Tilni tanlang" selected disabled>
                            Оила аъзоингизни танланг
                          </option>
                          <option>Бобом</option>
                          <option>Бувим</option>
                          <option>Отам</option>
                          <option>Онам</option>
                          <option>Акам</option>
                          <option>Укам</option>
                          <option>Опам</option>
                          <option>Синглим</option>
                          <option>Турмуш ўртоғим</option>
                          <option>Ўғлим</option>
                          <option>Қизим</option>
                          <option>Қайнотам</option>
                          <option>Қайнонам</option>
                        </select>              
                    <textarea />
                    <textarea />
                    <textarea />
                    <textarea />
                  </div>
                </>
              );
            })}
          </div>
          <div className="adres">
            <p>13. Расмий ёзишмалар учун яшаш манзилингиз</p>
            <input />
          </div>
          <div className="mail">
            <p>14. Расмий ёзишмалар учун электрон почта манзилингиз:</p>
            <input
              onChange={(e) => this.setState({ mail: e.target.value })}
              type="text"
              placeholder="Email манзилингизни киритинг"
              value={this.state.mail}
            />
          </div>
          <div className="number">
            <p>15. Шахсий уяли телефон рақамингиз</p>
            <div className="raqam">
              <b>+998</b>
              <select>
                <option value="" selected>
                  90
                </option>
                <option>91</option>
                <option>93</option>
                <option>94</option>
                <option>95</option>
                <option>97</option>
                <option>98</option>
                <option>99</option>
                <option>33</option>
                <option>88</option>
              </select>
              <input
                type="number"
                onChange={(e) => this.setState({ raqam: e.target.value })}
                placeholder="Ракамингизни киритинг"
                value={this.state.raqam}
              />
              <br />
              <br />
              {/* {if(this.state.raqam.length!===""){
                {(<b style={{color:"red", width:"200px", border: "none", marginLeft:"10px"}}>"Киритилмокда"</b>)}
                if(this.state.raqam.length===7){(<b style={{color:"red", width:"200px", border: "none", marginLeft:"10px"}}>"Тугри"</b>)}
              else{(<b style={{color:"red", width:"200px", border: "none", marginLeft:"10px"}}></b>)}}; */}
              {this.state.raqam.length === 7 ? (
                <b
                  style={{
                    color: "green",
                    width: "200px",
                    border: "none",
                    marginLeft: "10px",
                  }}
                >
                  Тугри
                </b>
              ) : (
                <b
                  style={{
                    color: "red",
                    width: "200px",
                    border: "none",
                    marginLeft: "10px",
                  }}
                >
                  Текширинг
                </b>
              )}
            </div>
          </div>
          <div className="date">
            <p>Tўлдирилган вақти</p>
            <input type="date" name="date" id="dateinput"></input>
          </div>
        </main>
      </>
    );
  }
}
export default Main;
