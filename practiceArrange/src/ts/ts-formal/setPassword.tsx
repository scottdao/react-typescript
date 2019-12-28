import * as React from "react";
import "@/css/set-password.css";
// import { Link } from "react-router-dom";
import { Button, InputItem, List, Toast } from "antd-mobile";
import { useEffect } from "react";
import { createForm } from "rc-form";
import { handleErrorCheck } from "../../utils/handleMethods";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
// console.log(handleErrorCheck);
// const Item = List.Item;

const SetPassword = ({ form, location, history }): any => {
  // console.log(_);
  // console.log(form);
  const { getFieldDecorator } = form;
  useEffect(() => {}, []);
  useDocumentTitle("设置密码");
  return (
    <div className="set-password">
      <p className="set-head" style={{ marginBottom: "10px" }}>
        请您设置密码
      </p>
      <List>
        {getFieldDecorator("password", {
          rules: [
            { required: true, message: "请输入密码" },
            {
              pattern: /^\w{6}$/,
              message: "密码长度6位"
            }
          ]
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

        {getFieldDecorator("passwordAgin", {
          rules: [
            { required: true, message: "请再次输入密码" },
            {
              pattern: /^\w{6}$/,
              message: "密码长度6位"
            }
            // {
            //   validator: (rules, value, callback) => {
            //     // console.log(value);
            //     callback();
            //   }
            // }
          ]
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

        <Button
          type="primary"
          size="small"
          style={{ width: "100%", marginTop: "24px" }}
          onClick={() => {
            form.validateFields((err: any, value: any) => {
              if (!err) {
                if (value.password === value.passwordAgin) {
                  // console.log(location, history);
                  history.push("/backups");
                } else {
                  Toast.info("密码与确认密码必须一致", 1);
                }
              } else {
                const tipInfo: string = handleErrorCheck(err);
                Toast.info(tipInfo, 1);
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
