function hexToRgbInt(hex) {
    hex = hex.replace('#', '');
    if (hex.length !== 6) {
        throw new Error('Invalid hex value');
    }

    const rgbInt = parseInt(hex, 16);
    return rgbInt;
}

function hexToBgrInt(hex) {
    hex = hex.replace('#', '');
    if (hex.length !== 6) {
        throw new Error('Invalid hex value');
    }

    const rgbInt = parseInt(hex, 16);
    const red = (rgbInt >> 16) & 0xFF;
    const green = (rgbInt >> 8) & 0xFF;
    const blue = rgbInt & 0xFF;

    const bgrInt = (blue << 16) | (green << 8) | red;
    return bgrInt;
}

function calculate() {
    const hexInput = document.getElementById('hexInput').value;
    try {
        const rgbInt = hexToRgbInt(hexInput);
        const bgrInt = hexToBgrInt(hexInput);

        document.getElementById('result').innerHTML = `
            <p>RGB Integer: ${rgbInt}</p>
            <p>BGR Integer: ${bgrInt}</p>
        `;
    } catch (error) {
        document.getElementById('result').innerHTML = `
            <p style="color: red;">Error: ${error.message}</p>
        `;
    }
}
