Polymer({
    is: 'burger-cross',
    properties: {
        crossColor: String,
        burgerColor: String,
        transitionSpeed: String,
        containerDimension: String,
        containerColor: String,
        isOpen: {
            type: Boolean,
            value: false
        },
        openClassName: {
            type: String,
            value: "open"
        }
    },
    ready: function(){
        this.bindStyles();
        this.initializeOpenState(this.getIconElement());
        this.attachClickHandler(this.getIconElement());
    },
    bindStyles: function(){
        var styles = {
            "--cross-color": this.crossColor,
            "--burger-color": this.burgerColor,
            "--transition-speed": this.transitionSpeed,
            "--container-dimension": this.containerDimension,
            "--container-color": this.containerColor
        };

        for (var property in styles){
            this.customStyle[property] = styles[property];
        }
    },
    attachClickHandler: function(iconElement){
        this.getContainerElement()
            .addEventListener("click", this.toggleOpen.bind(this, iconElement));
    },
    getIconElement: function(){
        return document.getElementById("icon");
    },
    getContainerElement: function(){
        return document.getElementById("container");
    },
    initializeOpenState: function(iconElement){
        if (this.isOpen){
            iconElement.className = this.openClassName;
        }
    },
    toggleOpen: function(iconElement){
        var classString = iconElement.className;
        var openIndex = classString.indexOf(this.openClassName);

        if (!this.isOpen){
            classString += " " + this.openClassName;
            this.isOpen = true;
        } else {
            classString = classString.substr(0, openIndex) + classString.substr(openIndex + this.openClassName.length);
            this.isOpen = false;
        }
        iconElement.className = classString.trim();

        this.triggerChangeEvent();
    },
    triggerChangeEvent: function(){
        this.fire("burgerCross", {
            isOpen: this.isOpen
        });
    }
});

