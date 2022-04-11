import { request } from "./request"

export function getDetailGoods(iid) {
    return request({
        url: "/detail",
        params: {
            iid
        }
    })
}
//发送推荐信息请求
export function getCommend() {
    return request({
        url: "/recommend"
    })
}

//数据整合
export class Goods {
    constructor(itemInfo, columns, services) {
        this.title = itemInfo.title
        this.desc = itemInfo.desc
        this.newPrice = itemInfo.price
        this.oldPrice = itemInfo.oldPrice
        this.discount = itemInfo.discountDesc
        this.columns = columns
        this.services = services
        this.realPrice = itemInfo.lowNowPrice
    }
}

export class Shop {
    constructor(shopInfo) {
        this.logo = shopInfo.shopLogo
        this.name = shopInfo.name
        this.fans = shopInfo.cFans
        this.sells = shopInfo.cSells
        this.score = shopInfo.score
        this.goodsCount = shopInfo.cGoods
    }
}
export class Params {
    constructor(info, rule) {
        //对image是否有值做出判断
        this.image = info.image ? info.image[0] : ""
        this.infos = info.set;
        this.sizes = rule.tables;
    }
}