import { AbstractForm } from './AbstractForm.js';

/**
 * Dessine un Oiseau
 */
export class Oiseau extends AbstractForm {
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

  oiseau(ctx, dx, dy) {
    let ox = dx;
    let oy = dy;

    // corps
    ctx.beginPath();
    ctx.fillStyle = 'purple';
    ctx.ellipse(ox + 210, oy + 15, 10, 7, 0, 0, 2 * Math.PI);
    ctx.fill();

    // tete
    ctx.beginPath();
    ctx.arc(ox + 225, oy + 15, 5, 0, Math.PI * 2, true);
    ctx.fillStyle = 'purple';
    ctx.fill();

    // bec
    ctx.beginPath();
    ctx.fillStyle = 'purple';
    ctx.moveTo(ox + 230, oy + 12);
    ctx.lineTo(ox + 235, oy + 14.5);
    ctx.lineTo(ox + 230, oy + 17);
    ctx.fill();

    // aile
    ctx.beginPath();
    ctx.fillStyle = 'purple';
    ctx.ellipse(ox + 205, oy + 7, 5, 15, 2, 0, 2 * Math.PI);
    ctx.fill();
  }

  /**
   * Dessine la forme spécifique à cette classe
   * @param ctx contexte 2D du canvas
   */

  draw(ctx) {
    ctx.save()
    this.oiseau(ctx, this.x, this.y)

    // restores the styles from earlier
    // preventing the colors used here
    // from polluting other drawings
    ctx.restore()
  }

  /**
   * get array of forms
   * @return {[Oiseau,...]}
   */
  static buildForms() {
    // create a new oiseau object using the Oiseau class
    let forms = []
    for (var i = 0; i <= ~~(Math.random() * 50); i++) {
      forms.push(new Oiseau(~~(Math.random() * 1030), ~~(Math.random() * 150) + 50, 100, 100, 'blue', 'black', 1, true, 4))
    }

    console.log('nb oiseau : ' + forms.length)

    // retourne un tableau d'objets de type Oiseau
    return forms
  }
}