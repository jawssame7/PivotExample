/**
 * Controls the configurator example.
 */
Ext.define('PivotExample.view.main.pivot.ConfiguratorController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.pivotconfig',

    changeDock: function(button, checked){
        if(checked) {
            this.getView().getPlugin('configurator').setDock(button.text.toLowerCase());
        }
    }

});