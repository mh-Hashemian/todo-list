import { useState } from "react";
import { Button, Container } from "reactstrap";
import Header from "@/components/Header";
import AddModal from "@/components/AddModal";

function App() {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className="min-vh-100" data-bs-theme="dark">
      <Header />
      <main className="pt-3">
        <Container>
          <AddModal toggle={toggle} modal={modal} />
          <Button className="rounded-circle w-3" onClick={toggle}>
            +
          </Button>
        </Container>
      </main>
    </div>
  );
}

export default App;
