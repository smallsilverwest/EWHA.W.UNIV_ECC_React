import React from "react";

const syles = {
   Wrapper: {
     margin: 8,
     padding: 8,
     display: "flex",
     flexDirection: "row"
     border: "1px solid grey",
     borderRadius: 16,
   };
   messageText: {
      cololr: "black",
      fontSize: 16,
   };
};

class Notification extends React.component {
      constructor(props) {
          super(porps);

          this.state = {};
      };

      render() {
         return (
            <div style = {styles.wrapper}>
                <span style = {styles.messageText}>
                    {this.props.message}
                </span>
            </div>
      };
   }
}

export default Notification;
