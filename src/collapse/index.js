Component({
    externalClasses: ['i-class'],

    options: {
        multipleSlots: true,
        addGlobalClass: true
    },

    relations: {
        '../collapse-item/index': {
            type: 'child'
        }
    },
    properties: {
        name: String,
        accordion: Boolean
    },
    methods: {
        clickfn(e) {
            const params = e.detail;
            const allList = this.getRelationNodes('../collapse-item/index');
            allList.forEach((item) => {
                if (params.name === item.data.name) {
                    item.setData({
                        showContent: 'i-collapse-item-show-content'
                    });
                } else {
                    item.setData({
                        showContent: ''
                    });
                }
            });
        },
    }
});

