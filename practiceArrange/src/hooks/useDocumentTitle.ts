import { useEffect } from "react";

export const useDocumentTitle = (title): void => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};
