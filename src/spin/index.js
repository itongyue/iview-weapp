Component({
    externalClasses: ['i-class'],

    options: {
        multipleSlots: true,
        addGlobalClass: true
    },

    properties: {
        // small || default || large
        size: {
            type: String,
            value: 'default'
        },
        fix: {
            type: Boolean,
            value: false
        },
        fullscreen: {
            type: Boolean,
            value: false
        },
        custom: {
            type: Boolean,
            value: false
        }
    }
});
