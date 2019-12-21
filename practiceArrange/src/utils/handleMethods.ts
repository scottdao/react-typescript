import * as _ from "lodash";

export const handleErrorCheck = (err?: object): any => {
  return err[_.head(_.keys(err))].errors[0].message;
};
