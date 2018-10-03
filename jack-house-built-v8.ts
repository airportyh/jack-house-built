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
    private formatter: IFormatter;

    constructor(orderer?: IOrder, formatter?: IFormatter) {
        if (!orderer) {
            orderer = new DefaultOrder();
        }
        this._data = orderer.order(this.DATA);
        this.formatter = formatter;
        if (!this.formatter) {
            this.formatter = new DefaultFormatter();
        }
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
        return this.formatter.format(this.parts(number)).join(" ");
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

class DefaultOrder {
    public order(data: string[]): string[] {
        return data;
    }
}

class RandomOrder {
    public order(data: string[]): string[] {
        return _.shuffle(data);
    }
}

interface IFormatter {
    format(parts: string[]): string[];
}

class DefaultFormatter implements IFormatter {
    public format(parts: string[]): string[] {
        return parts;
    }
}

class EchoFormatter implements IFormatter {
    public format(parts: string[]): string[] {
        return _.flatten(_.zip(parts, parts));
    }
}

// Normal House
// console.log(new House().recite());

// RandomHouse:
// console.log(new House(new RandomOrder()).recite());

// EchoHouse:
// console.log(new House(new DefaultOrder(), new EchoFormatter()).recite());

// EchoRandomHouse:
console.log(new House(new RandomOrder(), new EchoFormatter()).recite());