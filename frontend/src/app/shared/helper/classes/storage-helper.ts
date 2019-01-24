// TODO: Move to own npm package
export class StorageHelper {
    static clear() {
        try {
            return localStorage.clear();
        } catch (err) {
            return sessionStorage.clear();
        }
    }

    static getItem(key: string) {
        try {
            return localStorage.getItem(key);
        } catch (err) {
            return sessionStorage.getItem(key);
        }
    }

    static setItem(key: string, value: any) {
        try {
            return localStorage.setItem(key, value);
        } catch (err) {
            return sessionStorage.setItem(key, value);
        }
    }

    static removeItem(key: string) {
        try {
            return localStorage.removeItem(key);
        } catch (err) {
            return sessionStorage.removeItem(key);
        }
    }
}
