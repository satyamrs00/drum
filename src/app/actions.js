export const TURNON = 'TURNON';
export const TURNOFF = 'TURNOFF';
export const VOLUME = 'VOLUME';
export const DISPLAY = 'DISPLAY';

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

export function changeVolumeTo(amount) {
    return {
        type: VOLUME,
        amount 
    };
}

export function updateDisplay(text) {
    return {
        type: DISPLAY,
        text
    };
}