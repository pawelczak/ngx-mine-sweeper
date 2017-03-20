export class LocalStorage {

    private localStorageSupported: boolean;

    constructor() {
        this.localStorageSupported = this.isSupported();
        if (!this.localStorageSupported) {
            console.warn('Local storage is not supported');
        }
    }

    getItem(key: string): string {
        if (this.localStorageSupported) {
            return localStorage.getItem(key);
        }
    }

    setItem(key: string, value: string): void {
        if (this.localStorageSupported) {
            localStorage.setItem(key, value);
        }
    }

    getObject(key: string): any {
        if (this.localStorageSupported) {
            return JSON.parse(localStorage.getItem(key));
        }
    }

    setObject(key: string, value: any): void {
        if (this.localStorageSupported) {
            localStorage.setItem(key, JSON.stringify(value));
        }
    }

    remove(key: string): void {
        if (this.localStorageSupported) {
            localStorage.removeItem(key);
        }
    }

    clear(): void {
        if (this.localStorageSupported) {
            localStorage.clear();
        }
    }

    isSupported(): boolean {
        try {
            let itemBackup = localStorage.getItem('');
            localStorage.removeItem('');
            localStorage.setItem('', itemBackup);
            if (itemBackup === null) {
                localStorage.removeItem('');
            } else {
                localStorage.setItem('', itemBackup);
            }
            return true;
        } catch (e) {
            return false;
        }
    }

}
