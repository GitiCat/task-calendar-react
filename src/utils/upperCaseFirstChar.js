export const UpperCaseFirstChar = string => {
    return !string ? string : string[0].toUpperCase() + string.slice(1);
}