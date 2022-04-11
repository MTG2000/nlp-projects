
export function typeToArabic(type: string) {
    switch (type) {
        case 'verb': return 'فعل'
        case 'noun': return 'اسم فاعل'
        case 'place': return 'اسم مكان'
    }
}


export function tenseToArabic(tense: string) {
    switch (tense) {
        case 'past': return 'ماضي'
        case 'present': return "مضارع"
        case 'order': return 'أمر'
    }
}