import spinner from "../assets/svg/Eclipse-0.8s-203px.svg";

export default function Spinner() {
  return (
    <div
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 50,
      }}
    >
      <div>
        <img src={spinner} alt="Loading..." style={{ height: "24rem"}} />
      </div>
    </div>
  );
}
