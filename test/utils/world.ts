import { World as CucumberWorld, setWorldConstructor } from '@cucumber/cucumber';

export class World extends CucumberWorld {

    public testData: Record<string, unknown> = {};

    public setTestData(key: string, value: unknown): void {
        this.testData[key] = value;
    }

    public getTestData<TValue = unknown>(key: string): TValue | null {
        const value = this.testData[key];
        return (value ?? null) as TValue | null;
    }
}

setWorldConstructor(World);