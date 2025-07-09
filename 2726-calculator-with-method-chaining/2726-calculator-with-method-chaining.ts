class Calculator {
    private currentValue: number;

    constructor(value: number) {
        this.currentValue = value;
    }

    add(value: number): Calculator {
        this.currentValue += value;
        return this;
    }

    subtract(value: number): Calculator {
        this.currentValue -= value;
        return this;
    }

    multiply(value: number): Calculator {
        this.currentValue *= value;
        return this;
    }

    divide(value: number): Calculator {
        if (value === 0) {
            throw new Error("Division by zero is not allowed");
        }
        this.currentValue /= value;
        return this;
    }

    power(value: number): Calculator {
        this.currentValue = Math.pow(this.currentValue, value);
        return this;
    }

    getResult(): number {
        return this.currentValue;
    }
}
