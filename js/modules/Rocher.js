import { AbstractForm } from './AbstractForm.js';

/**
 * Dessine un Rocher
 */
export class Rocher extends AbstractForm {
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

  rocher(ctx, dx, dy) {
    let ox = dx;
    let oy = dy;

    // rocher (droite)
    ctx.beginPath();
    ctx.arc(ox + 80, oy + 100, 25, 0, Math.PI, 2 * Math.PI, false);
    ctx.fillStyle = '#494849';
    ctx.fill();

    // rocher (gauche)
    ctx.beginPath();
    ctx.arc(ox + 50, oy + 100, 25, 0, Math.PI, 2 * Math.PI, false);
    ctx.fillStyle = '#494849';
    ctx.fill();

    // rocher (milieu)
    ctx.beginPath();
    ctx.arc(ox + 65, oy + 90, 25, 0, Math.PI, 2 * Math.PI, false);
    ctx.fillStyle = '#494849';
    ctx.fill();
  }

  /**
   * Dessine la forme spécifique à cette classe
   * @param ctx contexte 2D du canvas
   */

  draw(ctx) {
    ctx.save();
    this.rocher(ctx, this.x, this.y);

    // restores the styles from earlier
    // preventing the colors used here
    // from polluting other drawings
    ctx.restore();
  }

  /**
   * get array of forms
   * @return {[Rocher,...]}
   */
  static buildForms() {
    let forms = [];
    for (let i = 0; i <= ~~(Math.random() * 3); i++) {
      forms.push(new Rocher(~~(Math.random() * 1150), 410, 55, 100, 'blue', 'black', 1, true, 1));
    }

    console.log('nb de rocher : ' + forms.length);

    // retourne un tableau d'objets de type Rocher
    return forms;
  }
}