export class Input {

  createInput(type: string, className: string, id: string): HTMLInputElement {
    const input = document.createElement('input');
    input.type = type;
    input.className = className;
    input.id = id;
    return input;
  }
}
