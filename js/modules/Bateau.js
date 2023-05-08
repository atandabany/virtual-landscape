import { AbstractForm } from './AbstractForm.js';

/**
 * Dessine un Bateau
 */
export class Bateau extends AbstractForm {
  // add default values to avoid errors on empty arguments
  constructor(
    x = 0,
    y = 0,
    width = 0,
    height = 0,
    fillColor = '',
    strokeColor = '',
    strokeWidth = 2,
    pesenteur = false,
    ordreConstruction = 100
  ) {
    super(x, y, width, height, fillColor, strokeColor, strokeWidth, pesenteur, ordreConstruction);
  }

  bateau(ctx, dx, dy) {
    let ox = dx;
    let oy = dy;
    var color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`

    // coque bateau
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.moveTo(ox + 50, oy + 50);
    ctx.lineTo(ox + 100, oy + 50);
    ctx.lineTo(ox + 120, oy + 40);
    ctx.lineTo(ox + 50, oy + 40);
    ctx.lineTo(ox + 50, oy + 50);
    ctx.fill();
    ctx.stroke();

    // drapeau
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.moveTo(ox + 70, oy + 40);
    ctx.lineTo(ox + 70, oy + 20);
    ctx.lineTo(ox + 90, oy + 25);
    ctx.lineTo(ox + 70, oy + 30);
    ctx.fill();
    ctx.stroke();
  }


  /**
   * Dessine la forme spécifique à cette classe
   * @param ctx contexte 2D du canvas
   */

  draw(ctx) {
    ctx.save()
    this.bateau(ctx, this.x, this.y)

    // restores the styles from earlier
    // preventing the colors used here
    // from polluting other drawings
    ctx.restore()
  }

  /**
   * get array of forms
   * @return {[Bateau,...]}
   */
  static buildForms() {
    // create a new bateau object using the Bateau class
    let forms = []
    for (var i = 0; i <= ~~(Math.random() * 5); i++) {
      forms.push(new Bateau(~~(Math.random() * 1150), 199, 100, 100, 'blue', 'black', 1, true, 3))
    }

    console.log('nb de bateau : ' + forms.length)

    // retourne un tableau d'objets de type Bateau
    return forms
  }
}