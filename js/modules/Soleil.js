import { AbstractForm } from './AbstractForm.js';

/**
 * Dessine un Soleil
 */
export class Soleil extends AbstractForm {
  // Ajout des valeurs par défaut pour éviter les erreurs avec des arguments vides
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

  soleil(ctx, dx, dy) {
    let ox = dx;
    let oy = dy;
    ctx.beginPath();
    ctx.arc(ox + 100, oy + 100, 180, 0, Math.PI, 2 * Math.PI, false);
    ctx.fillStyle = '#FDB813';
    ctx.fill();
  }

  /**
   * Dessine la forme spécifique à cette classe
   * @param ctx contexte 2D du canvas
   */

  draw(ctx) {
    ctx.save();
    this.soleil(ctx, this.x, this.y);

    // restores the styles from earlier
    // preventing the colors used here
    // from polluting other drawings
    ctx.restore();
  }

  /**
   * get array of forms
   * @return {[Soleil,...]}
   */
  static buildForms() {
    let forms = [];
    for (let i = 0; i <= ~~(Math.random() * 1); i++) {
      forms.push(new Soleil(~~(Math.random() * 990), 150, 50, 100, 'blue', 'black', 1, true, 1));
    }

    console.log('nb de soleil : ' + forms.length);

    // retourne un tableau d'objets de type Soleil
    return forms;
  }
}