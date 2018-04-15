const Mock = require('mockjs')

Mock.mock('/tm/data', (req, res) => {
    return {
        status: 200,
        success: {
            goodslist: [
                {
                    id: 101,
                    save: "9.9折",
                    oldPrice: "199",
                    nowPrice: "99",
                    home: "美国",
                    title: "美国•【诠释唇色】魅可口红",
                    longTitle: "稚优泉口红正品持久保湿不易脱色防水南瓜脏橘色姨妈豆沙色学生款",
                    img:"/static/img/1341680_1000_1000.jpg",
                    repoNum: 9999,
                    banner:[
                        "/static/img/goods/101/1.webp",
                        "/static/img/goods/101/2.webp",
                        "/static/img/goods/101/3.webp",
                        "/static/img/goods/101/4.webp",
                        "/static/img/goods/101/5.webp"
                    ]
                },
                {
                    id: 102,
                    save: "8折",
                    oldPrice: "888",
                    nowPrice: "808",
                    home: "韩国",
                    title: "NH韩国口红",
                    longTitle: "Dior/迪奥全新烈艳蓝金唇膏3.5g口红520/999/080哑光 新年礼物",
                    img:"/static/img/1388308_1000_1000.jpg",
                    repoNum: 99,
                    banner:[
                        "/static/img/goods/102/1.webp",
                        "/static/img/goods/102/2.webp",
                        "/static/img/goods/102/3.webp",
                        "/static/img/goods/102/4.webp",
                        "/static/img/goods/102/5.webp"
                    ]
                },
                {
                    id: 103,
                    save: "6.9折",
                    oldPrice: "1288",
                    nowPrice: "1099",
                    home: "日本",
                    title: "日本欧丽炫彩口红",
                    longTitle: "香港专柜 YSL圣罗兰圆管口红千颂伊色斩男色唇膏12/46/14 送礼盒",
                    img:"/static/img/2678723_1000_1000.jpg",
                    repoNum: 889,
                    banner:[
                        "/static/img/goods/103/1.webp",
                        "/static/img/goods/103/2.webp",
                        "/static/img/goods/103/3.webp",
                        "/static/img/goods/103/4.webp"
                    ]
                },
                {
                    id: 104,
                    save: "8折",
                    oldPrice: "399",
                    nowPrice: "299",
                    home: "越南",
                    title: "越南进口水果 超值低价",
                    longTitle: "现货 Givenchy/纪梵希新春限量小羊皮口红高级定制唇膏305 红色管",
                    img:"/static/img/3613386_1_1000_1000.jpg",
                    repoNum: 3,
                    banner:[
                        "/static/img/goods/104/1.webp",
                        "/static/img/goods/104/2.webp",
                        "/static/img/goods/104/3.webp"
                    ]
                }
            ]
        }
    }
})

Mock.mock('/ms/data', (req, res) => {
    return {
        status: 200,
        success: {
           msShop: [
               "/static/ms/free1.jpg",
               "/static/ms/free2.jpg",
               "/static/ms/free3.jpg",
               "/static/ms/free4.jpg"
           ],
           brandImg: [
               "http://p0.jmstatic.com/pop_store/000/003/3247_std/57b557db8214b_320_320.jpg?1474536101",
               "http://p0.jmstatic.com/pop_store/000/002/2892_std/57fb2e1891a0f_320_320.jpg?1482919085",
               "http://p0.jmstatic.com/pop_store/000/003/3147_std/57a013e9a2685_320_320.jpg?1490690189",
               "http://p0.jmstatic.com/pop_store/000/003/3315_std/57ad73dc82817_320_320.jpg?1474534192",
               "http://p0.jmstatic.com/pop_store/000/005/5445_std/597ad5c4d9642_320_320.jpg?1501223372",
               "http://p0.jmstatic.com/pop_store/000/002/2340_std/59507d9268dbd_320_320.jpg?1498447350",
               "http://p0.jmstatic.com/pop_store/000/002/2762_std/597847b5b7d01_320_320.jpg?1501148809",
               "http://p0.jmstatic.com/pop_store/000/002/2762_std/5773387eade00_320_320.jpg?1474534895"
           ],
           adImg: [
            "http://mp5.jmstatic.com//jmstore/image/000/003/3266_std/59c485f7f3728_2048_1024.jpg?1506079705&imageView2/2/w/640/q/90",
            "http://mp6.jmstatic.com//jmstore/image/000/006/6282_std/59ba1677abc0e_2048_1024.jpg?1506061433&imageView2/2/w/640/q/90",
            "http://mp5.jmstatic.com//jmstore/image/000/006/6377_std/59c4b5d0b637c_2048_1024.jpg?1506070511&imageView2/2/w/640/q/90",
            "http://mp6.jmstatic.com//jmstore/image/000/004/4369_std/59bb4077b6b7a_2048_1024.jpg?1506065073&imageView2/2/w/640/q/90",
            "http://mp6.jmstatic.com//jmstore/image/000/005/5151_std/59c0fc0d1c986_2048_1024.jpg?1505962440&imageView2/2/w/640/q/90"
           ],
           muyin: [
               "http://mp5.jmstatic.com/mobile/card_material/item_5518_1024_512-ipad2048_1503468995.jpeg?imageView2/2/w/320/q/90",
               "http://mp7.jmstatic.com/mobile/card_material/item_5518_1024_512-ipad2048_1503469024.jpeg@base@tag=imgScale&w=320&q=90"
           ],
           muyinBrand: [
                "http://mp5.jmstatic.com/mobile/card_material/item_2386_512_512-ipad2048_1502086238.jpeg?imageView2/2/w/160/q/90",
                "http://mp5.jmstatic.com/mobile/card_material/item_2386_512_512-ipad2048_1498543173.jpeg?imageView2/2/w/160/q/90",
                "http://mp5.jmstatic.com/mobile/card_material/item_2386_512_512-ipad2048_1498559288.jpeg?imageView2/2/w/160/q/90",
                "http://mp5.jmstatic.com/mobile/card_material/item_2386_512_512-ipad2048_1498543472.jpeg?imageView2/2/w/160/q/90",
                "http://mp6.jmstatic.com/mobile/card_material/item_2386_512_512-ipad2048_1498543621.jpeg?imageView2/2/w/160/q/90",
                "http://mp5.jmstatic.com/mobile/card_material/item_2386_512_512-ipad2048_1498543566.jpeg?imageView2/2/w/160/q/90",
                "http://mp5.jmstatic.com/mobile/card_material/item_2386_512_512-ipad2048_1498543264.jpeg?imageView2/2/w/160/q/90",
                "http://mp6.jmstatic.com/mobile/card_material/item_2386_512_512-ipad2048_1498543700.jpeg?imageView2/2/w/160/q/90"
           ],
           qsSwiper: [
               "http://mp6.jmstatic.com/mobile/card_material/item_562_2048_838-ipad2048_1506073378.jpeg?imageView2/2/w/640/q/90",
               "http://mp6.jmstatic.com/mobile/card_material/item_562_2048_838-ipad2048_1506073479.jpeg?imageView2/2/w/640/q/90",
               "http://mp5.jmstatic.com//jmstore/image/000/006/6355_std/59bf47d8dbf8c_1024_512.jpg?1505716382&imageView2/2/w/640/q/90",
               "http://mp6.jmstatic.com//jmstore/image/000/001/1109_std/59bf370a47485_2048_1024.jpg?1505808765&imageView2/2/w/640/q/90"
           ],
           qsItem: [
               "http://mp5.jmstatic.com/mobile/card_material/item_44819_512_512-ipad2048_1459308366.jpg?t=1459308366&imageView2/2/w/160/q/90",
               "http://mp5.jmstatic.com/mobile/card_material/item_44820_512_512-ipad2048_1459308381.jpg?t=1459308382&imageView2/2/w/160/q/90",
               "http://mp5.jmstatic.com/mobile/card_material/item_44822_512_512-ipad2048_1458815156.jpg?t=1458815156&imageView2/2/w/160/q/90",
               "http://mp5.jmstatic.com/mobile/card_material/item_44824_512_512-ipad2048_1458815202.jpg?t=1458815202&imageView2/2/w/160/q/90"
           ],
           xbItem: [
               "http://mp6.jmstatic.com//jmstore/image/000/005/5554_std/59c2368bd7988_2048_1024.jpg?1505902980&imageView2/2/w/640/q/90",
               "http://mp6.jmstatic.com//jmstore/image/000/001/1109_std/59bf370a47485_2048_1024.jpg?1505808765&imageView2/2/w/640/q/90",
               "http://mp6.jmstatic.com//jmstore/image/000/000/870_std/59c4b3d2547dc_2048_1024.jpg?1506072541&imageView2/2/w/640/q/90",
               "http://mp5.jmstatic.com//jmstore/image/000/005/5739_std/59c36786ba594_2048_1024.jpg?1505982682&imageView2/2/w/640/q/90",
               "http://mp5.jmstatic.com//jmstore/image/000/001/1172_std/59c4ad5a3c3c5_2048_1024.jpg?1506073577&imageView2/2/w/640/q/90"
           ]
        }
    }
})

Mock.mock('/account', (req, res) => {
    return {
        status: 200,
        success: {
            data: {
                userName: "Peter.Pan",
                tabInfo: "我是一只小小鸟，啦啦啦!",
                phoneNum: "15711111111"
            }
        }
    }
})