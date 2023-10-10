namespace images{

    /**
     * Returns an image from a string
     */
    //% blockId=getImageFromString
    //% block="get image from $asset_name"
    //% group="Assets from Strings"
    //% weight=1
    export function getImageFromString(asset_name: string): Image{
        return helpers._getFactoryInstance("image", asset_name)
    }

    /**
     * Returns a tile from a string
     */
    //% blockId=getTileFromString
    //% block="get tile from $asset_name"
    //% group="Assets from Strings"
    //% weight=1
    export function getTileFromString(asset_name: string): Image {
        return helpers._getFactoryInstance("tile", asset_name)
    }

    /**
     * Returns a tilemap from a string
     */
    //% blockId=getTilemapFromString
    //% block="get tilemap from $asset_name"
    //% group="Assets from Strings"
    //% weight=1
    export function getTilemapFromString(asset_name: string): tiles.TileMapData {
        return helpers._getFactoryInstance("tilemap", asset_name)
    }

    /**
     * Returns an animation from a string
     */
    //% blockId=getAnimationFromString
    //% block="get animation from $asset_name"
    //% group="Assets from Strings"
    //% weight=1
    export function getAnimationFromString(asset_name: string): Image[] {
        return helpers._getFactoryInstance("animation", asset_name)
    }

}