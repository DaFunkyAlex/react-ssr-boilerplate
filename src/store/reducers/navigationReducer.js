const initialState = {};

export const navigationReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'GET_NAVIGATION':
            return {
                ...state,
                items: [
                    {
                        label: 'Dashboard',
                        icon: 'home',
                        link: '/'
                    },
                    {
                        label: 'Blog',
                        icon: 'comment-dots',
                        link: '/article'
                    },
                    {
                        label: 'Members',
                        icon: 'users',
                        submenu: [
                            {
                                label: 'List',
                                link: '/members/list',
                            },
                            {
                                label: 'Status',
                                link: '/members/status'
                            },
                            {
                                label: 'Departments',
                                link: '/members/departments'
                            },
                            {
                                label: 'Attributes',
                                link: '/members/attributes'
                            },
                        ],
                        submenuOpened: false,
                    }
                ]
            };
        default:
            return state;

    }
};

