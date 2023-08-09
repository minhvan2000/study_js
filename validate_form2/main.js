function Validator(formSelector, options) {
    const _this = this;
    const formRule = {};

    function getParent(elem, selector) {
        while (elem.parentElement) {
            if (elem.parentElement.matches(selector)) {
                return elem.parentElement;
            }
            elem = elem.parentElement;
        }
    }

    /**
     * if error return "error message"
     * else return undefine
     */
    const validatorRules = {
        required: function (value) {
            return value ? undefined : 'Required, OK?';
        },
        email: function (value) {
            const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value)
                ? undefined
                : message || 'This is email, OK?';
        },
        min: function (min) {
            return function (value) {
                return value.length > min
                    ? undefined
                    : `Please, This value is greater than ${min} word`;
            };
        },

        max: function (max) {
            return function (value) {
                return value.length < max
                    ? undefined
                    : `Please, This value is lesser than ${max} word`;
            };
        },
    };

    /* Get form element in DOM by 'formSelector' */
    const formElement = document.querySelector(formSelector);

    /* Handle when form exist */
    if (formElement) {
        const inputs = formElement.querySelectorAll('[name][rules]');

        for (const input of inputs) {
            const rules = input.getAttribute('rules').split('|');

            for (let rule of rules) {
                const isRuleHasValue = rule.includes(':');
                let ruleInfo;

                if (isRuleHasValue) {
                    ruleInfo = rule.split(':');
                    rule = ruleInfo[0];
                }

                let ruleFunc = validatorRules[rule];

                if (isRuleHasValue) {
                    ruleFunc = ruleFunc(ruleInfo[1]);
                }

                if (Array.isArray(formRule[input.name])) {
                    formRule[input.name].push(ruleFunc);
                } else {
                    formRule[input.name] = [ruleFunc];
                }
            }

            /* Listen event to validate */
            input.onblur = handleValidate;

            input.oninput = handleClearError;
        }
        function handleValidate(event) {
            const valid = formRule[event.target.name];
            let errorMessage;

            for (const item of valid) {
                errorMessage = item(event.target.value);
                if (errorMessage) break;
            }
            if (errorMessage) {
                const formGroup = getParent(event.target, '.form-group');

                if (formGroup) {
                    formGroup.classList.add('invalid');
                    const formMessage =
                        formGroup.querySelector('.form-message');

                    if (formMessage) {
                        formMessage.innerText = errorMessage;
                    }
                }
            }

            return !errorMessage;
        }

        function handleClearError(event) {
            const formGroup = getParent(event.target, '.form-group');

            if (formGroup.classList.contains('invalid')) {
                formGroup.classList.remove('invalid');
                const formMessage = formGroup.querySelector('.form-message');

                if (formMessage) {
                    formMessage.innerText = '';
                }
            }
        }
    }

    formElement.onsubmit = function (e) {
        e.preventDefault();

        const inputs = formElement.querySelectorAll('[name][rules]');
        let isValid = true;

        for (const input of inputs) {
            if (!handleValidate({ target: input })) {
                isValid = false;
            }
        }

        if (isValid) {
            if (typeof _this.onSubmit === 'function') {
                const enableInputs = formElement.querySelectorAll(
                    '[name]:not([disable])'
                );

                const formValues = Array.from(enableInputs).reduce(function (
                    values,
                    input
                ) {
                    switch (input.type) {
                        case 'radio':
                            values[input.name] = formElement.querySelector(
                                'input[name="' + input.name + '"]:checked'
                            ).value;

                            break;
                        case 'checkbox':
                            if (!input.matches(':checked')) {
                                values[input.name] = [];
                                return values;
                            }

                            if (!Array.isArray(values[input.name])) {
                                values[input.name] = [];
                            }

                            values[input.name].push(input.value);
                            break;
                        case 'file':
                            values[input.name] = input.files;

                            break;

                        default:
                            values[input.name] = input.value;

                            break;
                    }
                    return values;
                },
                {});
                _this.onSubmit(formValues);
            } else {
                formElement.submit();
            }
        }
    };
}
