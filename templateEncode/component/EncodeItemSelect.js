import html from '../core.js';
import { connect } from '../store.js';
import EncodeItemInput from './EncodeItemInput.js';

function EncodeItemSelect({ item, index, indexChild, indexKid }) {
    if (Array.isArray(item)) {
        const arrKid = item.map((val, indexKid) => {
            if (val.data?.length) {
                return EncodeItemSelect({
                    item: val,
                    index,
                    indexChild,
                    indexKid,
                });
            } else {
                return EncodeItemInput({
                    item: val,
                    index,
                    indexChild,
                    indexKid,
                });
            }
        });
        return arrKid.join('');
    } else {
        return html`<div class="form-group">
            <label for="" class="form-label">${item.label}</label>
            <select
                class="form-control"
                onchange="dispatch('toggle', this.value.toString(), ${index.toString()}, ${indexChild.toString()}, ${indexKid.toString()})"
            >
                <option value="">--- Choose ${item.label} More ---</option>
                ${item.data?.map((elm) => {
                    console.log(elm);
                    console.log(item?.value);
                    if (
                        item?.value === elm.name ||
                        item?.value.split(',')[0] === elm.name
                    ) {
                        return `<option value="${
                            (elm.value && elm.name + ',' + elm.value) ||
                            elm.name
                        }" selected>${elm.name || elm}</option>`;
                    } else {
                        return `<option value="${
                            (elm.value && elm.name + ',' + elm.value) ||
                            elm.name
                        }">${elm.name || elm}</option>`;
                    }
                })}
            </select>
            <span class="form-message"></span>
        </div>`;
    }
}

export default connect()(EncodeItemSelect);
