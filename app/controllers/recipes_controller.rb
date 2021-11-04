class RecipesController < ApplicationController
  before_action :set_recipe, only: :show
  before_action :authorize_request, only: [:create, :update, :destroy]
  before_action :set_user_recipe, only: [:update, :destroy]

  # GET /recipes
  def index
    @recipes = Recipe.all

    render json: @recipes
  end

  # GET /recipes/1
  def show
    render json: @recipe, include: [:ingredients, :directions]
  end

  # POST /recipes
  def create
    @recipe = Recipe.new(recipe_params)
    @recipe.user = current_user
    if @recipe.save
      render json: @recipe, status: :created, location: @recipe
    else
      render json: @recipe.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /recipes/1
  def update
    if @recipe.update(recipe_params)
      render json: @recipe
    else
      render json: @recipe.errors, status: :unprocessable_entity
    end
  end

  # DELETE /recipes/1
  def destroy
    @recipe.destroy
  end

  def add_ingredient
    @ingredient = Ingredient.find(params[:ingredient_id])
    @recipe = Recipe.find(params[:id])

    @recipe.ingredients << @ingredient

    render json: @recipe, include: :ingredients
  end

  def add_direction
    @direction = Direction.find(params[:direction_id])
    @recipe = Recipe.find(params[:id])

    @recipe.directions << @direction

    rend json: @recipe, include: :directions
  end
  private
    # Use callbacks to share common setup or constraints between actions.
    def set_recipe
      @recipe = Recipe.find(params[:id])
    end
    
    def set_user_recipe
      @recipe = @current_user.recipes.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def recipe_params
      params.require(:recipe).permit(:name, :time, :difficulty, :description, :image_url, :user_id, :ingredients, :directions)
    end
end
