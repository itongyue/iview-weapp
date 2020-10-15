Component({
    externalClasses: ['i-class'],

    options: {
        multipleSlots: true,
        addGlobalClass: true
    },

    properties: {
        loading: {
            type: Boolean,
            value: true
        },
        tip: {
            type: String,
            value: ''
        }
    },
});
