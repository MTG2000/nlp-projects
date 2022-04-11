const conjunctions = {
    "و": {
        "type": "conjunction"
    },
    "ثم": {
        "type": "conjunction"
    }
}

export function isConjunction(word: string): word is keyof typeof conjunctions {
    return word in conjunctions;
}



export default conjunctions;