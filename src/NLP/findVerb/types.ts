
export type VerbProperties = Partial<{
    count: 'single' | 'pair' | 'plural'
    geneder: 'male' | 'female'
    tense: 'present' | 'past' | 'order' | 'future'
}>