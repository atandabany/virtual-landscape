import { AbstractForm } from './AbstractForm.js';

/**
 * Dessine un Poisson
 */
export class Poisson extends AbstractForm {
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
    super(x, y, width, height, fillColor, strokeColor, strokeWidth, pesenteur, ordreConstruction)
  }

  poisson(ctx, dx, dy) {
    let ox = dx
    let oy = dy
    var color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})` // Change les couleurs aléatoirement des poissons
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.moveTo(ox + 12.5, oy + 50);
    ctx.quadraticCurveTo(ox + 25, oy + 25, ox + 37.5, oy + 50);
    ctx.quadraticCurveTo(ox + 25, oy + 75, ox + 12.5, oy + 50);
    ctx.fill();

    // queue du poisson
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.moveTo(ox + 37.5, oy + 50);
    ctx.quadraticCurveTo(ox + 50, oy + 37.5, ox + 62.5, oy + 50);
    ctx.quadraticCurveTo(ox + 50, oy + 62.5, ox + 37.5, oy + 50);
    ctx.fill();

    // œil du poisson
    ctx.beginPath();
    ctx.fillStyle = 'white';
    ctx.arc(ox + 22.5, oy + 47.5, 2.5, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.fillStyle = 'black';
    ctx.arc(ox + 22.5, oy + 47.5, 1.25, 0, 2 * Math.PI);
    ctx.fill();
  }

  /**
   * Dessine la forme spécifique à cette classe
   * @param ctx contexte 2D du canvas
   */

  draw(ctx) {
    ctx.save()
    this.poisson(ctx, this.x, this.y)

    // restores the styles from earlier
    // preventing the colors used here
    // from polluting other drawings
    ctx.restore()
  }

  /**
   * get array of forms
   * @return {[Poisson,...]}
   */
  static buildForms() {
    // create a new poisson object using the Poisson class
    let forms = []
    for (var i = 0; i <= ~~(Math.random() * 50); i++) {
      forms.push(new Poisson(~~(Math.random() * 1200), ~~(Math.random() * 200) + 250, 100, 100, 'blue', 'black', 1, true, 5))
    }

    console.log('nb de poisson : ' + forms.length)

    // retourne un tableau d'objets de type Poisson
    return forms
  }
}