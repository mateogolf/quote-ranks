export class Quote2 {
    constructor(
        // public id: number = null,
        public content: string = "",
        public author: string = "",
        public vote: number = 0,
        public created_at: Date = new Date(),
        public updated_at: Date = new Date()
    ) { }   
}
