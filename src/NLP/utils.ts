import { Derivative } from "./Dictionary/data";

export function typeToArabic(type:Derivative['type']){
    switch (type){
        case 'verb': return 'فعل'
        case 'noun': return 'اسم فاعل'
        case 'place': return 'اسم مكان'
    }
}


export function tenseToArabic(tense:string){
    switch (tense){
        case 'past': return 'ماضي'
        case 'present': return "مضارع"
        case 'order': return 'أمر'
    }
}