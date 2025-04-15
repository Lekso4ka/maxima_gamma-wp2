import {
    Product,
    basketValues
} from "./types"

const basket = new Map<string, basketValues>();

function sum() {
    const data = Array.from(basket).map(el => el[1])
    const sum = data.reduce((acc, el) => {
        acc = acc + el.cnt * el.price
        return acc
    }, 0)
    console.log(data);
    console.log(sum);
}

function createLine(obj:Product<string>, arr:Product<string>[]): HTMLDivElement {
    const line = document.createElement("div");
    line.className = "row"
    line.innerHTML = `<div>${obj.id}</div>
                     <div>${obj.price}</div>`
    if (basket.has(obj.id)) {
        const block = document.createElement("div");
        block.style.display = "flex";
        const lBtn = document.createElement("button")
        lBtn.innerText = "-";
        const rBtn = document.createElement("button")
        rBtn.innerText = "+";
        lBtn.addEventListener("click", () => {
            const data:basketValues = basket.get(obj.id)!;
            if (data.cnt === 1) {
                basket.delete(obj.id)
            } else {
                data.cnt--
                basket.set(obj.id, data)
            }
            createTable(arr)
        })
        rBtn.addEventListener("click", () => {
            const data:basketValues = basket.get(obj.id)!;
            if (data.cnt !== obj.quantity) {
                data.cnt++
                basket.set(obj.id, data)
            }
            createTable(arr)
        })
        const content = document.createElement("div")
        content.innerText = basket.get(obj.id)?.cnt.toString() || "";
        block.append(lBtn, content, rBtn);
        line.append(block);
    } else {
        const btn = document.createElement("button");
        btn.innerText = "Купить";
        btn.addEventListener("click", () => {
            basket.set(obj.id, {cnt: 1, price: obj.price})
            createTable(arr)
        }, {once: true})
        line.append(btn);
    }
    return line;
}

export function createTable(
    arr: Product<string>[]
): void {
    const table = document.createElement("div");
    table.className = "table";
    for (let obj of arr) {
        table.append(createLine(obj, arr))
    }
    sum()
    document.body.innerHTML = "";
    document.body.append(table);
}