import _ from './util.js';

import AuthController from './auth/AuthController.js';
import TodoPostController from './todo/TodoPostController.js';
import TodoWriteController from './todo/TodoWriteController.js';

const PATHNAME = location.pathname;

const REFERENCE = {
    // path: /auth/login & /auth/register    
    auth: {        
        formWrapper: 'form.auth__content__form',
        formItems: {            
            userid: 'input#userid',
            userpwd: 'input#userpwd',
            userpwdChk: 'input#userpwd_chk',
        },
        errSection: 'p.auth--error',
    },
    // path: /todo
    todoPost: {
        postingWrapper: '#todo-posting',
        postingItems: {
            subject: 'input#subject',
            addBtn: 'button#add',
        },
        postlistWrapper: '#todo-postlist',
    },
    // path: /todo/write
    todoWrite: {
        formWrapper: 'form#todo-writeForm',
        formItems: {            
            subject: 'input#subject',
            content: 'input#content',
            cancelBtn: 'button#cancel',            
        },
        editorWrapper: 'div#toast-editor',
        editorOptions: {
            height: '600px',
            initialEditType: 'markdown',
            previewStyle: 'vertical',
        },        
    },
};

// ------------

const { auth, todoPost, todoWrite } = REFERENCE;
switch (PATHNAME) {
    case '/auth/login':
    case '/auth/register':
        new AuthController(auth, PATHNAME).init();
        break;
    case '/todo':
        new TodoPostController(todoPost).init();
        break;
    case '/todo/write':
        new TodoWriteController(todoWrite).init();
        break;
    default:
        break;
}
