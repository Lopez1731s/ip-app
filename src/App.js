import { Container } from "react-bootstrap";
import DataIP from "./components/DataIP/DataIP";
import SearchIP from "./components/Search/SearchIP";
import { DataProvider } from "./context/Context";

const App = () => {
  return (
    <Container className="main">
      <DataProvider>
        <SearchIP />
        <DataIP />
      </DataProvider>
    </Container>
  );
};

export default App;
