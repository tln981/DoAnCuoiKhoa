var Map = require('Map');
cc.Class({
    extends: cc.Component,

    properties: {
        dice: cc.Node,
        map:cc.Node
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        
        this.node.on("mousedown", this.log, this)
    },

    start() {
    },
    log() {
        let newMap=new Map(9,50,50);
        const flag=newMap.setMap([
            [0,1,1,2],
            [3,4,4,5],
            [6,7,7,8]
        ]);
        //cc.log(newMap.value[0].length)
        if(flag!=false){
            this.map.getComponent('MapController').renderMap(newMap);
        }else{
            cc.log('lỗi set map')
        }
    }

    // update (dt) {},
});
