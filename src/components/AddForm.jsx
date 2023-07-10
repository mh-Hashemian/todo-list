import { Button, Form, FormGroup, Input, Label } from "reactstrap";

function AddForm() {
  return (
    <Form>
      <FormGroup>
        <Label>Title</Label>
        <Input type="text" />
      </FormGroup>
      <FormGroup>
        <Label>Description</Label>
        <Input type="text" />
      </FormGroup>

      <Button className="w-100" color="success">
        Create todo
      </Button>
    </Form>
  );
}

export default AddForm;
