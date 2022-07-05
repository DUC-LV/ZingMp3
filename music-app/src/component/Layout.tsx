import React from "react";
import Header from "./Header";
const Layout = ({ children }: React.PropsWithChildren<{}>) => {
    return (
        <div>
            <Header />
            {children}
        </div>
    );
};

export default Layout;