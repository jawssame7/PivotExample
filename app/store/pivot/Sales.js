Ext.define('PivotExample.store.pivot.Sales', {
    extend: 'Ext.data.Store',
    alias: 'store.sales',

    model: 'PivotExample.model.pivot.Sale',

    proxy: {
        // load using HTTP
        type: 'ajax',
        limitParam: null,
        url: '/data/SalesData.json',
        // the return will be JSON, so lets set up a reader
        reader: {
            type: 'json'
        }
    },
    autoLoad: false
});
