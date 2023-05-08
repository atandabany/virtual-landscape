import { AbstractForm } from './AbstractForm.js';

/**
 * Dessine un Nuage
 */
export class Nuage extends AbstractForm {
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

  nuage(ctx, dx, dy) {
    let ox = dx;
    let oy = dy;

    // nuage (milieu)
    ctx.beginPath();
    ctx.arc(ox + 210, oy + 80, 27, 0, Math.PI * 2, true);
    ctx.fillStyle = 'white';
    ctx.fill();

    // nuage (coté gauche)
    ctx.beginPath();
    ctx.arc(ox + 180, oy + 80, 23, 0, Math.PI * 2, true);
    ctx.fillStyle = 'white';
    ctx.fill();

    // nuage(coté droit)
    ctx.beginPath();
    ctx.arc(ox + 240, oy + 80, 23, 0, Math.PI * 2, true);
    ctx.fillStyle = 'white';
    ctx.fill();
  }


  /**
   * Dessine la forme spécifique à cette classe
   * @param ctx contexte 2D du canvas
   */

  draw(ctx) {
    ctx.save()
    this.nuage(ctx, this.x, this.y)

    // restores the styles from earlier
    // preventing the colors used here
    // from polluting other drawings
    ctx.restore()
  }

  /**
   * get array of forms
   * @return {[Nuage,...]}
   */
  static buildForms() {
    // create a new nuage object using the Nuage class
    let forms = []
    for (var i = 0; i <= ~~(Math.random() * 6); i++) {
      forms.push(new Nuage(~~(Math.random() * 1000), ~~(Math.random() * 150) - 50, 100, 100, 'blue', 'black', 1, true, 3))
    }

    console.log('nb de nuage : ' + forms.length)

    // retourne un tableau d'objets de type Nuage
    return forms
  }
}