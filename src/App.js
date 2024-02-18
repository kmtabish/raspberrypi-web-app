import { useState, useEffect } from "react";
import { useSocket } from "./context/SocketProvider";
import "./App.css";

function App() {
  const socket = useSocket();
  const [msgFromServer, setMsgFromServer] = useState({ status: "OFF" });

  useEffect(() => {
    socket.on("msg:server", (msg) => {
      setMsgFromServer(msg);
    });
  }, [socket]);

  const sendMsg = () => {
    socket.emit("msg", "This is msg");
  };
  return (
    <div className="App">
      <button onClick={sendMsg}>Send Message</button>
      {msgFromServer && <div>{`Light: ${msgFromServer.status}`} </div>}
    </div>
  );
}

export default App;
