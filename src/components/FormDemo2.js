import { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import alertify from "alertifyjs";


const FormDemo2 = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [city, setCity] = useState("");
    const [description, setDescription] = useState("");

    const onChangeHandlerEmail = (event) => {
        setEmail(event.target.value);
    }

    const onChangeHandlerPassword = (event) => {
        setPassword(event.target.value);
    }

    const onChangeHandlerDescription = (event) => {
        setDescription(event.target.value);
    }

    const onChangeHandlerCity = (event) => {
        setCity(event.target.value);
    }


    const onSubmitHandler = (event) => {
        event.preventDefault();
        alertify.set('notifier', 'position', 'bottom-right');
        alertify.success( email + " added to db!", 2);
        alertify.success( password + " added to db!", 2);
        alertify.success( description + " added to db!", 2);
        alertify.success( city + " added to db!", 2);
    }


    return (
        <div>
            <Form onSubmit={onSubmitHandler}>
                <FormGroup>
                    <Label for="email">E-mail</Label>
                    <Input
                        onChange={onChangeHandlerEmail}
                        type="email"
                        id="email"
                        placeholder="E-mail..."
                        className="form-control col-md-4"
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input
                        onChange={onChangeHandlerPassword}
                        type="password"
                        id="password"
                        placeholder="Password..."
                        className="form-control col-md-4"
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="description">Description</Label>
                    <Input
                        onChange={onChangeHandlerDescription}
                        type="textarea"
                        id="description"
                        placeholder="Description..."
                        className="form-control col-md-4"
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="city">City</Label>
                    <Input
                        onChange={onChangeHandlerCity}
                        type="select"
                        name="city"
                        id="city"
                        className="form-control col-md-4"
                    >
                        <option>Ankara</option>
                        <option>Eskisehir</option>
                        <option>Istanbul</option>
                        <option>Izmir</option>
                        <option>Canakkale</option>
                        <option>Kutahya</option>
                        <option>Konya</option>
                        <option>Kocaeli</option>

                    </Input>
                </FormGroup>
                <Button type="submit">Save</Button>
            </Form>
        </div>
    )


}
export default FormDemo2;