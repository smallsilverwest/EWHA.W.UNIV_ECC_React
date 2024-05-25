import React, { useState } from "react";
import Toolabar from "./Toolbar";

functioln LandingPage(props) {
  const [isLoggdIn, setIsLoggedIn] = useState(false);

  const onClickLogin = () => {
    setIsLoggedIn(true);
  };

  const onClickLogoujt = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <Toolbar
        isLoggedIn = {isLoggedIn}
        onClickLogin = {onClickLogin}
        onClickLogout = {onClickLogout}
       />
       <div style = {{ padding: 16 }} > 소플과 함께하는 리액트 공부!</div>
    </div>
  );
}

export default LandingPage;
