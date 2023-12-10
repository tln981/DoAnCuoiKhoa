class Map{
    constructor(quantityAsset=0,sizeX=5,sizeY=5){
        this.quantityAsset=quantityAsset;
        this.sizeX=sizeX;
        this.sizeY=sizeY;
        this.value=[[]];
    }
    setMap(value=[[]]){
        for(let row=0;row<value.length;row++){
            for(let col=0;col<value[row].length;col++){
                if(value[row][col]>=this.quantityAsset){
                    return false;
                }
            }
        }
        this.value=value;
        cc.log(this.value)
    }

}

module.exports=Map;