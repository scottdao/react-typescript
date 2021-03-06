import * as React from "react";
// import { useEffect, useState } from "react";
import { Route, NavLink } from "react-router-dom";
import { Switch, Redirect } from "react-router";
import Assets from "./main/assets";
import Mine from "./main/mine";
import Quotation from "./main/quotation";
import "@/css/main.css";
const Index = ({ match, location, history }): any => {
  return (
    <div className="main-index">
      <ul className="main-nav">
        <NavLink to={`${match.url}/assets`} activeClassName="activeName">
          <li>
            <p>
              <span className="iconfont">&#xe605;</span>
            </p>
            <p>资产</p>
          </li>
        </NavLink>
        <NavLink to={`${match.url}/quotation`} activeClassName="activeName">
          <li>
            <p>
              <span className="iconfont">&#xe632;</span>
            </p>
            <p>行情</p>
          </li>
        </NavLink>
        <NavLink to={`${match.url}/mine`} activeClassName="activeName">
          <li>
            <p>
              <span className="iconfont">&#xe618;</span>
            </p>
            <p>我的</p>
          </li>
        </NavLink>
      </ul>

      <Switch location={location}>
        <Route exact path={`${match.url}/mine`} component={Mine} />
        <Route exact path={`${match.url}/quotation`} component={Quotation} />
        <Route exact path={`${match.url}/assets`} component={Assets} />
        <Route render={() => <Redirect to={`${match.url}/assets`} />} />
      </Switch>
    </div>
  );
};
export default Index;
