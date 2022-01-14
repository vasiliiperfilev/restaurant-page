function createMenuItems(){
    const items = {
        "Cheese pie": {"price": "$20", "imgLink": require("../images/menu/cheesePie.jpg")},
        "Khachapuri": {"price": "$20", "imgLink": require("../images/menu/khachapuri.jpg")},
        "Khinkali": {"price": "$3", "imgLink": require("../images/menu/khinkali.jpg")},
        "Nut salad": {"price": "$10", "imgLink": require("../images/menu/nutSalad.jpg")},
        "Shashlyk": {"price": "$20", "imgLink": require("../images/menu/shashlyk.jpg")},
        "Traditional soup": {"price": "$10", "imgLink": require("../images/menu/traditionalSoup.jpg")}
    }

    return items
}

export { createMenuItems }