import html from '../core.js';
import { connect } from '../store.js';

function setInputFilter(parameter, index, i, type, inputFilter, errMsg) {
    setTimeout(() => {
        [
            'input',
            'keydown',
            'keyup',
            'mousedown',
            'mouseup',
            'select',
            'contextmenu',
            'drop',
            'focusout',
        ].forEach(function (event) {
            const textBox = document.getElementById(
                parameter + '_' + index + '-' + i
            );

            textBox.addEventListener(event, function (e) {
                if (type === 'integer') {
                    this.value = parseInt(this.value);
                }
                if (inputFilter(this.value)) {
                    // Accepted value
                    if (
                        ['keydown', 'mousedown', 'focusout'].indexOf(e.type) >=
                        0
                    ) {
                        this.classList.remove('input-error');
                        this.setCustomValidity('');
                    }
                    this.oldValue = this.value;
                    this.oldSelectionStart = this.selectionStart;
                    this.oldSelectionEnd = this.selectionEnd;
                } else if (this.hasOwnProperty('oldValue')) {
                    // Rejected value - restore the previous one
                    this.classList.add('input-error');
                    this.setCustomValidity(errMsg);
                    this.reportValidity();
                    this.value = this.oldValue;
                    this.setSelectionRange(
                        this.oldSelectionStart,
                        this.oldSelectionEnd
                    );
                } else {
                    // Rejected value - nothing to restore
                    this.value = '';
                }
            });
        });
    }, 1000);
}

function EncodeItemInput({ item, index, indexChild, indexKid }) {
    if (['b', 'U'].includes(item.type)) {
        const dataRange = item.range
            ? item.range
            : [0, Math.pow(2, item.power) - 1];

        setInputFilter(
            item.label,
            indexChild - 3,
            indexKid,
            'integer',
            function (data) {
                return (
                    /^\d*$/.test(data) &&
                    (data === '' ||
                        (dataRange[0] <= parseInt(data) &&
                            parseInt(data) <= dataRange[1]))
                );
            },
            `Must be between 0 and ${dataRange[1]}`
        );
    } else if (item.type == 'H') {
        setInputFilter(
            item.label,
            indexChild - 3,
            indexKid,
            function (data) {
                return /^[0-9a-f]*$/i.test(data) && data.length <= item.size;
            },
            `Must use hexadecimal characters and have a maximum length of ${item.size} characters.`
        );
    } else if (item.type == 'S') {
        const dataRange = item.range
            ? item.range
            : [-Math.pow(2, item.power) / 2, Math.pow(2, item.power) / 2 - 1];
        setInputFilter(
            item.label,
            indexChild - 3,
            indexKid,
            'integer',
            function (data) {
                return (
                    /^-?\d*$/.test(data) &&
                    dataRange[0] <= parseInt(data) &&
                    parseInt(data) <= dataRange[1]
                );
            },
            `Must be between ${dataRange[0]} and ${dataRange[1]}`
        );
    }
    return html`<div class="form-group">
        <label for="email" class="form-label">${item.label}</label>
        <input
            id="${item.label}_${(
                indexChild - 3
            ).toString()}-${indexKid.toString()}"
            name="${item.label}"
            type="text"
            value="${item.value}"
            onchange="dispatch('togglePayload', this.value.toString(), ${index.toString()}, ${indexChild.toString()}, ${indexKid.toString()})"
            placeholder="Input ${item.label}"
            class="form-control"
        />
        <span class="form-message"></span>
    </div> `;
    // <div class="form-group">
    //     <label for="" class="form-label">${item.label}</label>
    //     <select
    //         class="form-control"
    //         onchange="dispatch('toggle', this.value.toString(), ${index.toString()}, ${indexChild.toString()}, ${indexKid.toString()})"
    //     >
    //         <option value="">--- Choose ${item.label} More ---</option>
    //         ${item.data.map((elm) => {
    //             if (item?.value === elm.name) {
    //                 return `<option value="${elm.name || elm}" selected>${
    //                     elm.name || elm
    //                 }</option>`;
    //             } else {
    //                 return `<option value="${elm.name || elm}">${
    //                     elm.name || elm
    //                 }</option>`;
    //             }
    //         })}
    //     </select>
    //     <span class="form-message"></span>
    // </div>
}

export default connect()(EncodeItemInput);
