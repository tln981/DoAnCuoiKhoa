
cc.Class({
    extends: cc.Component,

    properties: {
       atlas:cc.SpriteAtlas,
       prefabs:[cc.Prefab]
    },

    // onLoad () {},

    start () {

    },
    renderMap(dataMap,posX=0,posY=0){
       //cc.log(dataMap)
        for(let row=0;row<dataMap.value.length;row++){
            for(let col=0;col<dataMap.value[row].length;col++){

                //cc.log(dataMap.value[row][col])
                //cc.log(row+'----------'+col)
                //xử lý thêm node
                // cc.log(dataMap.value[col,row])
                // cc.log(this.atlas.getSpriteFrames()[dataMap.value[col,row]])
                let newBlock=cc.instantiate(this.prefabs[0]);
                newBlock.parent=this.node;
                newBlock.getComponent(cc.Sprite).spriteFrame=this.atlas.getSpriteFrames()[dataMap.value[row][col]];
                newBlock.width=dataMap.sizeX;
                newBlock.height=dataMap.sizeY;
                newBlock.x=dataMap.sizeX*col;
                newBlock.y=dataMap.sizeY*(dataMap.value[row].length-row);
                //cc.log(newBlock.x+'----'+newBlock.y)
            }
        }
    }
   
});
