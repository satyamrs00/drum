export const TURNON = 'TURNON';
export const TURNOFF = 'TURNOFF';

export function turnOn() {
    return {
        type: TURNON
    };
}

export function turnOff() {
    return {
        type: TURNOFF
    };
}