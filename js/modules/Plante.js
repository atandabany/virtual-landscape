import { AbstractForm } from './AbstractForm.js';

/**
 * Dessine une Plante
 */
export class Plante extends AbstractForm {
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

  plante(ctx, dx, dy) {
    let ox = dx;
    let oy = dy;
    var color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`

    // tige milieu
    ctx.beginPath();
    ctx.fillStyle = '';
    ctx.moveTo(ox + 210, oy + 120);
    ctx.lineTo(ox + 210, oy + 112);
    ctx.fill();
    ctx.strokeStyle = '#71F30B';
    ctx.stroke();

    // tige gauche
    ctx.beginPath();
    ctx.fillStyle = '';
    ctx.moveTo(ox + 210, oy + 120);
    ctx.lineTo(ox + 200, oy + 115);
    ctx.fill();
    ctx.strokeStyle = '#71F30B';
    ctx.stroke();

    // tige droite
    ctx.beginPath();
    ctx.fillStyle = '';
    ctx.moveTo(ox + 210, oy + 120);
    ctx.lineTo(ox + 220, oy + 115);
    ctx.fill();
    ctx.strokeStyle = '#71F30B';
    ctx.stroke();

    // bourgeon (milieu)
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(ox + 210, oy + 110, 3, 0, Math.PI * 2, true);
    ctx.fill();

    // bourgeon (gauche)
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(ox + 198, oy + 114, 3, 0, Math.PI * 2, true);
    ctx.fill();

    // bourgeon (droite)
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(ox + 222, oy + 114, 3, 0, Math.PI * 2, true);
    ctx.fill();
  }

  /**
   * Dessine la forme spécifique à cette classe
   * @param ctx contexte 2D du canvas
   */

  draw(ctx) {
    ctx.save()
    this.plante(ctx, this.x, this.y)

    // restores the styles from earlier
    // preventing the colors used here
    // from polluting other drawings
    ctx.restore()
  }

  /**
   * get array of forms
   * @return {[Plante,...]}
   */
  static buildForms() {
    // create a new plante object using the Plante class
    let forms = []
    for (var i = 0; i <= ~~(Math.random() * 100); i++) {
      forms.push(new Plante(~~(Math.random() * 1040), ~~(Math.random() * 10) + 390, 100, 100, 'blue', 'black', 1, false, 10))
    }

    console.log('nb de plante : ' + forms.length)

    // retourne un tableau d'objets de type Plante
    return forms
  }
}