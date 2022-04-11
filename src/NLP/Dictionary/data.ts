export type Derivative =
    | {
        "type": "verb",
        "tense": "present" | 'past' | 'order'
    }
    | ({
        type: "noun"
    } & NounProperties)
    | {
        type: "object"
    }
    | {
        type: "place"
    }

export type NounProperties = Partial<{
    isPlural: boolean;
    isFemale: boolean
}>


const data: Record<string, Record<string, Derivative>> = {
    "لعب": {
        "لعب": {
            "type": "verb",
            "tense": "past"
        },
        "يلعب": {
            "type": "verb",
            "tense": "present"
        },
        "لاعب": {
            "type": "noun",
        },
        "ملعوب": {
            "type": "object",
        },
        "ملعب": {
            "type": "place"
        },
    },
    "طلب": {
        "طلب": {
            "type": "verb",
            "tense": "past"
        },
        "يطلب": {
            "type": "verb",
            "tense": "present"
        },
        "طالب": {
            "type": "noun",
        },
        "طلاب": {
            "type": "noun",
            "isPlural":true
        },
        "مطلوب": {
            "type": "object",
        },
    },
    "اكل": {
        "اكل": {
            "type": "verb",
            "tense": "past"
        },
        "يأكل": {
            "type": "verb",
            "tense": "present"
        },
        "آكل": {
            "type": "noun",
        },
        "مأكول": {
            "type": "object",
        },
        "مأكل": {
            "type": "place"
        },
    },
    "شرب": {
        "شرب": {
            "type": "verb",
            "tense": "past"
        },
        "يشرب": {
            "type": "verb",
            "tense": "present"
        },
        "شارب": {
            "type": "noun",
        },
        "مشروب": {
            "type": "object",
        },
        "مشرب": {
            "type": "place"
        },
    },
    "عمل": {
        "عمل": {
            "type": "verb",
            "tense": "past"
        },
        "يعمل": {
            "type": "verb",
            "tense": "present"
        },
        "عامل": {
            "type": "noun",
        },
        "معمول": {
            "type": "object",
        },
        "معمل": {
            "type": "place"
        },
    },
    "مشى": {
        "مشى": {
            "type": "verb",
            "tense": "past"
        },
        "يمشي": {
            "type": "verb",
            "tense": "present"
        },
        "ماشي": {
            "type": "noun",
        },
        "مُمشى": {
            "type": "object",
        },
        "ممشى": {
            "type": "place"
        },
    },
    "ضرب": {
        "ضرب": {
            "type": "verb",
            "tense": "past"
        },
        "يضرب": {
            "type": "verb",
            "tense": "present"
        },
        "ضارب": {
            "type": "noun",
        },
        "مضروب": {
            "type": "object",
        },
        "مضرب": {
            "type": "place"
        },
    },
    "فعل": {
        "فعل": {
            "type": "verb",
            "tense": "past"
        },
        "يفعل": {
            "type": "verb",
            "tense": "present"
        },
        "فاعل": {
            "type": "noun",
        },
        "مفعول": {
            "type": "object",
        },
        "مفعل": {
            "type": "place"
        },
    },
    "قعد": {
        "قعد": {
            "type": "verb",
            "tense": "past"
        },
        "يقعد": {
            "type": "verb",
            "tense": "present"
        },
        "قاعد": {
            "type": "noun",
        },
        "مقعود": {
            "type": "object",
        },
        "مقعد": {
            "type": "place"
        },
    },
    "جلس": {
        "جلس": {
            "type": "verb",
            "tense": "past"
        },
        "يجلس": {
            "type": "verb",
            "tense": "present"
        },
        "جالس": {
            "type": "noun",
        },
        "مجلوس": {
            "type": "object",
        },
        "مجلس": {
            "type": "place"
        },
    },
    "قام": {
        "قام": {
            "type": "verb",
            "tense": "past"
        },
        "يقوم": {
            "type": "verb",
            "tense": "present"
        },
        "قائم": {
            "type": "noun",
        },
        "موقام": {
            "type": "object",
        },
        "مقام": {
            "type": "place"
        },
    },
}

export const nounsSuffixes: Record<string, NounProperties> = {
    "ون": {
        isPlural: true,
    },
    "ين": {
        isPlural: true,
    },
    "ات": {
        isPlural: true,
        isFemale: true,
    },
    "ة": {
        
        isFemale: true,
    },

}

export default data;