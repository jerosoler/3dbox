class THREEDBox {

    static get inputProperties () {
      return [
        `--threedbox-angle-vertical`,
        `--threedbox-angle-horitzontal`,
        `--threedbox-padding`,
        `--threedbox-color`,
        `--threedbox-color-back`,
        `--threedbox-color-border`,
        
      ];
    } 
    static get inputArguments() { return ['<length>']; }

    

    paint(ctx, size, props) {
      let DBOX_ANGLE_VERTICAL = parseInt(props.get(`--threedbox-angle-vertical`));
      let DBOX_ANGLE_HORITZONTAL = parseInt(props.get(`--threedbox-angle-horitzontal`));
      const DBOX_PADDING = parseInt(props.get(`--threedbox-padding`));
      const DBOX_COLOR = props.get(`--threedbox-color`).toString().trim(); 
      const DBOX_COLOR_BACK = props.get(`--threedbox-color-back`).toString().trim(); 
      const DBOX_COLOR_BORDER = props.get(`--threedbox-color-border`).toString().trim(); 

      ctx.lineWidth = 1;

      /* CUBE FRONT */
      ctx.beginPath();
      ctx.strokeStyle = DBOX_COLOR_BORDER;
      ctx.moveTo(DBOX_PADDING,DBOX_PADDING);
      ctx.lineTo(size.width-DBOX_PADDING, DBOX_PADDING);
      ctx.lineTo(size.width-DBOX_PADDING, size.height-DBOX_PADDING);
      ctx.lineTo(DBOX_PADDING,size.height-DBOX_PADDING);
      ctx.lineTo(DBOX_PADDING,DBOX_PADDING);
      ctx.fillStyle = DBOX_COLOR;
      ctx.fill();
      ctx.stroke();


      if(DBOX_ANGLE_HORITZONTAL !== 0 || DBOX_ANGLE_VERTICAL !== 0) {
        if(DBOX_ANGLE_HORITZONTAL >= DBOX_PADDING) {
          DBOX_ANGLE_HORITZONTAL = DBOX_PADDING-1;
        }
        if(DBOX_ANGLE_VERTICAL >= DBOX_PADDING) {
          DBOX_ANGLE_VERTICAL = DBOX_PADDING-1;
        }
        if(DBOX_ANGLE_HORITZONTAL <= DBOX_PADDING*-1) {
          DBOX_ANGLE_HORITZONTAL = DBOX_PADDING*-1+1;
        }
        if(DBOX_ANGLE_VERTICAL <= DBOX_PADDING*-1) {
          DBOX_ANGLE_VERTICAL = DBOX_PADDING*-1+1;
        }
        /* POINT CENTER */
        //ctx.fillStyle = '#FF0000';
        //ctx.fillRect(size.width/2, size.height/2,1,1); 
        
        /* POINT OF ANGLE */
        //ctx.fillStyle = '#1100fc';
        //ctx.fillRect(size.width/2+DBOX_ANGLE_HORITZONTAL, size.height/2+DBOX_ANGLE_VERTICAL,1,1); 

        
        if(DBOX_ANGLE_HORITZONTAL < 0) {
          /* CUBE RIGHT */
          ctx.beginPath();
          ctx.strokeStyle = DBOX_COLOR_BORDER;
          ctx.fillStyle = DBOX_COLOR_BACK;
          ctx.moveTo(size.width - DBOX_PADDING,DBOX_PADDING);
          ctx.lineTo(size.width - DBOX_PADDING - DBOX_ANGLE_HORITZONTAL, DBOX_PADDING - DBOX_ANGLE_VERTICAL);
          ctx.lineTo(size.width - DBOX_PADDING - DBOX_ANGLE_HORITZONTAL, size.height - DBOX_PADDING - DBOX_ANGLE_VERTICAL);
          ctx.lineTo(size.width - DBOX_PADDING,size.height - DBOX_PADDING)
          ctx.fill();
          ctx.stroke();

        } else {
          /* CUBE LEFT */ 
          ctx.beginPath();
          ctx.strokeStyle = DBOX_COLOR_BORDER;
          ctx.fillStyle = DBOX_COLOR_BACK;
          ctx.moveTo(DBOX_PADDING,DBOX_PADDING);
          ctx.lineTo(DBOX_PADDING - DBOX_ANGLE_HORITZONTAL, DBOX_PADDING - DBOX_ANGLE_VERTICAL);
          ctx.lineTo(DBOX_PADDING - DBOX_ANGLE_HORITZONTAL, size.height - DBOX_PADDING - DBOX_ANGLE_VERTICAL);
          ctx.lineTo(DBOX_PADDING,size.height - DBOX_PADDING)
          ctx.fill();
          ctx.stroke();
          

        }

        if(DBOX_ANGLE_VERTICAL > 0) {
          /* CUBE UP */
          ctx.beginPath();
          ctx.strokeStyle = DBOX_COLOR_BORDER;
          ctx.fillStyle = DBOX_COLOR_BACK;
          ctx.moveTo(DBOX_PADDING,DBOX_PADDING);
          ctx.lineTo(DBOX_PADDING - DBOX_ANGLE_HORITZONTAL, DBOX_PADDING - DBOX_ANGLE_VERTICAL);
          ctx.lineTo(size.width-DBOX_PADDING - DBOX_ANGLE_HORITZONTAL, DBOX_PADDING - DBOX_ANGLE_VERTICAL);
          ctx.lineTo(size.width-DBOX_PADDING, DBOX_PADDING);
          ctx.fill();
          ctx.stroke();

        } else {
          /* CUBE DOWN */ 
          ctx.beginPath();
          ctx.strokeStyle = DBOX_COLOR_BORDER;
          ctx.fillStyle = DBOX_COLOR_BACK;
          ctx.moveTo(DBOX_PADDING,size.height - DBOX_PADDING);
          ctx.lineTo(DBOX_PADDING - DBOX_ANGLE_HORITZONTAL,size.height -  DBOX_PADDING - DBOX_ANGLE_VERTICAL);
          ctx.lineTo(size.width-DBOX_PADDING - DBOX_ANGLE_HORITZONTAL,size.height -  DBOX_PADDING - DBOX_ANGLE_VERTICAL);
          ctx.lineTo(size.width-DBOX_PADDING,size.height -  DBOX_PADDING);
          ctx.fill();
          ctx.stroke();
          
        }

        
      }
    }
  }
  
  registerPaint('threedbox', THREEDBox);