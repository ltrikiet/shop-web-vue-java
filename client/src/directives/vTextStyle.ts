import type { Directive } from 'vue';

const vTextStyle: Directive<HTMLElement, string> = {
  mounted: (el, binnding) => {
    switch (binnding.value) {
      case 'h1':
        el.classList.add('text-5xl');
        el.classList.add('font-light');
        el.classList.add('tracking-widest');
        break;

      case 'h2':
        el.classList.add('text-4xl');
        el.classList.add('font-light');
        el.classList.add('tracking-widest');
        break;

      case 'paragraph':
        el.classList.add('text-lg');
        el.classList.add('tracking-widest');
        break;

      default:
        break;
    }
  }
};

export default vTextStyle;
