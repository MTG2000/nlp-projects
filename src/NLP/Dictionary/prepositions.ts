const prepositions = {
    "من": {
        "type": "preposition"
    },
    "إلى": {
        "type": "preposition"
    },
    "عن": {
        "type": "preposition"
    },
    "على": {
        "type": "preposition"
    }
}

export function isPreposition(word: string): word is keyof typeof prepositions {
    return word in prepositions;
}



export default prepositions;