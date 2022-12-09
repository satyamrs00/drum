export const POWER = 'POWER';
export const TURNOFF = 'TURNOFF';
export const VOLUME = 'VOLUME';
export const DISPLAY = 'DISPLAY';
export const BANK = 'BANK';

export function togglePower() {
    return {
        type: POWER
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

export function toggleBank() {
    return {
        type: BANK
    };
}