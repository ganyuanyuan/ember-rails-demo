class AnimalController < ApplicationController
  def index
    if params[:name] and params[:name].length >0
      newAnimal = Animal.create(name: params[:name])   
      
    end
    @animals = Animal.all
    render json:  @animals
  end   
end
