import Route from '@ember/routing/route';
export default Route.extend({
    async  model(params)
    {
        this.set('order',params.order);
        let response = await fetch("https://api.myjson.com/bins/8kfis");
        let result=await response.json();
        return result.results;  
    },
});
