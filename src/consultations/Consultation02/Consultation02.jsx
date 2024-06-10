import Select from "../../components/Select/Select";
import "./styles.css";

function Consultation02() {
  return (
    <div className="consul-component">
      <h1>Data Form</h1>
      <Select name="userGender" idSelect="idGender">
        <option value="man">Мужчина</option>
        <option value="woman">Женщина</option>
      </Select>
      <Select name="userCity" labelname="City" idSelect="idCity">
        <option>Berlin</option>
        <option>Munchen</option>
        <option>Leipzig</option>
      </Select>
    </div>
  );
}

export default Consultation02;
