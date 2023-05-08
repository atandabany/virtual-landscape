import { AbstractForm } from './AbstractForm.js';

/**
 * Dessine un Meduse
 */
export class Meduse extends AbstractForm {
  // add default values to avoid errors on empty arguments
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

  // corps meduse
  meduse(ctx, dx, dy) {
    let ox = dx;
    let oy = dy;
    ctx.beginPath();
    ctx.arc(ox + 100, oy + 50, 10, 0, Math.PI, 2 * Math.PI, false);
    ctx.fillStyle = '#FF88E0';
    ctx.fill();

    // tentacule 1
    ctx.beginPath();
    ctx.moveTo(ox + 97, oy + 50);
    ctx.lineTo(ox + 97, oy + 53);
    ctx.lineTo(ox + 93, oy + 56);
    ctx.lineTo(ox + 92, oy + 60);
    ctx.strokeStyle = '#FF88E0';
    ctx.stroke();

    // tentacule 2
    ctx.beginPath();
    ctx.moveTo(ox + 103, oy + 50);
    ctx.lineTo(ox + 103, oy + 53);
    ctx.lineTo(ox + 99, oy + 56);
    ctx.lineTo(ox + 98, oy + 60);
    ctx.strokeStyle = '#FF88E0';
    ctx.stroke();
  }

  /**
   * Dessine la forme spécifique à cette classe
   * @param ctx contexte 2D du canvas
   */
  
  draw(ctx) {
    ctx.save();
    this.meduse(ctx, this.x, this.y);

    // restores the styles from earlier
    // preventing the colors used here
    // from polluting other drawings
    ctx.restore();
  }

  /**
   * get array of forms
   * @return {[Meduse,...]}
   */
  static buildForms() {
    // create a new meduse object using the Meduse class
    let forms = [];
    for (let i = 0; i <= ~~(Math.random() * 15); i++) {
      forms.push(new Meduse(~~(Math.random() * 1165), ~~(Math.random() * 100) + 220, 50, 100, '', '', 1, true, 5));
      forms.push(new Meduse(~~(Math.random() * 1165), ~~(Math.random() * 100) + 220, 50, 100, '', '', 1, true, 5));
    }

    console.log('nb de meduse : ' + forms.length);

    // retourne un tableau d'objets de type Meduse
    return forms;
  }
}