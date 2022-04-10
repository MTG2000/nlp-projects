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
        isPlural: true,
        isFemale: true,
    },

}

export default data;