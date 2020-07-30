export const range = (start, end, step = 1) => {
    let output = [];
    if (typeof end === 'undefined') {
        end = start;
        start = 0;
    }
    for (let i = start; i < end; i += step) {
        output.push(i);
    }
    return output;
};

export const sampleOne = arr => {
    return arr[Math.floor(Math.random() * arr.length)];
};

export const sample = (arr, len = 1) => {
    let output = [];

    for (let i = 0; i < len; i++) {
        output.push(sampleOne(arr));
    }

    return output;
};

export const random = (min, max) =>
    Math.floor(Math.random() * (max - min)) + min;

export const generateId = (len = 4) => {
    // prettier-ignore
    const characters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    return sample(characters, len).join('');
};

