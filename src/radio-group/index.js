Component({
    externalClasses: ['i-class'],

    options: {
        multipleSlots: true,
        addGlobalClass: true
    },

    relations: {
        '../radio/index': {
            type: 'child',
            linked() {
                this.changeCurrent();
            },
            linkChanged() {
                this.changeCurrent();
            },
            unlinked() {
                this.changeCurrent();
            }
        }
    },
    properties: {
        current: {
            type: String,
            value: '',
            observer: 'changeCurrent'
        },
        title: {
            type: String
        },
        required: {
            type: Boolean,
            value: false
        },
        // required 显示方式
        right: {
            type: Boolean,
            value: false
        }
    },
    methods: {
        changeCurrent(val = this.data.current) {
            let items = this.getRelationNodes('../radio/index');
            const len = items.length;
            if (len > 0) {
                items.forEach(item => {
                    item.changeCurrent(val === item.data.value);
                });
            }
        },
        emitEvent(current) {
            this.triggerEvent('change', current);
        }
    }
});
