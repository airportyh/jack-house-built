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
        return this.data().slice(this.data.length - number).join(" ");
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

console.log(new House().line(1));

console.log(new House().line(2));

console.log(new House().line(3));

console.log(new House().line(12));

console.log(new House().recite());