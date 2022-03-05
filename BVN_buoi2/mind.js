import { InputAPI } from "./component/input.js";

let id = document.getElementById('id');
let input = new InputAPI();
id.appendChild(input.render());

// http://csgobackpack.net/api/GetItemsList/v2/

let data = [
    {
        "AWP | Exoskeleton (Well-Worn)":{
            "name":"AWP | Exoskeleton (Well-Worn)",
            "marketable":1,
            "tradable":1,
            "classid":"4117071920",
            "icon_url":"-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FABz7PLfYQJH9NOln4WHkuP7PYTck29Y_cg_3e-TrYqj2QHn_0JpMDincIGccVc4NAyF-wO_xOnv0MO16c_PmCRm6D5iuyiCZzi-fQ",
            "icon_url_large":"-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FABz7PLfYQJH9NOln4WHkuP7PYTck29Y_chOhujT8om731Lm8xVqYmzwIIeQIVdqNV_Z-QC4lLq6hMS9uZrJnCdq73IktCnYzQv33095eQVvhg",
            "type":"Weapon",
            "weapon_type":"Sniper Rifle",
            "gun_type":"AWP",
            "exterior":"Well-Worn",
            "rarity":"Restricted",
            "rarity_color":"8847ff",
            "price":{
                "7_days":{
                    "average":0.98,
                    "median":0.98,
                    "sold":"1117",
                    "standard_deviation":"2.3",
                    "lowest_price":0.91,
                    "highest_price":1.02
                },
                "30_days":{
                    "average":0.9,
                    "median":0.91,
                    "sold":"17208",
                    "standard_deviation":"8.75",
                    "lowest_price":0.71,
                    "highest_price":1.04
                },
                "all_time":{
                    "average":1.45,
                    "median":0.9,
                    "sold":"343582",
                    "standard_deviation":"42.64",
                    "lowest_price":0.53,
                    "highest_price":4.52
                }
            },
            "first_sale_date":"1607036400"
        },
    },
];


for(const id1 in data[0]){
    console.log(id1);
    for(const list in data[0][id1]){
        console.log(list)
    }
}


