import Pf from "./Profiles";

function Hdc() {
  alert("You Click!!!!!");
}

interface Props {
  title: String;
  descr: String;
}

function Mcpn({ title, descr }: Props) {
  // const title = props.title;
  const a = "bamboo";
  const styles = {
    fontSize: "1rem",
  };
  return (
    <>
      {/* {title || "No title"}
      <br />
      {descr || "No Desc"} */}
      {/* <button onClick={Hdc}>Click here</button> */}
      {/* <h1 style={styles}>Hello Wolrd!!!!!!!!</h1> */}
      {/* <p>{a}</p> */}
      {/* <p>{new Date().toDateString()}</p> */}
      <Pf />
    </>
  );
}

export default Mcpn;
