import { AbstractForm } from './AbstractForm.js';

/**
 * Dessine Eau
 */
export class Eau extends AbstractForm {
  // add default values to avoid errors on empty arguments
  constructor(
    x = 0,
    y = 0,
    width = 0,
    height = 0,
    fillColor = '',
    strokeColor = '',
    strokeWidth = 2,
    pesanteur = false,
    ordreConstruction = 100
  ) {
    super(x, y, width, height, fillColor, strokeColor, strokeWidth, pesanteur, ordreConstruction);
  }

  eau(ctx, dx, dy) {
    let ox = dx;
    let oy = dy;
    ctx.beginPath();
    ctx.moveTo(ox + 50, oy + 50);
    ctx.lineTo(ox + 50, oy + 310);
    ctx.lineTo(ox + 1330, oy + 310);
    ctx.lineTo(ox + 1330, oy + 50);
    ctx.closePath();
    ctx.fillStyle = '#1f75fe';
    ctx.fill();
  }

  /**
   * Dessine la forme spécifique à cette classe
   * @param ctx contexte 2D du canvas
   */
  draw(ctx) {
    ctx.save();
    this.eau(ctx, this.x, this.y);

    // restores the styles from earlier
    // preventing the colors used here
    // from polluting other drawings
    ctx.restore();
  }

  /**
   * get array of forms
   * @return {[Eau,...]}
   */
  static buildForms() {
    // create a new eau object using the Eau class
    let forms = [];
    forms.push(new Eau(-50, 200, 50, 100, 'blue', 'black', 1, true, 1));

    console.log('nb eau : ' + forms.length);

    // retourne un tableau d'objets de type Eau
    return forms;
  }
}