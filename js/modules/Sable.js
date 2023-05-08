import { AbstractForm } from './AbstractForm.js';

/**
 * Dessine un Sable
 */
export class Sable extends AbstractForm {
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

  sable(ctx, dx, dy) {
    let ox = dx;
    let oy = dy;
    ctx.beginPath();
    ctx.moveTo(ox + 50, oy + 50);
    ctx.lineTo(ox + 50, oy + 70);
    ctx.lineTo(ox + 1330, oy + 70);
    ctx.lineTo(ox + 1330, oy + 50);
    ctx.closePath();
    ctx.fillStyle = '#D2B48C';
    ctx.fill();
  }

  /**
   * Dessine la forme spécifique à cette classe
   * @param ctx contexte 2D du canvas
   */

  draw(ctx) {
    ctx.save();
    this.sable(ctx, this.x, this.y);

    // restores the styles from earlier
    // preventing the colors used here
    // from polluting other drawings
    ctx.restore();
  }

  /**
   * get array of forms
   * @return {[Sable,...]}
   */
  static buildForms() {
    let forms = [];
    forms.push(new Sable(-50, 460, 50, 100, 'blue', 'black', 1, true, 1));

    console.log('nb sable : ' + forms.length);

    // retourne un tableau d'objets de type Sable
    return forms;
  }
}