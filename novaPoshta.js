/**
 * @name        NovaPoshta simplest updating status
 * @description Simplest upgrade the status of delivery 'NovaPoshta' Ukraine
 * @version     1
 */

novaPoshta = {

    defaultText: 'Коли вантаж буде доставлено до місця призначення, ' +
        'на номер телефону Одержувача надійде SMS-повідомлення. ',
    /**
     * Check status
     */
    check: function () {
        $('input.btn.submit').click(function (event) {
            event.preventDefault();
        });
        $now = $('div.response p:eq(2)').text();

        if (this.defaultText !== $now) {
            alert('Изменение статуса товара');
        }
        this.time();
    },

    /**
     * Add date and time of updating
     */
    time: function () {
        var date = new Date();
        console.log(date);
    }
};

setInterval(function () {
    novaPoshta.check()
}, 60000);