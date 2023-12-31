const accountLd = document.getElementById('account-ld');

document.addEventListener('DOMContentLoaded', () => {
    // Показываем окно account-ld с анимацией
    accountLd.classList.add('show');
});

document.addEventListener('DOMContentLoaded', function () {
    const accountLdButton = document.getElementById('account-button__ld');
    const accountNowButton = document.getElementById('account-button__now');
    const accountHisButton = document.getElementById('account-button__his');
    const accountPassButton = document.getElementById('account-button__pass');
    

    const ldTitle = document.getElementById('ld-title');
    const nowTitle = document.getElementById('now-title');
    const hisTitle = document.getElementById('his-title');
    const passTitle = document.getElementById('pass-title');

    const accountNow = document.getElementById('account-now');
    const accountHis = document.getElementById('account-his');
    const accountPass = document.getElementById('account-pass');

    const changeDataButton = document.getElementById('changeData');
    const saveChangesButton = document.getElementById('saveChangesButton');
    

    const hrefTitle = document.getElementById('hrefTitle');

    function updateHrefTitle(title) {
        hrefTitle.textContent = title;
    }

    function showLd() {
        hideAll();
        accountLd.classList.add('show');
        updateHrefTitle('Личные данные');
        ldTitle.style.borderBottom = '1px solid #000';
        changeDataButton.style.display = 'block';
    }
    
    function showNow() {
        hideAll();
        accountNow.classList.add('show');
        updateHrefTitle('Текущие заказы');
        nowTitle.style.borderBottom = '1px solid #000';
        changeDataButton.style.display = 'none';
    }
    
    function showHis() {
        hideAll();
        accountHis.classList.add('show');
        updateHrefTitle('История заказов');
        hisTitle.style.borderBottom = '1px solid #000';
        changeDataButton.style.display = 'none';
    }
    
    function showPass() {
        hideAll();
        accountPass.classList.add('show');
        updateHrefTitle('Сменить пароль');
        passTitle.style.borderBottom = '1px solid #000';
        changeDataButton.style.display = 'none';
    }
    
    function hideAll() {
        const allAccounts = [accountNow, accountLd, accountHis, accountPass];
        allAccounts.forEach(account => {
            account.classList.remove('show');
        });
    
        const allTitles = [ldTitle, nowTitle, hisTitle, passTitle];
        allTitles.forEach(title => {
            title.style.borderBottom = 'none';
        });
    }
    
    // Показываем окно account-ld при загрузке страницы
    
    
    accountLdButton.addEventListener('click', showLd);
    accountNowButton.addEventListener('click', showNow);
    accountHisButton.addEventListener('click', showHis);
    accountPassButton.addEventListener('click', showPass);

    

    const accountQuitButton = document.getElementById('account-button__quit');
    const quitWindow = document.getElementById('quitWindow');
    const quitWindowNo = document.getElementById('quitWindowNo');

    accountQuitButton.addEventListener('click', () => {
        quitWindow.style.display = 'flex';
    });
    quitWindowNo.addEventListener('click', () => {
        quitWindow.style.display = 'none';
    });

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
        if (accountLd.style.display === 'block') {
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
        }
        else if (accountLd.style.display === 'none') {
            accountNow.style.display = 'none';
            accountLd.style.display = 'block';
            accountHis.style.display = 'none';
            accountPass.style.display = 'none';

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
        }
        // Переключаем видимость элементов

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

        // Проверяем, если введено более 11 цифр, то игнорируем
        if (cleanedValue.length > 11) {
            this.value = prevPhone; // Восстанавливаем предыдущее значение
            return;
        }

        // Проверяем, если есть буквы во введенных данных
        if (/[^0-9]/.test(cleanedValue)) {

            return;
        }

        // Обрезаем значение до 11 символов
        const truncatedValue = cleanedValue.slice(0, 11);

        // Заменяем текущее значение в поле ввода очищенным и обрезанным
        this.value = truncatedValue;

        // Проверяем, если пользователь пытается ввести более 11 чисел
        if (cleanedValue.length > 11) {

        }
        prevPhone = truncatedValue;

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

    const showPasswordCheckbox = document.getElementById('showPassword');
    const passwordInputs = document.querySelectorAll('.account-container__pass__change');

    passwordInputs.forEach(function (input) {
        input.type = 'password';
    });

    showPasswordCheckbox.addEventListener('change', function () {
        const showPassword = this.checked;

        passwordInputs.forEach(function (input) {
            input.type = showPassword ? 'text' : 'password';
        });
    });


});