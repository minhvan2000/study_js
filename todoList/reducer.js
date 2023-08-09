import storage from './util/storage.js';

const init = {
    todos: storage.get(),
    filter: 'all',
    filters: {
        all: () => true,
        active: (todo) => !todo.completed,
        completed: (todo) => todo.completed,
    },
    editIndex: null,
};

const actions = {
    add({ todos }, title) {
        if (title[0]) {
            todos.push({ title, completed: false });
            storage.set(todos);
        }
    },
    toggle({ todos }, index) {
        const todo = todos[index];
        todo.completed = !todo.completed;
        storage.set(todos);
    },
    toggleAll({ todos }, completed) {
        todos.forEach((todo) => (todo.completed = completed[0]));
        storage.set(todos);
    },
    destroy({ todos }, index) {
        todos.splice(index, 1);
        storage.set(todos);
    },
    switchFilter(state, filter) {
        state.filter = filter[0];
    },
    clearCompleted(state) {
        state.todos = state.todos.filter(state.filters.active);
        storage.set(state.todos);
    },
    startEdit(state, index) {
        state.editIndex = index;
        setTimeout(() => {
            const input = document.getElementsByClassName('edit')[index];
            const end = input.value.length;
            input.setSelectionRange(end, end);
            input.focus();
        }, 0);
    },
    endEdit(state, title) {
        const input = document.getElementsByClassName('edit')[state.editIndex];

        if (state.editIndex !== null && input) {
            if (title[0]) {
                state.todos[state.editIndex].title = title[0];
                storage.set(state.todos);
            } else {
                this.destroy(state, state.editIndex);
            }
            state.editIndex = null;
        }
    },
    cancelEdit(state) {
        state.editIndex = null;
    },
};

export default function reducer(state = init, action, args) {
    actions[action] && actions[action](state, args);
    return state;
}
