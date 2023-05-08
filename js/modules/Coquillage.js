import { AbstractForm } from './AbstractForm.js';

/**
 * Dessine un coquillage
 */
export class Coquillage extends AbstractForm {
  // add default values to avoid errors on empty arguments
  constructor(
    x = 0,
    y = 0,
    width = 0,
    height = 0,
    fillColor = '',
    strokeColor = '',
    strokeWidth = 2,
    pesenteur = true,
    ordreConstruction = 100
  ) {
    super(x, y, width, length, fillColor, strokeColor, strokeWidth, pesenteur, ordreConstruction)
  }

  coquillage(ctx, dx, dy) {
    let ox = dx
    let oy = dy
    let color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})` // Change les couleurs aléatoirement des coquillages
    
    // coquillage
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.moveTo(ox + 5.25, oy + 4);
    ctx.lineTo(ox + 0.25, oy + 7.125);
    ctx.lineTo(ox + 3.375, oy + 11.5);
    ctx.lineTo(ox + 7.125, oy + 11.5);
    ctx.lineTo(ox + 10.25, oy + 7.125);
    ctx.fill();
  }


  /**
   * Dessine la forme spécifique à cette classe
   * @param ctx contexte 2D du canvas
   */

  draw(ctx) {
    ctx.save()
    this.coquillage(ctx, this.x, this.y)

    // restores the styles from earlier
    // preventing the colors used here
    // from polluting other drawings
    ctx.restore()
  }

  /**
   * get array of forms
   * @return {[Coquillage,...]}
   */
  static buildForms() {
    // create a new coquillage object using the Coquillage class
    let forms = []
    for (let i = 0; i <= ~~(Math.random() * 300); i++) {
      forms.push(new Coquillage(~~(Math.random() * 1260), ~~(Math.random() * 10) + 500, 100, 100, 'blue', 'black', 1, true, 2))
    }

    console.log('nb de coquillage : ' + forms.length)

    // retourne un tableau d'objets de type Coquillage
    return forms
  }
}