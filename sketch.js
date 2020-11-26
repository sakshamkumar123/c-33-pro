var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
var particle
var c = 0
var c2 = 0
var c3 = 0
var c4 = 0
var c5 = 0
var chance = 0 
var particles = [];
var plinkos = [];
var divisions  = []
var cooldown = 1
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width*4,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

   p1 =  new Particle(900, 760,10,10)
   p2 =  new Particle(900, 760,10,10)
   p3 =  new Particle(900, 760,10,10)
   p4 =  new Particle(900, 760,10,10)
   p5 =  new Particle(900, 760,10,10)

    
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  text("chances : "+chance,690,30);
  text("50",30,550);
  text("100",100,550);
  text("200",180,550);
  text("100",260,550);
  text("50",340,550);
  text("50",420,550);
  text("100",500,550);
  text("200",590,550);
  text("100",670,550);
  text("50",750,550);
  Engine.update(engine);


  
  //console.log(particles)
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  
   
   for (var k = 0; k < divisions.length; k++) {
     
    divisions[k].display();
  }

  

       

        p1.display()
        p2.display()
        p3.display()
        p4.display()
        p5.display()

        if (chance === 5  && p5.body.position.y>700 ){
          textSize(50)
          text("GAME OVER",270,450)
        }
        
        if (p2.body.position.y >760 && p2.body.position.x<80 && c2===0){
          score=score+50
          c2=150
        }
        if (p2.body.position.y >760 && p2.body.position.x>80 && p2.body.position.x<160 && c2===0){
          score=score+100
          c2=150
        }
        if (p2.body.position.y >760 && p2.body.position.x>160 && p2.body.position.x<240 && c2===0){
          score=score+200
          c2=150
        }
        if (p2.body.position.y >760 && p2.body.position.x>240 && p2.body.position.x<320 && c2===0){
          score=score+100
          c2=150
        }
        if (p2.body.position.y >760 && p2.body.position.x>320 && p2.body.position.x<400 && c2===0){
          score=score+50
          c2=150
        }
        if (p2.body.position.y >760 && p2.body.position.x>400 && p2.body.position.x< 480  && c2===0){
          score=score+50
          c2=150
        }
        if (p2.body.position.y >760 && p2.body.position.x>480 && p2.body.position.x<560 && c2===0){
          score=score+100
          c2=150
        }
        if (p2.body.position.y >760 && p2.body.position.x>560 && p2.body.position.x<640 && c2===0){
          score=score+200
          c2=150
        }
        if (p2.body.position.y >760 && p2.body.position.x>640 && p2.body.position.x<720 && c2===0){
          score=score+100
          c2=150
        }
        if (p2.body.position.y >760 && p2.body.position.x>720 && p2.body.position.x<800 && c2===0){
          score=score+50
          c2=150
        }




        if (p3.body.position.y >760 && p3.body.position.x<80 && c3===0){
          score=score+50
          c3=150
        }
        if (p3.body.position.y >760 && p3.body.position.x>80 && p3.body.position.x<160 && c3===0){
          score=score+100
          c3=150
        }
        if (p3.body.position.y >760 && p3.body.position.x>160 && p3.body.position.x<240 && c3===0){
          score=score+200
          c3=150
        }
        if (p3.body.position.y >760 && p3.body.position.x>240 && p3.body.position.x<320 && c3===0){
          score=score+100
          c3=150
        }
        if (p3.body.position.y >760 && p3.body.position.x>320 && p3.body.position.x<400 && c3===0){
          score=score+50
          c3=150
        }
        if (p3.body.position.y >760 && p3.body.position.x>400 && p3.body.position.x< 480  && c3===0){
          score=score+50
          c3=150
        }
        if (p3.body.position.y >760 && p3.body.position.x>480 && p3.body.position.x<560 && c3===0){
          score=score+100
          c3=150
        }
        if (p3.body.position.y >760 && p3.body.position.x>560 && p3.body.position.x<640 && c3===0){
          score=score+200
          c3=150
        }
        if (p3.body.position.y >760 && p3.body.position.x>640 && p3.body.position.x<720 && c3===0){
          score=score+100
          c3=150
        }
        if (p3.body.position.y >760 && p3.body.position.x>720 && p3.body.position.x<800 && c3===0){
          score=score+50
          c3=150
        }




        if (p4.body.position.y >760 && p4.body.position.x<80 && c4===0){
          score=score+50
          c4=150
        }
        if (p4.body.position.y >760 && p4.body.position.x>80 && p4.body.position.x<160 && c4===0){
          score=score+100
          c4=150
        }
        if (p4.body.position.y >760 && p4.body.position.x>160 && p4.body.position.x<240 && c4===0){
          score=score+200
          c4=150
        }
        if (p4.body.position.y >760 && p4.body.position.x>240 && p4.body.position.x<320 && c4===0){
          score=score+100
          c4=150
        }
        if (p4.body.position.y >760 && p4.body.position.x>320 && p4.body.position.x<400 && c4===0){
          score=score+50
          c4=150
        }
        if (p4.body.position.y >760 && p4.body.position.x>400 && p4.body.position.x< 480  && c4===0){
          score=score+50
          c4=150
        }
        if (p4.body.position.y >760 && p4.body.position.x>480 && p4.body.position.x<560 && c4===0){
          score=score+100
          c4=150
        }
        if (p4.body.position.y >760 && p4.body.position.x>560 && p4.body.position.x<640 && c4===0){
          score=score+200
          c4=150
        }
        if (p4.body.position.y >760 && p4.body.position.x>640 && p4.body.position.x<720 && c4===0){
          score=score+100
          c4=150
        }
        if (p4.body.position.y >760 && p4.body.position.x>720 && p4.body.position.x<800 && c4===0){
          score=score+50
          c4=150
        }




        if (p5.body.position.y >760 && p5.body.position.x<80 && c===0){
          score=score+50
          c=150
        }
        if (p5.body.position.y >760 && p5.body.position.x>80 && p5.body.position.x<160 && c5===0){
          score=score+100
          c5=150
        }
        if (p5.body.position.y >760 && p5.body.position.x>160 && p5.body.position.x<240 && c5===0){
          score=score+200
          c5=150
        }
        if (p5.body.position.y >760 && p5.body.position.x>240 && p5.body.position.x<320 && c5===0){
          score=score+100
          c5=150
        }
        if (p5.body.position.y >760 && p5.body.position.x>320 && p5.body.position.x<400 && c5===0){
          score=score+50
          c5=150
        }
        if (p5.body.position.y >760 && p5.body.position.x>400 && p5.body.position.x< 480  && c5===0){
          score=score+50
          c5=150
        }
        if (p5.body.position.y >760 && p5.body.position.x>480 && p5.body.position.x<560 && c5===0){
          score=score+100
          c5=150
        }
        if (p5.body.position.y >760 && p5.body.position.x>560 && p5.body.position.x<640 && c5===0){
          score=score+200
          c5=150
        }
        if (p5.body.position.y >760 && p5.body.position.x>640 && p5.body.position.x<720 && c5===0){
          score=score+100
          c5=150
        }
        if (p5.body.position.y >760 && p5.body.position.x>720 && p5.body.position.x<800 && c5===0){
          score=score+50
          c5=150
        }



        if (p1.body.position.y >760 && p1.body.position.x<80 && c===0){
          score=score+50
          c=150
        }
        if (p1.body.position.y >760 && p1.body.position.x>80 && p1.body.position.x<160 && c===0){
          score=score+100
          c=150
        }
        if (p1.body.position.y >760 && p1.body.position.x>160 && p1.body.position.x<240 && c===0){
          score=score+200
          c=150
        }
        if (p1.body.position.y >760 && p1.body.position.x>240 && p1.body.position.x<320 && c===0){
          score=score+100
          c=150
        }
        if (p1.body.position.y >760 && p1.body.position.x>320 && p1.body.position.x<400 && c===0){
          score=score+50
          c=150
        }
        if (p1.body.position.y >760 && p1.body.position.x>400 && p1.body.position.x< 480  && c===0){
          score=score+50
          c=150
        }
        if (p1.body.position.y >760 && p1.body.position.x>480 && p1.body.position.x<560 && c===0){
          score=score+100
          c=150
        }
        if (p1.body.position.y >760 && p1.body.position.x>560 && p1.body.position.x<640 && c===0){
          score=score+200
          c=150
        }
        if (p1.body.position.y >760 && p1.body.position.x>640 && p1.body.position.x<720 && c===0){
          score=score+100
          c=150
        }
        if (p1.body.position.y >760 && p1.body.position.x>720 && p1.body.position.x<800 && c===0){
          score=score+50
          c=150
        }
        

          
        }
        

      function mousePressed(){
       
        if ( chance === 0 ){
          chance=chance+1
  
          Matter.Body.setPosition(p1.body,{x:mouseX,y:10})
  
  
         }
         if ( chance === 1  && p1.body.position.y>760 ){
          chance=chance+1
  
          Matter.Body.setPosition(p2.body,{x:mouseX,y:10})
  
  
         }
         if ( chance === 2 && p2.body.position.y>760){
          chance=chance+1
  
          Matter.Body.setPosition(p3.body,{x:mouseX,y:10})
  
  
         }
         if ( chance === 3  && p3.body.position.y>760){
          chance=chance+1
  
          Matter.Body.setPosition(p4.body,{x:mouseX,y:10})
  
  
         }
         if ( chance === 4 && p4.body.position.y>760 ){
          chance=chance+1
  
          Matter.Body.setPosition(p5.body,{x:mouseX,y:10})
  
  
         }
      }
    
     
  



 