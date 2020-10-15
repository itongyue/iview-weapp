Component({
    externalClasses: ['i-class'],

    options: {
        multipleSlots: true,
        addGlobalClass: true
    },

    properties: {
        visible: {
            type: Boolean,
            value: false
        },

        mask: {
            type: Boolean,
            value: true
        },

        maskClosable: {
            type: Boolean,
            value: true
        },

        mode: {
            type: String,
            value: 'left' // left right
        }
    },
    data: {},
    methods: {
        handleMaskClick() {
            if (!this.data.maskClosable) {
                return;
            }
            this.triggerEvent('close', {});
        }
    }
});
