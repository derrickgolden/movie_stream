export function timeToSeconds(time: string): number {
    let parts = time.split('.').map(Number);

    if (parts.length === 1) {
        // If there's only one part, assume it's minutes
        if (time.split('.')[0].length > 1) {
            // If first part has more than 1 digit, treat it as minutes and seconds (mm.ss)
            return parts[0] * 60;
        } else {
            // Otherwise, treat it as hours and minutes (hh.mm)
            return parts[0] * 3600;
        }
    } else if (parts.length === 2) {
        if (time.split('.')[0].length > 1) {
            // If first part has more than 1 digit, treat it as minutes and seconds (mm.ss)
            let [minutes, seconds] = parts;
            return (minutes * 60) + seconds;
        } else {
            // Otherwise, treat it as hours and minutes (hh.mm)
            let [hours, minutes] = parts;
            return (hours * 3600) + (minutes * 60);
        }
    } else if (parts.length === 3) {
        // If three parts exist, assume hours, minutes, and seconds (hh.mm.ss)
        let [hours, minutes, seconds] = parts;
        return (hours * 3600) + (minutes * 60) + seconds;
    }

    throw new Error("Invalid time format. Use hh.mm.ss, mm.ss, or mm.");
}

