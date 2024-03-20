import ComponentProps from '../interfaces/interfaces';

export default class Component {
  node: HTMLElement;

  children: Component[];

  constructor(
    { tag = 'div', className = '', text = '' }: ComponentProps,
    ...children: Component[]
  ) {
    this.node = document.createElement(tag);
    this.node.className = className;
    this.node.textContent = text;
    this.children = [];

    this.appendChildren(children);
  }

  public appendChildren(children: Component[]): void {
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

  public setInnerText(content: string): void {
    this.node.innerText = content;
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

  public addListener(
    event: string,
    listener: EventListenerOrEventListenerObject,
    options = false,
  ): void {
    this.node.addEventListener(event, listener, options);
  }

  public removeNode(): void {
    if (this.node.parentNode) {
      this.node.parentNode.removeChild(this.node);
    }
  }

  public destroy(): void {
    this.children.forEach((child) => {
      child.destroy();
    });
    this.node.remove();
  }

  public setBackgroundImage(imageUrl: string): void {
    this.node.style.backgroundImage = `url(${imageUrl})`;
  }

  public setStyle(property: string, value: string): void {
    this.node.style.setProperty(property, value);
  }

  public getChildren(): Component[] {
    return this.children;
  }

  public addClass(className: string): void {
    this.node.classList.add(className);
  }

  public append(child: Component): void {
    this.children.push(child);
    this.node.append(child.getNode());
  }
}
