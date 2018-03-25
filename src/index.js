class AvocadoToast {
  constructor() {
    this.toastMap = [];
    this.i = 0;
    this.font = 'font-family: Arial, Helvetica, sans-serif;';
    this.bg = 'rgba(118, 109, 249, .9)';
    const style = `
                .avo-toast {
                position: fixed;
                padding: 8px 16px 8px 16px;
                z-index: 999;
                right: 40px;
                animation: toast 0.6s cubic-bezier(0.4, 0, 0.2, 1);
                -webkit-animation: toast 0.6s cubic-bezier(0.4, 0, 0.2, 1);
                border-radius: 2px;
                transition: 0.6s cubic-bezier(0.4, 0, 0.2, 1);
                text-align: center;
                color: #ffffff;
                border-radius: 3px; }
              
              .avo-toast p {
                margin: 0 auto; }
              
              .show-toast {
                top: 100px;
                opacity: 1; }
              
              .hide-toast {
                top: 200px;
                opacity: 0; }
              
              @keyframes toast {
                from {
                  top: 0;
                  opacity: 0; }
                to {
                  top: 100px;
                  opacity: 1; } }`;

    const styleElem = document.createElement('style');
    styleElem.type = 'text/css';
    styleElem.appendChild(document.createTextNode(style));
    document.head.appendChild(styleElem);
  }

  create(options) {
    this.i += 1;
    const text = options.text === undefined ? '' : options.text;
    const delay = options.delay === undefined ? 4000 : options.delay;
    const bg = options.bg === undefined ? this.bg : options.bg;
    // const callback = options.callback === undefined ? null : options.callback;
    const elem = document.createElement('div');
    elem.className = 'avo-toast show-toast';
    elem.setAttribute('data', this.i);
    elem.innerHTML += text;
    elem.style = `${this.font}  background: ${bg}`;
    document.body.append(elem);
    this.toastMap.unshift(elem);
    this.destroy(elem, delay);
    this.update();
  }

  destroy(elem, delay) {
    window.setTimeout(() => {
      this.hide(elem, delay);
    }, delay);
  }

  hide(elem, delay) {
    elem.className += ' hide-toast';
    window.setTimeout(() => {
      this.delete(elem);
    }, 660);
  }

  delete(elem) {
    const index = this.toastMap.indexOf(elem);
    elem.remove();
    this.toastMap.splice(index, 1);
    this.update();
  }

  update() {
    this.toastMap.forEach((i) => {
      const index = this.toastMap.indexOf(i);
      const margin = index * 50;
      i.style.marginTop = `${margin}px`;
    });
  }
}
