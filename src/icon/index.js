Component({
    externalClasses: ['i-class'],

    options: {
        multipleSlots: true,
        addGlobalClass: true
    },

    properties: {
        type: {
            type: String,
            value: ''
        },
        custom: {
            type: String,
            value: ''
        },
        size: {
            type: Number,
            value: 14
        },
        color: {
            type: String,
            value: ''
        }
    }
});
