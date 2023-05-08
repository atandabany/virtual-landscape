import { AbstractForm } from './AbstractForm.js';

/**
 * Dessine une Montgolfiere
 */
export class Montgolfiere extends AbstractForm {
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

  montgolfiere(ctx, dx, dy) {
    let ox = dx;
    let oy = dy;

    // ballon
    ctx.beginPath();
    ctx.fillStyle = 'red';
    ctx.arc(ox + 210, oy + 80, 20, 0, Math.PI * 2, true);
    ctx.fill();

    // habitacle
    ctx.beginPath();
    ctx.fillStyle = 'orange';
    ctx.moveTo(ox + 200, oy + 120);
    ctx.lineTo(ox + 220, oy + 120);
    ctx.lineTo(ox + 220, oy + 130);
    ctx.lineTo(ox + 200, oy + 130);
    ctx.fill();

    // corde (milieu)
    ctx.beginPath();
    ctx.fillStyle = 'black';
    ctx.moveTo(ox + 210, oy + 120);
    ctx.lineTo(ox + 210, oy + 99);
    ctx.fill();
    ctx.stroke();

    // corde (gauche)
    ctx.beginPath();
    ctx.fillStyle = 'black';
    ctx.moveTo(ox + 210, oy + 120);
    ctx.lineTo(ox + 199, oy + 97);
    ctx.fill();
    ctx.stroke();

    // corde (droite)
    ctx.beginPath();
    ctx.fillStyle = 'black';
    ctx.moveTo(ox + 210, oy + 120);
    ctx.lineTo(ox + 219, oy + 97);
    ctx.fill();
    ctx.stroke();
  }


  /**
   * Dessine la forme spécifique à cette classe
   * @param ctx contexte 2D du canvas
   */
  
  draw(ctx) {
    ctx.save()
    this.montgolfiere(ctx, this.x, this.y)

    // restores the styles from earlier
    // preventing the colors used here
    // from polluting other drawings
    ctx.restore()
  }

  /**
   * get array of forms
   * @return {[Montgolfiere,...]}
   */
  static buildForms() {
    // create a new montgolfiere object using the Montgolfiere class
    let forms = []
    for (var i = 0; i <= ~~(Math.random() * 4); i++) {
      forms.push(new Montgolfiere(~~(Math.random() * 1040), ~~(Math.random() * 150) - 50, 100, 100, '', '', 1, false, 2))
    }

    console.log('nb de montgolfiere : ' + forms.length)

    // retourne un tableau d'objets de type Montgolfiere
    return forms
  }
}