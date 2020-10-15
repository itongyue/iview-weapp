Component({
    externalClasses: ['i-class'],

    options: {
        multipleSlots: true,
        addGlobalClass: true
    },

    relations: {
        '../grid/index': {
            type: 'parent'
        },
        '../grid-icon/index': {
            type: 'child'
        }
    },

    data: {
        width: '33.33%'
    }
});
