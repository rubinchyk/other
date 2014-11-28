    novaPoshta = {
        // Period of checking 60000 == 1min
        timeOut: 60000,
        // Text of checking
        defaultText: 'Коли вантаж буде доставлено до місця призначення, ' +
            'на номер телефону Одержувача надійде SMS-повідомлення. ',
        // Check status
        check: function () {
            // Update information
            $('input.btn.submit').click(function (event) {
                event.preventDefault();
            });
            // Current status
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
    }, novaPoshta.timeOut);
