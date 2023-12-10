class Map{
    constructor(x=0,y=0,quantityAsset=0,sizeX=5,sizeY=5){
        this.x=x;
        this.y=y;
        this.quantityAsset=quantityAsset;
        this.sizeX=sizeX;
        this.sizeY=sizeY;
        this.value=[[]];
    }
    setMap(value=[[]]){
        for(let row=0;row<value.length;row++){
            for(let col=0;col<value[row].length;col++){
                cc.log(value[row][col]+'-------------'+this.quantityAsset)
                if(value[row][col]>=this.quantityAsset){
                    return false;
                }
            }
        }
        this.value=value;
    }

}

module.exports=Map;