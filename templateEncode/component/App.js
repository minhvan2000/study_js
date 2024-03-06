import html from '../core.js';
import { connect } from '../store.js';
import EncodeForm from './EncodeForm.js';

function App({ encode }) {
    return html`<section class="main">
        ${encode.length > 0 && EncodeForm()}
    </section>`;
}

export default connect()(App);
