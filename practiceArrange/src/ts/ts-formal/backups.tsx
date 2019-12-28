import * as React from "react";
import { observer, inject } from "mobx-react";
import { useEffect, useState, useMemo } from "react";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import styled from "styled-components";
import "@/css/backups.css";

const BackupsContent = styled.div``;

const Backups = ({
  helpWordFlag,
  saveBtcData,
  clickFrame,
  frameFlag,
  saveBtcDataFn,
  clickNext
}: any) => {
  const [playList, setPlayList] = useState([]);
  const [hlepList, setHlepList] = useState([]);
  const [activeIndexArr, setActiveIndexArr] = useState(new Array(12).fill(""));
  // const playList: any = ;
  // const hlepList: any = [...saveBtcData];
  useEffect(() => {
    saveBtcDataFn();
  }, []);
  useMemo(() => {
    setPlayList(saveBtcData);
    setHlepList(saveBtcData);
  }, [saveBtcData]);
  useDocumentTitle("助记词");

  return (
    <BackupsContent className="backups-total">
      <div className="restore-account">恢复账号</div>
      <div className="help-reword">
        <header className="reword-head">请抄写你的助记词</header>
        <section className="reword-warning">
          助记词用于恢复钱包或重置钱包密码，将她准确的抄写在纸上，并存放在只有你知道的安全的地方.
        </section>
        <div className="reword-words">
          <ul className="words-sort">
            {playList &&
              playList.map((res: any, index: number) => {
                return <li key={index}>{res}</li>;
              })}
          </ul>
        </div>
        {!helpWordFlag ? (
          <div className="chance-words-list">
            <ul className="words-sort">
              {hlepList &&
                hlepList.map((res: any, index: number) => {
                  return (
                    <li
                      key={index}
                      onClick={(e: any) => {
                        activeIndexArr.splice(index, 1, res);
                        setActiveIndexArr(activeIndexArr);
                        // const lis: any = e.target;

                        setPlayList([`e.target`]);
                      }}
                      className={
                        activeIndexArr[index] == res ? "listActive" : ""
                      }
                    >
                      {res}
                    </li>
                  );
                })}
            </ul>
          </div>
        ) : (
          ""
        )}

        <div
          className={helpWordFlag ? "reword-btn " : "reword-btn confirm-btn"}
          onClick={() => {
            if (helpWordFlag) {
              clickNext();
              setPlayList([]);
            }
          }}
          style={{
            backgroundColor: playList.length === 12 ? "rgba(18,169,237,1)" : ""
          }}
        >
          {helpWordFlag ? "下一步" : "确认"}
        </div>
      </div>
      {frameFlag ? (
        <div className="modal-content">
          <section className="modal-frame">
            <div className="modal-head-img"></div>
            <p className="modal-no-screenshot">请勿截图</p>
            <p className="modal-no-tip">
              如果有人获取你的助记词直接获取你的资产！请抄写下助记词并存放在安全的地方
            </p>
            <div
              className="modal-btn"
              onClick={() => {
                // console.log(1111);
                clickFrame();
              }}
            >
              知道了
            </div>
          </section>
        </div>
      ) : (
        ""
      )}
    </BackupsContent>
  );
};
export default inject(({ actions, store, saveDataAction, saveDataStore }) => {
  return {
    clickFrame: actions.clickFrame,
    clickNext: actions.clickNext,
    frameFlag: store.frameFlag,
    helpWordFlag: store.helpWordFlag,
    firstFrame: actions.firstFrame,
    noClickNext: actions.noClickNext,
    saveBtcData: saveDataStore.saveBtcData,
    saveBtcDataFn: saveDataAction.saveBtcDataFn
  };
})(observer(Backups));
