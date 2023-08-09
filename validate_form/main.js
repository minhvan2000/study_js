function Validator(option) {
    function getParents(element, selector) {
        while (element.parentElement) {
            if (element.parentElement.matches(selector)) {
                return element.parentElement;
            }

            element = element.parentElement;
        }
    }

    const selectRules = {};

    function validate(inputElement, rule) {
        const errorElement = getParents(
            inputElement,
            option.formGroupSelector
        ).querySelector(option.errorSelector);
        let errorMessage;

        /* Get rules of selectRules */
        const rules = selectRules[rule.selector];

        for (let i = 0; i < rules.length; i++) {
            switch (inputElement.type) {
                case 'radio':
                case 'checkbox':
                    errorMessage = rules[i](
                        formElement.querySelector(rule.selector + ':checked')
                    );
                    break;

                default:
                    errorMessage = rules[i](inputElement.value);
                    break;
            }
            if (errorMessage) break;
        }

        if (errorMessage) {
            errorElement.innerHTML = errorMessage;
            getParents(inputElement, option.formGroupSelector).classList.add(
                'invalid'
            );
        } else {
            errorElement.innerHTML = '';
            getParents(inputElement, option.formGroupSelector).classList.remove(
                'invalid'
            );
        }

        return !errorMessage;
    }

    const formElement = document.querySelector(option.form);

    /* Get element to validate */
    if (formElement) {
        formElement.onsubmit = function (e) {
            e.preventDefault();

            let isFormValid = true;

            /* Validate all rules when submit */
            option.rules.forEach(function (rule) {
                const inputElement = formElement.querySelector(rule.selector);
                const isValid = validate(inputElement, rule);
                if (!isValid) {
                    isFormValid = false;
                }
            });

            if (isFormValid) {
                /* Stage onSubmit exist*/
                if (typeof option.onSubmit === 'function') {
                    const enableInputs = formElement.querySelectorAll(
                        '[name]:not([disable])'
                    );

                    const formValues = Array.from(enableInputs).reduce(
                        function (values, input) {
                            switch (input.type) {
                                case 'radio':
                                    values[input.name] =
                                        formElement.querySelector(
                                            'input[name="' +
                                                input.name +
                                                '"]:checked'
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
                        {}
                    );

                    option.onSubmit(formValues);
                } else {
                    formElement.submit();
                }
            }
        };

        /* loop rules and handle even */
        option.rules.forEach((rule) => {
            /* Save rules for each input */
            if (Array.isArray(selectRules[rule.selector])) {
                selectRules[rule.selector].push(rule.test);
            } else {
                selectRules[rule.selector] = [rule.test];
            }

            const inputElements = formElement.querySelectorAll(rule.selector);

            Array.from(inputElements).forEach((inputElement) => {
                if (inputElement) {
                    /* Handling stage blur out input */
                    inputElement.onblur = function () {
                        validate(inputElement, rule);
                    };

                    /* Handling each user input */
                    inputElement.oninput = function () {
                        const errorElement = getParents(
                            inputElement,
                            option.formGroupSelector
                        ).querySelector(option.errorSelector);
                        errorElement.innerHTML = '';
                        getParents(
                            inputElement,
                            option.formGroupSelector
                        ).classList.remove('invalid');
                    };
                }
            });
        });
    }
}

Validator.isRequired = function (selector, message) {
    return {
        selector,
        test: function (value) {
            return value ? undefined : message || 'Vui lòng nhập trường này';
        },
    };
};

Validator.isEmail = function (selector, message) {
    return {
        selector,
        test: function (value) {
            const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value)
                ? undefined
                : message || 'Trường này phải là email';
        },
    };
};

Validator.minLength = function (selector, min, message) {
    return {
        selector,
        test: function (value) {
            return value.length >= min
                ? undefined
                : message || `Vui lòng nhập tối thiểu ${min}`;
        },
    };
};

Validator.isConfirmed = function (selector, getConfirmValue, message) {
    return {
        selector,
        test: function (value) {
            return value === getConfirmValue()
                ? undefined
                : message || `Giá trị nhập vào không chính xác`;
        },
    };
};
