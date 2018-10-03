import * as _ from "lodash";

class House {

    private DATA: string[] = [
        'the horse and the hound and the horn that belonged to',
        'the farmer sowing his corn that kept',
        'the rooster that crowed in the morn that woke',
        'the priest all shaven and shorn that married',
        'the man all tatterd and torn that kissed',
        'the maiden all forlorn that milked',
        'the cow with the rumpled horn that tossed',
        'the dog that worried',
        'the cat that killed',
        'the rat that ate',
        'the malt that lay in',
        'the house that Jack built'
    ];

    private _data: string[];

    constructor(orderer?: IOrder) {
        if (!orderer) {
            orderer = new DefaultOrder();
        }
        this._data = orderer.order(this.DATA);
    }
    
    public recite(): string {
        return this.data()
            .map((_, i) => this.line(i + 1))
            .join("\n");
    }

    public line(number: number): string {
        return `This is ${this.phrase(number)}.\n`;
    }

    public phrase(number: number): string {
        return this.parts(number).join(" ");
    }

    public parts(number: number): string[] {
        return this.data().slice(this.data.length - number);
    }

    public data(): string[] {
        return this._data;
    }
}

interface IOrder {
    order(data: string[]): string[];
}

class DefaultOrder implements IOrder {
    public order(data: string[]): string[] {
        return data;
    }
}

class RandomOrder implements IOrder {
    public order(data: string[]): string[] {
        return _.shuffle(data);
    }
}

console.log(new House().recite());
// above is equivalent to this more explicit version:
console.log(new House(new DefaultOrder()).recite());

console.log(new House(new RandomOrder()).recite());