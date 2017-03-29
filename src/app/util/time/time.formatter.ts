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

    static formatToSeconds(time: string): number {
        let splittedTime = time.split(':');

        let minutes = +splittedTime[0],
            seconds = +splittedTime[1];

        return minutes * 60 + seconds;
    }

}
