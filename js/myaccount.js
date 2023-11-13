document.addEventListener('DOMContentLoaded', function () {
    const accountNowButton = document.getElementById ('account-button__now');
    const accountHisButton = document.getElementById ('account-button__his');
    const accountPassButton = document.getElementById ('account-button__pass');
    const accountLdButton = document.getElementById ('account-button__ld');
    
    const accountNow = document.getElementById ('account-now');
    const accountHis = document.getElementById ('account-his');
    const accountPass = document.getElementById ('account-pass');
    const accountLd = document.getElementById ('account-ld');

    accountLdButton.addEventListener ( 'click', () => {
        accountNow.style.display = 'none';
        accountLd.style.display = 'block';
        accountHis.style.display = 'none';
        accountPass.style.display = 'none';
    });

    accountNowButton.addEventListener ( 'click', () => {
        accountNow.style.display = 'block';
        accountLd.style.display = 'none';
        accountHis.style.display = 'none';
        accountPass.style.display = 'none';
    });

    accountHisButton.addEventListener ( 'click', () => {
        accountNow.style.display = 'none';
        accountLd.style.display = 'none';
        accountHis.style.display = 'block';
        accountPass.style.display = 'none';
    });

    accountPassButton.addEventListener ( 'click', () => {
        accountNow.style.display = 'none';
        accountLd.style.display = 'none';
        accountHis.style.display = 'none';
        accountPass.style.display = 'block';
    });

    const accountQuitButton = document.getElementById ('account-button__quit');
    const quitWindow = document.getElementById('quitWindow');
    const quitWindowNo = document.getElementById ('quitWindowNo');

    accountQuitButton.addEventListener('click', () => { 
        quitWindow.style.display = 'flex';
    });
    quitWindowNo.addEventListener('click', () => {
        quitWindow.style.display = 'none';
    });

    const changeDataButton = document.getElementById('changeData');
    const saveChangesButton = document.getElementById('saveChangesButton');

    const nameText = document.getElementById('nameText');
    const nameInput = document.getElementById('nameInput');
    const nameData = document.getElementById('nameData');
    const nameInputData = document.getElementById('nameInputData');

    const snameText = document.getElementById('snameText');
    const snameInput = document.getElementById('snameInput');
    const snameData = document.getElementById('snameData');
    const snameInputData = document.getElementById('snameInputData');

    const fnameText = document.getElementById('fnameText');
    const fnameInput = document.getElementById('fnameInput');
    const fnameData = document.getElementById('fnameData');
    const fnameInputData = document.getElementById('fnameInputData');

    const emailText = document.getElementById('emailText');
    const emailData = document.getElementById('emailData');
    const emailInput = document.getElementById('emailInput');
    const emailInputData = document.getElementById('emailInputData');

    const phoneText = document.getElementById('phoneText');
    const phoneData = document.getElementById('phoneData');
    const phoneInput = document.getElementById('phoneInput');
    const phoneInputData = document.getElementById('phoneInputData');

    const addressText = document.getElementById('addressText');
    const addressData = document.getElementById('addressData');
    const addressInput = document.getElementById('addressInput');
    const addressInputData = document.getElementById('addressInputData');

    const warningMessage = document.getElementById('warning');

    let prevName = nameData.textContent;
    let prevSname = snameData.textContent;
    let prevFname = fnameData.textContent;

    let prevEmail = emailData.textContent;

    let prevPhone = phoneData.textContent;

    let prevAddress = addressData.textContent;

    // Добавьте аналогичные переменные для email, телефона, адреса и т.д.

    changeDataButton.addEventListener('click', () => {
        // Переключаем видимость элементов
        nameText.style.display = 'none';
        nameInput.style.display = 'block';

        snameText.style.display = 'none';
        snameInput.style.display = 'block';

        fnameText.style.display = 'none';
        fnameInput.style.display = 'block';

        emailText.style.display = 'none';
        emailInput.style.display = 'block';

        phoneText.style.display = 'none';
        phoneInput.style.display = 'block';

        addressText.style.display = 'none';
        addressInput.style.display = 'block';

        saveChangesButton.style.display = 'flex';

        nameInputData.value = prevName;
        snameInputData.value = prevSname;
        fnameInputData.value = prevFname;
        emailInputData.value = prevEmail;
        phoneInputData.value = prevPhone;
        addressInputData.value = prevAddress;
    });

    saveChangesButton.addEventListener('click', () => {
        // Переключаем видимость элементов
        nameText.style.display = 'block';
        nameInput.style.display = 'none';

        snameText.style.display = 'block';
        snameInput.style.display = 'none';

        fnameText.style.display = 'block';
        fnameInput.style.display = 'none';

        emailText.style.display = 'block';
        emailInput.style.display = 'none';

        emailText.style.display = 'block';
        emailInput.style.display = 'none';

        phoneText.style.display = 'block';
        phoneInput.style.display = 'none';

        addressText.style.display = 'block';
        addressInput.style.display = 'none';

        saveChangesButton.style.display = 'none';

        // Копируем текст из input в p
        // Сохраняем текущие данные перед изменением
        prevName = nameInputData.value;
        prevSname = snameInputData.value;
        prevFname = fnameInputData.value;
        prevEmail = emailInputData.value;
        prevAddress = addressInputData.value;
        prevPhone = phoneInputData.value;

        // Копируем текст из input в p
        nameData.textContent = prevName;
        snameData.textContent = prevSname;
        fnameData.textContent = prevFname;
        emailData.textContent = prevEmail;
        phoneData.textContent = prevPhone;
        addressData.textContent = prevAddress;

        // Добавьте аналогичный код для email, телефона, адреса и т.д.
    });

    function checkLength(input, maxLength, block) {
        if (input.value.length > maxLength) {
            warningMessage.textContent = `Длина не должна превышать ${maxLength} символов`;
            warningMessage.style.display = 'block';
            input.value = input.value.slice(0, maxLength);
            block.style.backgroundColor = '#a13d3d';

            setTimeout(() => {
                warningMessage.textContent = '';
                warningMessage.style.display = 'none';
                block.style.backgroundColor = ''; // Возвращаем исходный цвет
            }, 5000); // 5000 миллисекунд (5 секунд)
        } else {
            warningMessage.textContent = '';
        }
    }

    nameInputData.addEventListener('input', () => checkLength(nameInputData, 50, nameInput));
    snameInputData.addEventListener('input', () => checkLength(snameInputData, 50, snameInput));
    fnameInputData.addEventListener('input', () => checkLength(fnameInputData, 50, fnameInput));
    emailInputData.addEventListener('input', () => checkLength(emailInputData, 64, emailInput));

    phoneInputData.addEventListener('input', function () {
        // Очищаем введенные данные от всего, кроме цифр
        const cleanedValue = this.value.replace(/\D/g, '');
        warningMessage.textContent = `Введите корректный формат номера`;
        warningMessage.style.display = 'block';
        phoneInput.style.backgroundColor = '#a13d3d';

        // Обрезаем значение до 10 символов
        const truncatedValue = cleanedValue.slice(0, 11);

        // Заменяем текущее значение в поле ввода очищенным и обрезанным
        this.value = truncatedValue;

        // Сохраняем текущее значение перед изменением
        prevPhone = truncatedValue;

        setTimeout(() => {
            warningMessage.textContent = '';
            warningMessage.style.display = 'none';
            phoneInput.style.backgroundColor = ''; // Возвращаем исходный цвет
        }, 5000); // 5000 миллисекунд (5 секунд)
    });
// ......................................................
    var password1 = document.getElementById('newPassword1');
    var password2 = document.getElementById('newPassword2');
    var passwordMismatch = document.getElementById('passwordMiss');
    const savePassword = document.getElementById('savePassword');
    const passwordConf = document.getElementById('passwordConf');

            // Слушатель изменения значений в полях ввода пароля
    
    password2.addEventListener('input', checkPasswordMatch);

    function checkPasswordMatch() {
                // Сравниваем значения введенных паролей
        if (password1.value !== password2.value) {
                    // Если пароли не совпадают, показываем предупреждение
            passwordMismatch.style.display = 'block';
        } else {
                    // Если пароли совпадают, скрываем предупреждение
            passwordMismatch.style.display = 'none';
        }
    }
    savePassword.addEventListener('click', () => {
        passwordConf.style.display = 'block';
        setTimeout(() => {
            passwordConf.style.display = 'none';
        }, 5000); // 5000 миллисекунд (5 секунд)
    });

    
});