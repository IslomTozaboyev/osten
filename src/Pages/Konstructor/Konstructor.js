import React, { useState } from "react";
import "./Konstructor.css";
import Zoom from "react-reveal/Zoom";
import UniversalTheme from "../../components/UniversalTheme";
import mirrorimg1 from "../../constructorImages/mirror-ful.png";
import mirrorimg2 from "../../constructorImages/mirror-half.png";
import mirrorimg3 from "../../constructorImages/mirror-half-small.png";
import handerimg1 from "../../constructorImages/backwall-handrail.png";
import handerimg2 from "../../constructorImages/sidewall-handrail.png";

const Proffesional = () => {
  const [a, seta] = useState(false);
  const [b, setb] = useState(false);
  const [c, setc] = useState(false);
  const [e, sete] = useState(false);
  const [f, setf] = useState(false);
  const [g, setg] = useState(false);
  const [mirror1, setmirror1] = useState(false);
  const [mirror2, setmirror2] = useState(false);
  const [mirror3, setmirror3] = useState(false);
  const [hander1, sethander1] = useState(false);
  const [hander2, sethander2] = useState(false);
  const [top1, settop1] = useState(false);
  const [top2, settop2] = useState(false);
  const [top3, settop3] = useState(false);
  const [bottom, setbottom] = useState(false);

  const bg1 = () => {
    seta(true);
    setb(false);
    setc(false);
  };
  const bg2 = () => {
    seta(false);
    setb(true);
    setc(false);
  };
  const bg3 = () => {
    seta(false);
    setb(false);
    setc(true);
  };
  const bg4 = () => {
    sete(true);
    setf(false);
    setg(false);
  };
  const bg5 = () => {
    sete(false);
    setf(true);
    setg(false);
  };
  const bg6 = () => {
    sete(false);
    setf(false);
    setg(true);
  };

  const mir1 = () => {
    setmirror1(true);
    setmirror2(false);
    setmirror3(false);
  };
  const mir2 = () => {
    setmirror1(false);
    setmirror2(true);
    setmirror3(false);
  };
  const mir3 = () => {
    setmirror1(false);
    setmirror2(false);
    setmirror3(true);
  };
  const close = () => {
    setmirror1(false);
    setmirror2(false);
    setmirror3(false);
  };
  const close2 = () => {
    sethander1(false);
    sethander2(false);
  };

  const hander = () => {
    sethander1(true);
    sethander2(false);
  };
  const handerl2 = () => {
    sethander1(false);
    sethander2(true);
  };

  const topbg1 = () => {
    settop1(true);
    settop2(false);
    settop3(false);
  };
  const topbg2 = () => {
    settop1(false);
    settop2(true);
    settop3(false);
  };
  const topbg3 = () => {
    settop1(false);
    settop2(false);
    settop3(true);
  };
  const bottomimg = () => {
    setbottom(true);
  };
  return (
    <div>
      <UniversalTheme>
        <div className="universialTheme universal">
          <div className="universialTheme__opacity container d-flex align-items-center text-white">
            <div className="container overflow-hidden">
              <Zoom>
                <h1 className="pro__title">??????????????????????</h1>
              </Zoom>
            </div>
          </div>
        </div>
      </UniversalTheme>

      <div className="home__services ">
        <div className="container  p-5">
          <div className="services__title">
            <h1 className="title text-center my-4">
              ???????????????? ???????????????? ???????????? ??????????
            </h1>
          </div>
          <div className="lift__content mt-5 pt-5">
            <div className="row w-100 m-0 justify-content-center">
              <div className="col-lg-4 col-md-10 col-10 lifts">
                <div className="lift__container">
                  <div
                    className={`bac1 ${
                      (a && "bg1") || (b && "bg2") || (c && "bg3")
                    }`}
                  ></div>
                  <div
                    className={`bac2 ${
                      (e && "bg1") || (f && "bg2") || (g && "bg3")
                    }`}
                  ></div>
                  <img
                    className={` w-100 d-none ${
                      (mirror1 && "bac3") ||
                      (mirror2 && "bac3") ||
                      (mirror3 && "bac3")
                    } `}
                    src={
                      (mirror1 && mirrorimg1) ||
                      (mirror2 && mirrorimg2) ||
                      (mirror3 && mirrorimg3)
                    }
                    alt=""
                  />
                  <img
                    src={hander1 && handerimg1}
                    className={`d-none ${hander1 && "handerlist1"}`}
                    alt=""
                  />
                  <img
                    src={hander2 && handerimg2}
                    className={`d-none ${hander2 && "handerlist2"}`}
                    alt=""
                  />
                  <div
                    className={`lifttop ${
                      (top1 && "topimg1") ||
                      (top2 && "topimg2") ||
                      (top3 && "topimg3")
                    }`}
                  ></div>
                  <div className={`liftbottom ${bottom && "lifticon"}`}></div>
                </div>
              </div>
              <div className="col-lg-8 col-md-10 col-10 ps-5">
                <p>
                  <b>
                    ???????????????? ???????? ?????????????????????? ???????????????? ?????????? ???????????? ?????? ??????????????.
                    ???????????????? ???????????? ???? ?????????????????? "COMPANY NAME", ????????????????????????
                    ??????????????????, ?????????????????? ?? ????????????????????, ?????????? ?????????????? ????????????????????
                    ???????????????? ??????????.
                  </b>
                </p>
                <div className="mb-3">
                  <p>
                    <b>?????? 1</b> - ?????????????? ????????????????????
                  </p>
                </div>
                <div className="d-flex w-100 row mb-3">
                  <div className="col-lg-6 col-xl-5">
                    <p>???????????? (????)</p>
                    <p>?????????????? (????) ?????????????? ????????????</p>
                    <p>???????????? (????) ???????????? ????????????</p>
                  </div>
                  <div className="col-lg-6 col-xl-7">
                    <input
                      type="number"
                      className="form-control w-100 mb-2"
                      placeholder="????????????"
                    />
                    <input
                      type="number"
                      className="form-control w-100 mb-2"
                      placeholder="??????????????"
                    />
                    <input
                      type="number"
                      className="form-control w-100 mb-2"
                      placeholder="????????????"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <p>
                    <b>?????? 2</b> - ?????????????? ???????? ?????????????? ????????????
                  </p>
                </div>
                <div className="d-flex mb-4">
                  <div className="colors bg1" onClick={bg1}>
                    {" "}
                  </div>
                  <div className="colors bg2" onClick={bg2}>
                    {" "}
                  </div>
                  <div className="colors bg3" onClick={bg3}></div>
                </div>
                <div className="mb-4">
                  <p>
                    <b>?????? 3</b> - ?????????????? ???????? ???????????? ????????????
                  </p>
                </div>
                <div className="d-flex mb-4">
                  <div className="colors bg1" onClick={bg4}>
                    {" "}
                  </div>
                  <div className="colors bg2" onClick={bg5}>
                    {" "}
                  </div>
                  <div className="colors bg3" onClick={bg6}></div>
                </div>
                <div className="mb-4">
                  <p>
                    <b>?????? 4</b> - ?????????????? ?????????? ??????????????
                  </p>
                </div>
                <div className="d-flex mb-4">
                  <div className="colors mirror1" onClick={mir1}></div>
                  <div className="colors mirror2" onClick={mir2}></div>
                  <div className="colors mirror3" onClick={mir3}></div>
                  <div className="colors close" onClick={close}></div>
                </div>
                <div className="mb-4">
                  <p>
                    <b>?????? 5</b> - ?????????????? ??????????????
                  </p>
                </div>
                <div className="d-flex mb-4">
                  <div className="colors handerlis1" onClick={hander}></div>
                  <div className="colors handerlis2" onClick={handerl2}></div>
                  <div className="colors close" onClick={close2}></div>
                </div>
                <div className="mb-4">
                  <p>
                    <b>?????? 6</b> - ?????????????? ??????
                  </p>
                </div>
                <div className="d-flex flex-column mb-4">
                  <div
                    className="colors lifticon mb-4"
                    onClick={bottomimg}
                  ></div>
                  <h4 className="mb-4"> ?????? ????????</h4>
                  <div className="d-flex align-items-center">
                    <div className="colors shadow d-flex align-items-center justify-content-center">
                      ??????????{" "}
                    </div>
                    <div className="colors shadow d-flex align-items-center justify-content-center">
                      ??????????????????
                    </div>
                  </div>
                </div>
                <div className="mb-4">
                  <p>
                    <b>?????? 7</b> - ???????????????? ???????????????????? ??????????????????
                  </p>
                </div>
                <div className="d-flex mb-4">
                  <div className="imagestop topimg1" onClick={topbg1}></div>
                  <div className="imagestop topimg2" onClick={topbg2}></div>
                  <div className="imagestop topimg3" onClick={topbg3}></div>
                </div>
                <form>
                  <div className="d-flex w-100 row mb-3">
                    <div className="col-lg-4">
                      <p>???????????????? ??????????????</p>
                      <p>???????????????? ????????????????</p>
                      <p>???????????????????? ????????</p>
                      <p>??????????</p>
                      <p>???????????????? ????????????</p>
                      <p>?????????? ????????????????</p>
                      <p>?????????????????????? ??????????</p>
                    </div>
                    <div className="col-lg-8">
                      <input type="text" className="form-control w-100 mb-2" />
                      <input type="text" className="form-control w-100 mb-2" />
                      <input type="text" className="form-control w-100 mb-2" />
                      <input type="text" className="form-control w-100 mb-2" />
                      <input type="text" className="form-control w-100 mb-2" />
                      <input type="text" className="form-control w-100 mb-2" />
                      <input type="text" className="form-control w-100 mb-2" />
                    </div>
                    <div className="col-12 py-3 text-center">
                      <button className="btn button"> ?????????????????? ????????????</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proffesional;
