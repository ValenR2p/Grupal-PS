import formatDate from "./formateDate.js";

export default async function userDetail(userData) {
    return `<li>
                <div>
                    <h2>Mi usuario</h2>
                    <h3>Nombre y Apellido</h3>
                    <p id="userName">${userData.name} ${userData.lastName}</p>
                </div>
            </li>
            <li>
                <div class="user-data">
                    <div>
                        <h3>Correo</h3>
                        <p id="userEmail">${userData.email}</p>
                    </div>
                    <a id="changeEmailBtn" href="#" class="edit-icon" onclick="enableEdit()">
                        <img class="user-update-icon" src="./assets/img/pencil.svg">
                    </a>
                </div>
            </li>
            <li>
                <div class="user-data">
                    <div>
                        <h3>Teléfono</h3>
                        <p id="userPhone">${userData.phone}</p>
                    </div>
                    <a id="changePhoneBtn" href="#" class="edit-icon" onclick="enableEdit()">
                        <img class="user-update-icon" src="./assets/img/pencil.svg">
                    </a>
                </div>
            </li>
            <li>
                <div>
                    <h3>Fecha de nacimiento</h3>
                    <p id="userBirthDate">${formatDate(userData.birthDate)}</p>
                </div>
            </li>
            <li>
                <div>
                    <h3>DNI</h3>
                    <p id="userDni">${userData.dni}</p>
                </div>
            </li>
            <li>
                <div>
                    <h3>Dirección</h3>
                    <p id="userAdress">${userData.adress}</p>
                    <p id="userCity">${userData.city}</p>
                    <p id="userCountry">${userData.country}</p>
                </div>
            </li>
            <li>
                <div class="user-data">
                    <div>
                        <h3>Contraseña</h3>
                        <p>${userData.password}</p>
                    </div>
                    <button id="change-password-btn" class="button" style="width:auto;height:50px;">¿Cambiar contraseña?</button>
                </div>
            </li>
    `;
}
/*
<div class="user-profile-content">
            <div class="user-container">
                <div class="user-info-container">
                    <h2 class="user-profile-title">Mi usuario</h2>
                    <div class="user-info">
                        <div class="section1">
                            <p><strong>Nombre y Apellido</strong></p>
                            <p id="nameUser">Máximo Cozzetti</p>
                        </div>
                    </div>
                    <div class="user-info">
                        <div class="section1">
                            <p><strong>Correo</strong></p>
                            <p id="emailUser">maximo.cozzetti@mail.com</p>
                        </div>
                        <div class="section2">
                            <a id="changeEmailBtn" href="#" class="edit-icon">&#9998;</a>
                        </div>
                    </div>
                    <div class="user-info">
                        <div class="section1">
                            <p><strong>Teléfono</strong></p>
                            <p id="telUser">113456789</p>
                        </div>
                        <div class="section2">
                            <a id="changeTelBtn" href="#" class="edit-icon">&#9998;</a>
                        </div>
                    </div>
                    <div class="user-info">
                        <div class="section1">
                            <p><strong>Fecha de nacimiento</strong></p>
                            <p id="dateUser">31-02-1990</p>
                        </div>
                    </div>
                    <div class="user-info">
                        <div class="section1">
                            <p><strong>DNI</strong></p>
                            <p id="dniUser">38.123.321</p>
                        </div>
                    </div>
                    <div class="user-info">
                        <div class="section1">
                            <p><strong>Dirección</strong></p>
                            <p id="dirUser">Ravenna 312, Florencio Varela, Buenos Aires, 1888</p>
                        </div>
                    </div>
                    <div class="user-info">
                        <div class="section1">
                            <p><strong>Contraseña</strong></p>
                            <p id="passUser">********</p>
                        </div>
                        <div class="section2">
                            <button class="change-password-btn">¿Cambiar contraseña?</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    */