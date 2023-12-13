var Map = require('Map');
cc.Class({
    extends: cc.Component,

    properties: {
        dice: cc.Node,
        map:cc.Node
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
    },

    start() {
        this.log()
    },
    log() {
        let newMap=new Map(6,8);
        newMap.setWall([[2,1],[1,1]],'bottom');
        
        cc.log(newMap);
        this.map.getComponent('MapController').renderMap(newMap)
        
    }

    // update (dt) {},
});
