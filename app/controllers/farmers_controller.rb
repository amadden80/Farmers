class FarmersController < ApplicationController
  def index
    @farmers = Farmer.all
    respond_to do |format|
      format.json { render :json => {farmers: @farmers } }
    end
  end
end
