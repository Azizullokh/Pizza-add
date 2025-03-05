import { Pizza , PizzaModel } from "./model/Pizza";

const rootElement = document.querySelector('.root')!

function pizzaElementCreator(pizza:PizzaModel): string {
    return `
    <div class="pizza" data-id="${pizza.id}">
    <h2 class="title-pizza">${pizza.title}</h2>
    <p>${pizza.toppings.join(" ,")}</p>
    <h3>${pizza.description}</h3>
    <span>${pizza.price}</span>
    <button class="delete-btn" data-id="${pizza.id}">delete</button>
    </div>
    `
}

function pizzaTemplateRender(pizzasTemplate: string[] , parent: Element) {
    const templateElement = document.createElement('template')
    for (let t of pizzasTemplate){
        templateElement.innerHTML += t
    }
    parent.append(templateElement.content)
}

document.addEventListener("DOMContentLoaded" , async () => {
    const pizzas = await Pizza.loadAll()
    const pizzaTeampletes = pizzas.map(pizzaElementCreator)
    pizzaTemplateRender(pizzaTeampletes, rootElement)
})

document.addEventListener("click", async (event) => {
    const target = event.target as HTMLElement;
    if (target.classList.contains("delete-btn")) {
        const pizzaId = target.getAttribute("data-id"); 
        if (!pizzaId) { 
            alert(`"Pizza id wrong", ${pizzaId}`);
            return;
        }

        await Pizza.delete(pizzaId);
        document.querySelector(`.pizza[data-id="${pizzaId}"]`)?.remove();
        alert(`Pizza ${pizzaId} has been deleted!`);
    }
});

document.addEventListener("DOMContentLoaded", async () => {
    const pizzas = await Pizza.loadAll();
});
