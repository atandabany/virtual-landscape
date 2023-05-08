import { AbstractForm } from './AbstractForm.js';

/**
 * Dessine une Ile
 */
export class Ile extends AbstractForm {
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

  ile(ctx, dx, dy) {
    let ox = dx;
    let oy = dy;

    ctx.beginPath();
    ctx.fillStyle = 'grey';
    ctx.moveTo(ox + 10, oy + 8)
    ctx.lineTo(ox + 40, oy + -80)
    ctx.lineTo(ox + 70, oy + 8)
    ctx.fill();

    // neige
    ctx.beginPath();
    ctx.fillStyle = 'white';
    ctx.moveTo(ox + 29, oy + -45)
    ctx.lineTo(ox + 51, oy + -45)
    ctx.lineTo(ox + 40, oy + -80)

    ctx.fill();
  }

  /**
   * Dessine la forme spécifique à cette classe
   * @param ctx contexte 2D du canvas
   */
  
  draw(ctx) {
    ctx.save();
    this.ile(ctx, this.x, this.y);

    // restores the styles from earlier
    // preventing the colors used here
    // from polluting other drawings
    ctx.restore();
  }

  /**
   * get array of forms
   * @return {[Ile,...]}
   */
  static buildForms() {
    // create a new ile object using the Ile class
    let forms = [];
    for (let i = 0; i <= ~~(Math.random() * 2); i++) {
      forms.push(new Ile(~~(Math.random() * 1150), 242, 55, 100, 'blue', 'black', 1, true, 2));
    }

    console.log('nb de ile : ' + forms.length);

    // retourne un tableau d'objets de type Ile
    return forms;
  }
}