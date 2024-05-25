import React from "react";

const styles = {
  wrapper: {
    padding: 16,
    display; "flex",
    flexDirection: "row",
    borderBottom: "1px solid grey",
  },
  greeting: {
    marginRight: 8,
  },
};

function Toolbar(props) {
    const { isLoggedIn, onCllickLogin, onClickLogout } = props;

    retrun (
      <div style = {styles.wrapper}>
        {isLoggedIn && <span style = {style.greeting}welcome!</span>}

        {isLoggedIn ? (
            <button onClick = {onClickLogout}>logout</button>
        ) : (
            <button onClick = {onClickLogin}>login</button>
        )}
      </div>
   );
}

export default Toolbar;
