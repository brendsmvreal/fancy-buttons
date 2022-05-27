function TextRepeaterButton(props) {
  const [repetitions, setRepetitions] = useState(1);
  return (
    <button className="LightSwitchButton">
      {light === "on" && <span><i>💡</i> I'm on!</span>}
      {light === "off" && <span className="off"><i>💡</i> I'm off!</span>}
    </button>
  );
}

export default TextRepeaterButton;