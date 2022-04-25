import api from "./services/api";
import Routes from "./routes";
import "./global.css";
import 'bootstrap/dist/css/bootstrap.min.css';

async function leDados(){
  const response = await api.get("/user");
  console.log(response.data.data, "BACK");
}

function App() {
  leDados();
  return (
    <Routes />
  );
}

export default App;