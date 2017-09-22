import { BaseData } from "./base/base.data";

export class MongoDbData<T> implements BaseData<T>  {
    getAll(): Promise<T[]> {
        return Promise.resolve(null);
    }
    getById(id: string): Promise<T> {
        return Promise.resolve(null);
    }
    add(item: T): Promise<T> {
        return Promise.resolve(null);
    }
}