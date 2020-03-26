import Controller from '@ember/controller';
import {computed} from '@ember/object';
export default Controller.extend({    
    heightWithUnits:computed('model.height',function()
    {
        let heightInDecimeter=this.model.height;
        let heightInMeter=heightInDecimeter/10;
        if(heightInMeter==1)
        {
            return `${heightInMeter} meter`;
        }
        else{
            return `${heightInMeter} meters`;
        }  
    }),
    weightWithUnits:computed('model.weight',function()
    {
        let weightInHectogram=this.model.weight;
        let weightInKilogram=weightInHectogram/10;
        if(weightInHectogram==1)
        {
            return `${weightInKilogram} kg`;
        }
        else{
            return `${weightInKilogram} kgs`;
        }  
    }),
    toggle:function()
    {
        this.set('props',this.model.props);   
        this.toggleProperty('isShowingResult'); 
        
    },
});