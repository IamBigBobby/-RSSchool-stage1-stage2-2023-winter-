import { ComponentProps } from "../interfaces/interfaces";

export class Component {
  protected node: HTMLElement;
  protected children: Component[];

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

  public append(child: Component): void {
    this.children.push(child);
    this.node.append(child.getNode());
  }

  public appendChildren(children: Component[]) {
    children.forEach((element) => {
      this.append(element);
    });
  }

  public getNode(): HTMLElement {
    return this.node;
  }

  public setTextContent(content: string): void {
    this.node.textContent = content;
  }

  public setAttribute(attribute: string, value: string): void {
    this.node.setAttribute(attribute, value);
  }

  public removeAttribute(attribute: string): void {
    this.node.removeAttribute(attribute);
  }

  public toggleClass(className: string): void {
    this.node.classList.toggle(className);
  }

  public addListener(event: string, listener: EventListener, options = false) {
    this.node.addEventListener(event, listener, options);
  }

  public destroy(): void {
    this.children.forEach((child) => {
      child.destroy();
    });
    this.node.remove();
  }
}
