Component({
    externalClasses: ['i-class'],

    options: {
        multipleSlots: true,
        addGlobalClass: true
    },

    relations: {
        '../grid-item/index': {
            type: 'parent'
        }
    },

});
