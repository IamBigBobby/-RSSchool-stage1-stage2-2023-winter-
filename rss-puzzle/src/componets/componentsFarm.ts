class Componet {
    node: HTMLElement;
    children: HTMLElement[];

    constructor({tag = "div", className = "", text = ""}: ComponentProps, ...children: HTMLElement[]){
        const node = document.createElement(tag);
        node.className = className;
        node.textContent = text;
        this.node = node;
    }

    append(child: HTMLElement): void{
        this.children.push(child);
        if (child instanceof Componet) {
            this.node.append(child.getNode());
        } else {
            this.node.append(child);
        }
    }

    appendChildren(children: HTMLElement[]){
        children.forEach((element) => {
            this.append(element);
        })
    }

    getNode(): HTMLElement {
        return this.node;
    }
}