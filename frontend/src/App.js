import api from "./services/api";

async function leDados(){
  const response = await api.get("/user");
  console.log(response.data.data, "BACK");
}

function App() {
  leDados();
  return (
    <div>
      <h1>Simple Class</h1>
    </div>
  );
}

export default App;