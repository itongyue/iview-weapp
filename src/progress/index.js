Component({
    externalClasses: ['i-class'],

    options: {
        multipleSlots: true,
        addGlobalClass: true
    },

    properties: {
        percent: {
            type: Number,
            value: 0
        },
        // normal || active || wrong || success
        status: {
            type: String,
            value: 'normal'
        },
        strokeWidth: {
            type: Number,
            value: 10
        },
        hideInfo: {
            type: Boolean,
            value: false
        }
    }
});
