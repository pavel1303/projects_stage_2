export class Button {
  createButton(name: string, className: string, id: string): HTMLElement {
    const btn = document.createElement('div');
    btn.className = className;
    btn.innerHTML = name;
    btn.id = id;
    return btn;
  }
}
