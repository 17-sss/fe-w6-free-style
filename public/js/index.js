import _ from './util.js';
import TodoPostView from './todo/TodoPostView.js';
import TodoWriteView from './todo/TodoWriteView.js';

const REFERENCE = {
    todoPost: {
        postingWrapper: _.$('#todo-posting'),
        postlistWrapper: _.$('#todo-postList'),
    },
    todoWrite: {
        editorWrapper: _.$('#toast-editor'), 
        editorOptions: {
            height: '600px',
            initialEditType: 'markdown',
            previewStyle: 'vertical',
        },
        editorBtnsWrapper: _.$('#todo-editorBtns')
    },
};

switch (location.pathname) {
    case '/todo':
        new TodoPostView(REFERENCE.todoPost).init();
        break;
    case '/todo/write':
        new TodoWriteView(REFERENCE.todoWrite).init();        
        break;
    default:    break;
};