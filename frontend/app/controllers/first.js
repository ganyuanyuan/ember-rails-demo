import Controller from '@ember/controller';

export default Controller.extend({
  actions:{
    onInputChange(param){
      return this.store.query('animal', {name: param});
    },
    onFindAll(){
      return this.store.findAll('animal');
    }
  }
});
