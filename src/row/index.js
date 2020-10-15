Component({
    externalClasses: ['i-class'],

    options: {
        multipleSlots: true,
        addGlobalClass: true
    },

    relations: {
        '../col/index': {
            type: 'child'
        }
    }
});
