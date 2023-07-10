import { Modal, ModalHeader, ModalBody } from "reactstrap";
import AddForm from "@/components/AddForm";

function AddModal({ modal, toggle }) {
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} backdrop={true} keyboard={true}>
        <ModalHeader toggle={toggle}>Create Todo</ModalHeader>
        <ModalBody>
          <AddForm />
        </ModalBody>
      </Modal>
    </div>
  );
}

export default AddModal;
