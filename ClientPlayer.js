//TODO: ADD HEADER
//TODO: Implement Player functions
var ClientPlayer= function (x, y, texture_location, id, isServer) {
    GameObject.call(this);
    this.AddPhysicsComponent(x, y, new CircleBodyData(40), texture_location);

    //set these values so we don't rotate as we collide with stuff
    this.physicsComponent.inertia = Infinity;
    this.physicsComponent.inverseInertia = 0;
    this.oldX=x;
    this.oldY=y;
    this.newX;
    this.newY;
    this.id = id; //may need id for plaryer AND game
    this.gameid;
    this.item;
    //TODO IMPLEMENT
    this.hp;
    this.type = "player";
}

ClientPlayer.prototype = GameObject.prototype;
ClientPlayer.prototype.contructor = ClientPlayer;

ClientPlayer.prototype.attack = function(){
  this.item = new Item(this.x,this.y,100,100,100);
};

ClientPlayer.prototype.stopAttack = function(){
  this.item = null ;
};

ClientPlayer.prototype.onCollisionEnter = function (other) {
    if (other.type== "player") {
        console.log("I hit other player!!");
        //GameObjManager.remove(other);
        this.scalebodyandsprite(0.95, 0.95);
	console.log("SCALE DOWN");
    }       
};

ClientPlayer.prototype.scalebodyandsprite = function (scaleFactor) {
  Matter.Body.scale(this.physicsComponent, scaleFactor, scaleFactor);
  this.physicsComponent.circleRadius *= scaleFactor;
};
