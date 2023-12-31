import * as React from "react";
import {Provider} from "react-redux";

import store from "./store";

import App from "./App";

const Root: React.FunctionComponent = () => {
    return (
        // @ts-ignore
        <Provider store={store}>
            <App/>
        </Provider>
    );
};

export default Root;
