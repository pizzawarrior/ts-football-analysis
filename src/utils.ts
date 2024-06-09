export const dateStringtoDate = (dateString: string): Date => {
    const dateConversion = dateString
        .split('/')
        .map((value: string): number => {
            return parseInt(value);
})
    // the date constructor is zero indexed, so we subtract 1. Eg. January should be 0.
    dateConversion[1] = dateConversion[1] - 1;
    return new Date(dateConversion[2], dateConversion[1], dateConversion[0])
}
