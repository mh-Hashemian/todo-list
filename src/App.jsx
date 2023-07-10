import { Button, Container } from "reactstrap";
import Header from "@/components/Header";

function App() {
  return (
    <div className="bg-dark text-white min-vh-100">
      <Header />
      <main className="pt-3">
        <Container>
          <Button className="fw-light" color="primary">
            Click
          </Button>
        </Container>
      </main>
    </div>
  );
}

export default App;
