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

function upgradingBag(base, upgrade) {

    if (typeof base !== 'object' && typeof upgrade !== 'object' && !Array.isArray(upgrade && base)) {
        return "please pass a valid object as an argument"
    }
        
        const newBag = {...base, ...upgrade};
        return newBag;
   
};

console.log(upgradingBag(baseBag, intBag));