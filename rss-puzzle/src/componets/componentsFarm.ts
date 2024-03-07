class Component {
  node: HTMLElement;
  children: Component[];

  constructor(
    { tag = 'div', className = '', text = '' }: ComponentProps,
    ...children: Component[]
  ) {
    const node = document.createElement(tag);
    node.className = className;
    node.textContent = text;
    this.node = node;
    this.children = [];

    this.appendChildren(children);
  }

  append(child: Component): void {
    this.children.push(child);
    this.node.append(child.getNode());
  }

  appendChildren(children: Component[]) {
    children.forEach((element) => {
      this.append(element);
    });
  }

  getNode(): HTMLElement {
    return this.node;
  }

  setTextContent(content: string): void {
    this.node.textContent = content;
  }

  setAttribute(attribute: string, value: string): void {
    this.node.setAttribute(attribute, value);
  }

  removeAttribute(attribute: string): void {
    this.node.removeAttribute(attribute);
  }

  toggleClass(className: string): void {
    this.node.classList.toggle(className);
  }

  addListener(event: string, listener: EventListener, options = false) {
    this.node.addEventListener(event, listener, options);
  }

  destroy(): void {
    this.children.forEach((child) => {
      child.destroy();
    });
    this.node.remove();
  }
}
