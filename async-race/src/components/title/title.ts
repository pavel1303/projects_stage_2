export class Title {

  createTitle(content: string, className: string, level: number): HTMLElement {
    const title = document.createElement(`h${level}`);
    title.textContent = content;
    title.className = className;
    return title;
  }
}
