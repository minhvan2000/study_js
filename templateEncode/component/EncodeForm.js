import html from '../core.js';
import { connect } from '../store.js';

import EncodeItemSelect from './EncodeItemSelect.js';

function EncodeForm({ encode, packageJSON }) {
    return html` <div class="form" id="form-1">
        <h3 class="heading">JSON Frame</h3>
        <p class="desc">Let's Create A Frame ❤️</p>

        <div class="spacer"></div>

        ${encode.map((val, index) => {
            if (Array.isArray(val)) {
                const arrChild = val.map((elm, indexChild) => {
                    return EncodeItemSelect({
                        item: elm,
                        index,
                        indexChild,
                        indexKid: 0,
                    });
                });

                if (
                    packageJSON?.format?.option &&
                    packageJSON.format.option[0] == 'array'
                ) {
                    arrChild.splice(
                        3,
                        0,
                        `<div class="btn-element">
                            <button class="btn-element__add" onclick="dispatch('addDescription', ${index.toString()})">
                                Add
                            </button>

                            <button class="btn-element__delete" onclick="dispatch('deleteDescription', ${index.toString()})">
                                Delete
                            </button>
                        </div>`
                    );
                }

                return arrChild.join('');
            } else {
                return EncodeItemSelect({
                    item: val,
                    index,
                    indexChild: 0,
                    indexKid: 0,
                });
            }
        })}
        <button class="form-submit" onclick="dispatch('createFrame')">
            Create Frame
        </button>

        <p>${0}</p>
    </div>`;
}

export default connect()(EncodeForm);
