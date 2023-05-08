import { AbstractForm } from './AbstractForm.js';

/**
 * Dessine un Requin
 */
export class Requin extends AbstractForm {
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
  
  requin(ctx, dx, dy) {
    let ox = dx
    let oy = dy
    var color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})` // Change les couleurs aléatoirement des requins

    ctx.beginPath();
    ctx.fillStyle = 'grey';
    ctx.ellipse(ox + 50, oy + 40, 100, 35, 0, 0, 2 * Math.PI);
    ctx.fill();

    // queue
    ctx.beginPath();
    ctx.fillStyle = 'grey';
    ctx.moveTo(ox + 150, oy + 40);
    ctx.quadraticCurveTo(ox + 190, oy - 15, ox + 230, oy + 40);
    ctx.quadraticCurveTo(ox + 190, oy + 95, ox + 150, oy + 40);
    ctx.fill();


    // œil
    ctx.beginPath();
    ctx.fillStyle = 'white';
    ctx.arc(ox + -30, oy + 30, 5, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.fillStyle = 'black';
    ctx.arc(ox + -30, oy + 30, 1.25, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();

    // aileron
    ctx.beginPath();
    ctx.fillStyle = 'grey';
    ctx.moveTo(ox + 10, oy + 8)
    ctx.lineTo(ox + 40, oy + -20)
    ctx.lineTo(ox + 90, oy + 8)
    ctx.fill();
  }

  /**
   * Dessine la forme spécifique à cette classe
   * @param ctx contexte 2D du canvas
   */

  draw(ctx) {
    ctx.save()
    this.requin(ctx, this.x, this.y)

    // restores the styles from earlier
    // preventing the colors used here
    // from polluting other drawings
    ctx.restore()
  }

  /**
   * get array of forms
   * @return {[Requin,...]}
   */
  static buildForms() {
    // create a new requin object using the Requin class
    let forms = []
    forms.push(new Requin(~~(Math.random() * 1040), ~~(Math.random() * 20) + 400, 100, 100, 'blue', 'black', 1, true, 4))

    console.log('nb de requin : ' + forms.length)

    // retourne un tableau d'objets de type Requin
    return forms
  }
}