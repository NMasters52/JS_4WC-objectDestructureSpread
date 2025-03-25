const baseBag = {
    driver: 'roadRunner',
    midRange: 'roc',
    putter: 'aviar'
};

const intBag = {
    driver: 'teebird',
    midRange: 'roc',
    putter: 'aviar'
};

function objValidation(obj) {
   return typeof obj == 'object' && !Array.isArray(obj);
}

function upgradingBag(base, upgrade) {

    if (!objValidation(base) || !objValidation(upgrade)) {
        return "invalid object passed as an argument";
    }
    const newBag = {...base, ...upgrade};
    return newBag;
   
};

console.log(upgradingBag(baseBag, 1));