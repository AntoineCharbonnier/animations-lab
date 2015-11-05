class Animation {

  constructor( _options ) { 
    this.container           = null
    this.goButton            = null
    this.upButton            = null
    this.rightButton         = null
    this.downButton          = null
    this.leftButton          = null
    
    this.timelineClick       = null
    this.timelineChooseUp    = null
    this.timelineChooseRight = null
    this.timelineChooseDown  = null
    this.timelineChooseLeft  = null
    
    this.gap                 = 100
    
    this.timeClick           = 0
    this.timeChooseUp        = 0
    this.timeChooseRight     = 0
    this.timeChooseDown      = 0
    this.timeChooseLeft      = 0

    this.init()
  }

  init() {
    this.container          = document.querySelector(".animation-container")
    this.goButton           = this.container.querySelector("#go svg")
    this.upButton           = this.container.querySelector("#up svg")
    this.rightButton        = this.container.querySelector("#right svg")
    this.downButton         = this.container.querySelector("#down svg")
    this.leftButton         = this.container.querySelector("#left svg")
    
    this.upButtonDIV        = this.container.querySelector("#up")
    this.rightButtonDIV     = this.container.querySelector("#right")
    this.downButtonDIV      = this.container.querySelector("#down")
    this.leftButtonDIV      = this.container.querySelector("#left")
    
    this.whiteButton        = this.container.querySelector("#white-layer svg")
    this.whiteButtonClicker = this.container.querySelector("#white-layer")
    this.blackButton        = this.container.querySelector("#black-layer svg")

    this.initSize()
    this.initTimelines()
    this.addListeners();

    this.animate();

  }

  initSize(){
    TweenMax.set( [this.upButton, this.rightButton, this.downButton, this.leftButton, this.whiteButton, this.blackButton], { scale: 0 } )
  }

  initTimelines(){
    this.initTimelineClick()
    this.initTimelineUp()
    this.initTimelineRight()
    this.initTimelineDown()
    this.initTimelineLeft()
  }

  initTimelineClick(){
    this.timelineClick = new TimelineMax( { paused: true } )
    this.addWhiteEffectTo(this.timelineClick, this.timeClick)
    
    this.timelineClick.to( this.blackButton, .6, { scale: 1, ease: Ease.easeIn}, this.timeClick+= 0.5 )
    this.timelineClick.to( this.goButton, .1, { fill: "none", stroke:"red", ease: Back.easeOut}, this.timeClick+= 0.6 )
    this.timelineClick.to( this.blackButton, 0, { autoAlpha: 0, ease: Ease.easeIn}, this.timeClick+= 0.1 )

    this.timelineClick.to( this.upButton, .3, {y: -this.gap, scale: 1, ease: Ease.easeIn}, this.timeClick+=.1 )
    this.timelineClick.to( this.rightButton, .3, {x: this.gap, scale: 1, ease: Ease.easeIn}, this.timeClick+=.1 )
    this.timelineClick.to( this.downButton, .3, {y: this.gap, scale: 1, ease: Ease.easeIn}, this.timeClick+=.1 )
    this.timelineClick.to( this.leftButton, .3, {x: -this.gap, scale: 1, ease: Ease.easeIn}, this.timeClick+=.1 )    
  }

  initTimelineUp(){


    this.timelineChooseUp = new TimelineMax( { paused: true } )
    this.addWhiteEffectTo(this.timelineChooseUp, this.timeChooseUp)

    this.timelineChooseUp.to( this.upButtonDIV, .1, { css: { zIndex: 10 } }, this.timeChooseUp+= 0.5 )
    this.timelineChooseUp.to( this.upButton,    .6, { bezier:{curviness:1.5, values:[{x:0, y:-this.gap}, {x:this.gap, y:0}, {x:0, y:0}]}, ease: Ease.easeIn}, this.timeChooseUp+=0 )
    this.timelineChooseUp.to( this.rightButton, .6, { bezier:{curviness:1.5,  values:[{x:this.gap, y:0}, {x:0, y:this.gap}, {x:-this.gap, y:0}, {x:0, y:-this.gap}, {x:this.gap, y:0}, {x: 0, y:0}]}, ease: Ease.easeIn}, this.timeChooseUp+=0 )
    this.timelineChooseUp.to( this.downButton,  .6, { bezier:{curviness:1.5,  values:[{x:0, y:this.gap}, {x:-this.gap, y:0}, {x:0, y:-this.gap}, {x:this.gap, y:0}, {x: 0, y:0}]}, ease: Ease.easeIn}, this.timeChooseUp+=0 )
    this.timelineChooseUp.to( this.leftButton,  .6, { bezier:{curviness:1.5,  values:[{x:-this.gap, y:0}, {x:0, y:-this.gap}, {x:this.gap, y:0}, {x: 0, y:0}]}, ease: Ease.easeIn}, this.timeChooseUp+=0 )
    this.timelineChooseUp.to( this.goButton, .8, { stroke: "green", ease: Ease.easeIn}, this.timeChooseUp+= 0.5 )
  }

  initTimelineRight(){
    this.timelineChooseRight = new TimelineMax( { paused: true } )
    this.addWhiteEffectTo(this.timelineChooseRight, this.timeChooseRight)
    this.timelineChooseRight.to( this.rightButtonDIV, .1, { css: { zIndex: 10 } }, this.timeChooseRight+=0.5 )
    this.timelineChooseRight.to( this.rightButton,  .6, { bezier:{curviness:1.5,  values:[{x:this.gap, y:0}, {x:0, y:this.gap}, {x:-this.gap, y:0}, {x:0, y:-this.gap}, {x: this.gap, y:0}, {x:0, y:0}]}, ease: Ease.easeIn}, this.timeChooseRight+=0 )
    this.timelineChooseRight.to( this.downButton,  .6, { bezier:{curviness:1.5,  values:[{x:0, y:this.gap}, {x:-this.gap, y:0}, {x:0, y:-this.gap}, {x: this.gap, y:0}, {x:0, y:0}]}, ease: Ease.easeIn}, this.timeChooseRight+=0 )
    this.timelineChooseRight.to( this.leftButton, .6, { bezier:{curviness:1.5,  values:[{x:-this.gap, y:0}, {x:0, y:-this.gap}, {x:this.gap, y:0}, {x: 0, y:0}]}, ease: Ease.easeIn}, this.timeChooseRight+=0 )
    this.timelineChooseRight.to( this.upButton,    .6, { bezier:{curviness:1.5, values:[{x:0, y:-this.gap}, {x:this.gap, y:0}, {x:0, y:0}]}, ease: Ease.easeIn}, this.timeChooseRight+=0 )
    this.timelineChooseRight.to( this.goButton, .8, { stroke: "yellow", ease: Ease.easeIn}, this.timeChooseRight+= 0.5 )
  }

  initTimelineDown(){
    this.timelineChooseDown = new TimelineMax( { paused: true } )
    this.addWhiteEffectTo(this.timelineChooseDown, this.timeChooseDown)
    this.timelineChooseDown.to( this.downButtonDIV, .1, { css: { zIndex: 10 } }, this.timeChooseDown+=0.5 )
    this.timelineChooseDown.to( this.downButton,  .6, { bezier:{curviness:1.5,  values:[{x:0, y:this.gap}, {x:-this.gap, y:0}, {x:0, y:-this.gap}, {x: this.gap, y:0}, {x:0, y:0}]}, ease: Ease.easeIn}, this.timeChooseDown+=0 )
    this.timelineChooseDown.to( this.leftButton, .6, { bezier:{curviness:1.5,  values:[{x:-this.gap, y:0}, {x:0, y:-this.gap}, {x:this.gap, y:0}, {x: 0, y:0}]}, ease: Ease.easeIn}, this.timeChooseDown+=0 )
    this.timelineChooseDown.to( this.upButton,    .6, { bezier:{curviness:1.5, values:[{x:0, y:-this.gap}, {x:this.gap, y:0}, {x:0, y:0}]}, ease: Ease.easeIn}, this.timeChooseDown+=0 )
    this.timelineChooseDown.to( this.rightButton,  .6, { bezier:{curviness:1.5,  values:[{x:this.gap, y:0}, {x:0, y:this.gap}, {x:-this.gap, y:0}, {x:0, y:-this.gap}, {x: this.gap, y:0}, {x:0, y:0}]}, ease: Ease.easeIn}, this.timeChooseDown+=0 )
    this.timelineChooseDown.to( this.goButton, .8, { stroke: "blue", ease: Ease.easeIn}, this.timeChooseDown+= 0.5 )
  }

  initTimelineLeft(){
    this.timelineChooseLeft = new TimelineMax( { paused: true } )
    this.addWhiteEffectTo(this.timelineChooseLeft, this.timeChooseLeft)
    this.timelineChooseLeft.to( this.leftButtonDIV, .1, { css: { zIndex: 10 } }, this.timeChooseLeft+=0.5 )
    this.timelineChooseLeft.to( this.leftButton, .6, { bezier:{curviness:1.5,  values:[{x:-this.gap, y:0}, {x:0, y:-this.gap}, {x:this.gap, y:0}, {x: 0, y:0}]}, ease: Ease.easeIn}, this.timeChooseLeft+=0 )
    this.timelineChooseLeft.to( this.upButton,    .6, { bezier:{curviness:1.5, values:[{x:0, y:-this.gap}, {x:this.gap, y:0}, {x:0, y:0}]}, ease: Ease.easeIn}, this.timeChooseLeft+=0 )
    this.timelineChooseLeft.to( this.rightButton,  .6, { bezier:{curviness:1.5,  values:[{x:this.gap, y:0}, {x:0, y:this.gap}, {x:-this.gap, y:0}, {x:0, y:-this.gap}, {x: this.gap, y:0}, {x:0, y:0}]}, ease: Ease.easeIn}, this.timeChooseLeft+=0 )
    this.timelineChooseLeft.to( this.downButton,  .6, { bezier:{curviness:1.5,  values:[{x:0, y:this.gap}, {x:-this.gap, y:0}, {x:0, y:-this.gap}, {x: this.gap, y:0}, {x:0, y:0}]}, ease: Ease.easeIn}, this.timeChooseLeft+=0 )
    this.timelineChooseLeft.to( this.goButton, .8, { stroke: "wheat", ease: Ease.easeIn}, this.timeChooseLeft+= 0.5 )    
  }

  addWhiteEffectTo(timeline, timer){
    timeline.to( this.whiteButton, .2, { scale: 1, ease: Ease.easeIn}, timer )
    timeline.to( this.whiteButton, .2, { fill: "none", scale: 1.3, ease: Back.easeOut}, timer+= 0.2 )
    timeline.to( this.whiteButton, .05, { autoAlpha: 0, ease: Ease.easeIn}, timer+= 0.05 )
    timer = 1
  }

  timelineClickPlay(e){
    console.log("click")
    this.timelineClick.play()
  }

  timelineChooseUpPlay(e){
    TweenMax.set( this.whiteButton, {fill: "white", x: 0, y: -this.gap, scale: 0, autoAlpha: 1} )
    this.timelineChooseUp.play()
  }

  timelineChooseRightPlay(e){
    TweenMax.set( this.whiteButton, {fill: "white", x: this.gap, y: 0, scale: 0, autoAlpha: 1} )
    this.timelineChooseRight.play()
  }

  timelineChooseLeftPlay(e){
    TweenMax.set( this.whiteButton, {fill: "white", x: -this.gap, y: 0, scale: 0, autoAlpha: 1} )
    this.timelineChooseLeft.play()
  }

  timelineChooseDownPlay(e){
    TweenMax.set( this.whiteButton, {fill: "white", x: 0, y: this.gap, scale: 0, autoAlpha: 1} )
    this.timelineChooseDown.play()
  }

  animate( ts ) {
  }


  addListeners() {
    this.whiteButtonClicker.addEventListener("click", this.timelineClickPlay.bind(this), false)
    this.rightButton.addEventListener("click", this.timelineChooseRightPlay.bind(this), false)
    this.upButton.addEventListener("click", this.timelineChooseUpPlay.bind(this), false)
    this.leftButton.addEventListener("click", this.timelineChooseLeftPlay.bind(this), false)
    this.downButton.addEventListener("click", this.timelineChooseDownPlay.bind(this), false)
  }

}

export { Animation };