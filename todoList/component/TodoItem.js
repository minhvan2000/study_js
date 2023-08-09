import html from '../core.js';
import { connect } from '../store.js';

function TodoItem({ todo, index, editIndex }) {
    return html`<li
        class="${todo.completed && 'completed'} 
        ${editIndex == index.toString() && 'editing'}"
    >
        <div class="view">
            <input
                class="toggle"
                type="checkbox"
                ${todo.completed && 'checked'}
                onchange="dispatch('toggle', ${index.toString()})"
            />
            <label ondblclick="dispatch('startEdit',${index.toString()})"
                >${todo.title}</label
            >
            <button
                class="destroy"
                onclick="dispatch('destroy', ${index.toString()})"
            ></button>
        </div>
        <input
            class="edit"
            value="${todo.title}"
            onkeyup="event.keyCode === 13 && dispatch('endEdit', this.value.trim()) || event.keyCode === 27 && dispatch('cancelEdit')"
            onblur="!event.keyCode && dispatch('endEdit', this.value.trim())"
        />
    </li>`;
}

export default connect()(TodoItem);
