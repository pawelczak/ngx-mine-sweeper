export class TimeFormatter {

    static formatFromSeconds(seconds: number): string {
        let time: string = '',
            minutes: number = Math.floor(seconds / 60),
            formatedSeconds = seconds % 60;

        if (minutes < 10) {
            time += '0';
        }

        time += minutes;

        time += ':';

        if (formatedSeconds < 10) {
            time += '0';
        }

        time += formatedSeconds;

        return time;
    }

}
