import { createBrowserHistory } from "history";
export const history = createBrowserHistory();
export const go = (path) => history.push(path);
export const replace = (path) => history.replace(path);