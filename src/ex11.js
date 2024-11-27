async function calculateTotal(price) {
    const result = await fetch("http://monsite.fr/taxe");
    if(!result || !result.ok){
        throw new Error("Api error");
    }
    let data = result.json();
    if(!data || !data.tax){
        throw new Error("Api result incorrect");
    }
    return price + price * data.tax;
}

module.exports = {calculateTotal};