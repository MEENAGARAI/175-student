var A = ["H", "Li", "Na", "K"];
var B = ["F", "Cl", "Br", "I"];

var elementsArray = [];

AFRAME.registerComponent("markerhandler", {
    init: async function() {
        
        var compounds = await this.getCompounds();

        this.el.addEventListener("markerFound", () => {
            

        });

        this.el.addEventListener("markerLost", () => {
            
            
        });
    },


    tick: function() {
        if (elementsArray.length > 1) {

            

        }
    },
    //Calculate distance between two position markers
    getDistance: function(elA, elB) {
        return elA.object3D.position.distanceTo(elB.object3D.position);
    },

    getCompoundDetails: function() {
        
    },
    showCompound: function(compound) {
        
    },
    getCompounds: function() {
        // NOTE: Use ngrok server to get json values
        return fetch("js/compoundList.json")
            .then(res => res.json())
            .then(data => data);
    },
});