import React, { useState } from "react";

import './UserForm.css';
import Button from './UI/Button';
import Modal from './UI/Modal';

const UserForm = (props) => {

    const [userInput, setUserInput] = useState({
        enteredUser: '',
        enteredAge: '',
    });
    const [error, setError] = useState();
    
    const submitHandler = (event) => {
        event.preventDefault();
        console.log(userInput.enteredUser);
        console.log(userInput.enteredAge);
        
        if (userInput.enteredUser.trim().length === 0 || userInput.enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid Input',
                message: 'Please enter a valid name and age (non-empty values).'
            });
        }
        if (+userInput.enteredAge < 1) {
            setError({
                title: 'Invalid Age',
                message: 'Please enter a valid age (geater than 0).'
            });
        }
        props.onAddUser(userInput.enteredUser, userInput.enteredAge);    
        
        setUserInput({
            enteredUser: '',
            enteredAge: '',
        });    
    }

    const handleUserName = (event) => {
        setUserInput((prevState) => {
            return { ...prevState,
            enteredUser: event.target.value };
        });
    };
    
    const handleUserAge = (event) => {
        setUserInput((prevState) => {
            return { ...prevState,
            enteredAge: event.target.value };
        });
    };

    return (
        <div>
            {error && <Modal title={error.title} message={error.message} />}
            <form onSubmit={submitHandler}>
                <div className="user-module">
                    <div className="user-inputs">
                        <div className="user-input">
                            <label htmlFor="user name" className="user-input__control">Username</label>
                            <input type="text" value={userInput.enteredUser} className="user-input__control" onChange={handleUserName}/>
                        </div>
                        <div className="user-input">
                            <label htmlFor="age" className="user-input__control">Age (Years)</label>
                            <input type="text" value={userInput.enteredAge} className="user-input__control" onChange={handleUserAge} />
                        </div>
                        <div className="user-input">
                            <Button type="submit" />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default UserForm;


    // const handleNewUser = (user) => {
    //     let name = user.name;
    //     let age = user.age;

    //     <SingleUser userName={name} userAge={age} />
    // }
    