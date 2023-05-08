import { AbstractForm } from './AbstractForm.js';

/**
 * Dessine une algue
*/
export class Algue extends AbstractForm {
  // add default values to avoid errors on empty arguments
  constructor(
    x = 0,
    y = 0,
    length = 0,
    width = 5,
    fillColor = '#3FAC35',
    strokeColor = '',
    strokeWidth = 0,
    pesanteur = true,
    ordreConstruction = 100
  ) {
    super(x, y, width, length, fillColor, strokeColor, strokeWidth, pesanteur, ordreConstruction)
  }

  algue(ctx) {

    // définit le style de la forme
    ctx.fillStyle = this.fillColor;
    ctx.strokeStyle = this.strokeColor;
    ctx.lineWidth = this.strokeWidth;

    ctx.beginPath();
    ctx.moveTo(this.x, this.y);

    // courbes de l'algue
    let curveOffset = 10;
    let curveHeight = 20;
    let curveWidth = 40;
    let curveCount = this.height / curveHeight;

    for (let i = 1; i <= curveCount; i++) {
      ctx.bezierCurveTo(
        this.x - curveWidth,
        this.y + (i - 1) * curveHeight + curveOffset,
        this.x + curveWidth,
        this.y + i * curveHeight - curveOffset,
        this.x,
        this.y + i * curveHeight
      );
    }

    // Ferme la forme et dessine les contours
    ctx.lineTo(this.x, this.y + this.height);
    ctx.closePath();
    ctx.fill();

  }

  /**
   * Dessine la forme spécifique à cette classe
   * @param ctx contexte 2D du canvas
   */

  draw(ctx) {
    ctx.save()
    this.algue(ctx, this.x, this.y)

    // restores the styles from earlier
    // preventing the colors used here
    // from polluting other drawings
    ctx.restore()
  }

  /**
   * get array of forms
   *   @return {[Algue,...]}
   */
  static buildForms() {
    // create a new algue object using the Algue class
    let forms = [];
    for (let i = 0; i <= ~~(Math.random() * 10); i++) {
      forms.push(new Algue(~~(Math.random() * 1260), 410, 100, 5, '#3FAC35', '', 0, true, 5));
      forms.push(new Algue(~~(Math.random() * 1260), 370, 150, 5, '#3FAC35', '', 0, true, 2));
    }

    console.log('nb algue : ' + forms.length)

    // retourne un tableau d'objets de type Algue
    return forms;
  }
}