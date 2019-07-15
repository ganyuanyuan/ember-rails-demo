import Component from '@ember/component';

export default Component.extend({
  inputValue : '',
  results:'',

  actions:{
    getInputValue(){
      this.set('inputValue', this.value )
    },

    onSubmit(){
      console.log(this.inputValue);
      let inputAction = this.inputChange;
      let inputName = this.inputValue;
      inputAction(inputName)

    },

    onReset(){
      this.set('inputValue', '');
      this.set('value', '');
    },

    onFindAllAnimals(){
      let getAllResult = this.onFindAll;
      getAllResult().then((results) => this.set('results', results));
    }
  }
});
