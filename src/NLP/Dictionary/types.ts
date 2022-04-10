export type Derivative =
    | {
        "type": "verb",
        "tense": "present" | 'past' | 'order'
    }
    | {
        type: "noun",
        count?: 'single' | 'plural'
        gender?: 'male' | 'female'
    }
    | {
        type: "place"
    }
