import { useState } from "react";
//import alertify from "alertifyjs";




const FormDemo1 = () => {

    const [userName, setUserName] = useState("");
    const [city, setCity] = useState("");

    /*     const onChangeHandler = (event) => {
            //setUserName(event.target.value) //event'e sebep olan nesne(event.target)'nin degeri
            //setCity(event.target.value)
            let name = event.target.name;
            let value = event.target.value;
    
            setUserName({[name]:value});
            setCity({[name]:value});
        } */


    const onChangeHandlerUserName = (event) => {
        setUserName(event.target.value)
    }

    const onChangeHandlerCity = (event) => {
        setCity(event.target.value)
    }





    const onSubmitHandler = (event) => {
        event.preventDefault();
        alert(userName +" " + city);

    }



    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <h3>User Name</h3>
                <input /* name="userName" */ onChange={onChangeHandlerUserName} type="text" placeholder="User Name..." className="form-control col-md-4"></input>
                <h3>User Name is {userName}</h3>

                <h3>City</h3>
                <input /* name="city" */ onChange={onChangeHandlerCity} type="text" placeholder="City..." className="form-control col-md-4"></input>
                <h3>City is {city}</h3>

                <input type="submit" value="Save" className="btn btn-secondary btn-sm"></input>
            </form>
        </div>
    )


}
export default FormDemo1;