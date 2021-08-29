
interface I_Item { 

    readonly id: number | null
    readonly name: string | null
    readonly price: number | null
}

export class Item implements I_Item{

    public readonly id: number | null = null
    public readonly name: string | null = null
    public readonly price: number | null = null

    constructor(id: number, name: string, price: number)
    {
        this.id = id
        this.name = name
        this.price = price
    }
    
}