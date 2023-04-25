import React, { useState } from "react";
import Button from "../Button/Button";
import "./formCheckout.css";

export default function FormCheckout({ onClick }) {
    const [userData, setUserData] = useState({
        username: "",
        email: "",
        phone: "",
    });

    function handleInputChange(evt) {
        const inputText = evt.target.value;
        const inputName = evt.target.name;
        const newUserData = { ...userData };
        newUserData[inputName] = inputText;
        setUserData(newUserData);
    }

    function onSubmit(evt) {
        evt.preventDefault();
        onClick(userData);
    }

    function clearFormData(evt) {
        evt.preventDefault();
        setUserData({
            username: "",
            email: "",
            phone: "",
        });
    }

    return (
        <div className="form-container">
            <h1 className="form-title">INGRESA TUS DATOS PARA FINALIZAR TU COMPRA</h1>
            <form
                onSubmit={onSubmit}
                style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gridGap: "1rem",
                }}
            >
                <label className="label-input" htmlFor="username">Nombre</label>
                <input
                    value={userData.username}
                    name="username"
                    type="text"
                    placeholder="Nombre"
                    required
                    onChange={handleInputChange}
                    id="username"
                />
                <label className="label-input" htmlFor="email">Email</label>
                <input
                    value={userData.email}
                    name="email"
                    type="email"
                    placeholder="Email"
                    required
                    onChange={handleInputChange}
                    id="email"
                />
                <label className="label-input" htmlFor="phone">Teléfono</label>
                <input
                    value={userData.phone}
                    name="phone"
                    type="number"
                    placeholder="Teléfono"
                    required
                    onChange={handleInputChange}
                    id="phone"
                />
                <Button
                    className="btn btn-secondary"
                    onClick={clearFormData}
                    text="limpiar datos"
                />
                <Button
                    className="btn btn-primary"
                    onClick={onSubmit}
                    type="submit"
                    text="Finalizar compra"
                />
            </form>
        </div>
    );
}
