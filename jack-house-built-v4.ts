import * as _ from "lodash";

class House {
    
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
        return [
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
    }
}

class RandomHouse extends House {
    private _data: string[];
    public data(): string[] {
        if (this._data) {
            return this._data;
        }
        this._data = _.shuffle(super.data());
        return this._data;
    }
}

class EchoHouse extends House {
    public parts(number: number): string[] {
        const parts = super.parts(number);
        return _.flatten(_.zip(parts, parts));
    }
}

// 23:45 of video https://www.youtube.com/watch?v=29MAL8pJImQ
class RandomEchoHouse extends RandomHouse {
    public parts(number: number): string[] {
        const parts = super.parts(number);
        return _.flatten(_.zip(parts, parts));
    }
}

console.log(new RandomEchoHouse().recite());