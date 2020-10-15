Component({
    externalClasses: ['i-class'],

    options: {
        multipleSlots: true,
        addGlobalClass: true
    },

    relations: {
        '../row/index': {
            type: 'parent'
        }
    },

    properties: {
        span: {
            value: 0,
            type: Number
        },
        offset: {
            value: 0,
            type: Number
        }
    }
});
