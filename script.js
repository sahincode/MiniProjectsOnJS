const canvas = document.getElementById('canvas');
const facecolor=document.getElementById('face-color');
const bordercolor=document.getElementById('border-color');
const linecolor=document.getElementById('line-color');
const largehandcolor=document.getElementById('large-hand-color');
const secondhandcolor=document.getElementById('second-hand-color');




function clock() {
    const now = new Date();
    
    const ctx = canvas.getContext('2d');
  
    // Setup canvas
    ctx.save(); // save the default state
    ctx.clearRect(0, 0, 500, 500);
    ctx.translate(250, 250); // Put 0,0 in the middle
    ctx.rotate(-Math.PI / 2); // Rotate clock -90deg
     
    
    // Set default styles
    ctx.strokeStyle = '#fff345';
    ctx.fillStyle = '#fff456';
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
   
  
    // Draw clock face/border
    ctx.save();
    ctx.beginPath();

    ctx.lineWidth = 14;
    ctx.strokeStyle = bordercolor.value;
    ctx.fillStyle=facecolor.value;
    ctx.arc(0, 0, 142, 0, Math.PI * 2, true);
    ctx.stroke();
    ctx.fill();
    ctx.restore();
    ctx.save();
    ctx.strokeStyle=linecolor.value;
    for(let i=0 ;i<12; i++){
        
        ctx.beginPath();
        ctx.rotate(Math.PI/6);
        ctx.moveTo(100,0);
        ctx.lineTo(120,0);
        ctx.stroke();

    }
    ctx.restore();
    ctx.save();
    ctx.lineWidth=4;
    ctx.strokeStyle=linecolor.value;
    for(let i=0 ;i<60; i++){
        
       if(i%5!=0){
        ctx.beginPath();
        
        ctx.moveTo(116,0);
        ctx.lineTo(120,0);
        ctx.stroke();
       }
       ctx.rotate(Math.PI/30);

    }
  
    // Draw hour lines
   
    ctx.restore();
    const hr =(now.getHours()) % 12;
    const min=now.getMinutes();
    const secd= now.getSeconds();
    
    ctx.save();
    ctx.rotate((Math.PI/6)*hr+(Math.PI/360)*min+(Math.PI/21600)*secd);
    ctx.strokeStyle=largehandcolor.value;
    ctx.lineWidth=14;
    ctx.beginPath();
    ctx.moveTo(-20,0);
    ctx.lineTo(70,0);
    ctx.stroke();
   
    
    ctx.restore();
    ctx.save();
    ctx.rotate((Math.PI/30)*min+(Math.PI/1800)*secd);
    ctx.strokeStyle=largehandcolor.value;
    ctx.lineWidth=10;
    ctx.beginPath();
    ctx.moveTo(-28,0);
    ctx.lineTo(112,0);
    ctx.stroke();
   
    ctx.restore();
    ctx.save();
    ctx.rotate((Math.PI/30)*secd);
    ctx.strokeStyle=secondhandcolor.value;
    ctx.fillStyle=secondhandcolor.value;
    ctx.lineWidth=7;
    ctx.beginPath();
    ctx.moveTo(-28,0);
    ctx.lineTo(115,0);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, 0, 10, 0, Math.PI * 2, true);
  
    ctx.fill();
   
    ctx.restore();
    ctx.restore();
    

   requestAnimationFrame(clock);
  }
  requestAnimationFrame(clock);
  document.getElementById('save-btn').addEventListener("click" ,()=>{
    const dataurl=canvas.toDataURL('image/png');
    const link=document.createElement('a');
    link.download='clock.png';
    link.href=dataurl;
     link.click();


  });
  