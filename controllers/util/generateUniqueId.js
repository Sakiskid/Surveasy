const characters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm']

function generateUniqueId(length) {
    let uID = '';
    for (let i = 0; i < length; i++) {
        uID += characters[Math.floor(Math.random() * characters.length)];
    }
    return uID;
}

module.exports = generateUniqueId;