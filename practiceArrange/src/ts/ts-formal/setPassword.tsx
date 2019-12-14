import * as React from "react";
import "@/css/set-password.css";
// import { Link } from "react-router-dom";
import { Button, InputItem, List, Toast } from "antd-mobile";
import { createForm } from "rc-form";
const Item = List.Item;

const SetPassword = ({ form }): any => {
  console.log(form);
  const { getFieldDecorator } = form;
  return (
    <div className="set-password">
      <p className="set-head" style={{ marginBottom: "10px" }}>
        请您设置密码
      </p>
      <List>
        <Item>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "请输入密码" }]
          })(
            <InputItem
              type="password"
              //  ref={ref => ref && ref.focus()}
              placeholder="请输入密码"
              maxLength={6}
              clear
              onErrorClick={() => {
                Toast.info("请输入密码");
              }}
            >
              密码:
            </InputItem>
          )}
        </Item>
        <Item>
          {getFieldDecorator("passwordAgin", {
            rules: [{ required: true, message: "请输入密码" }]
          })(
            <InputItem
              type="password"
              maxLength={6}
              placeholder="请再次输入密码"
              clear
            >
              确认密码:
            </InputItem>
          )}
        </Item>
        <Button
          type="primary"
          size="small"
          style={{ width: "100%", marginTop: "10px" }}
          onClick={() => {
            form.validateFields((err, value) => {
              if (!err) {
                console.log(value);
              }
            });
          }}
        >
          确认
        </Button>
      </List>
    </div>
  );
};

export default createForm({})(SetPassword);
