class Api::ApplicationController < ActionController::API
  include Pundit
  include Sorcery::Controller

  before_action :authenticate_user

  rescue_from ActiveRecord::RecordNotFound do
    head :bad_request
  end

  rescue_from Pundit::NotAuthorizedError do
    head :forbidden
  end

  helper_method :current_user

  private

  def authenticate_user
    head :bad_request unless current_user
  end

  def current_user
    return unless user_token
    @current_user ||= User.find_by(token: user_token)
  end

  def user_token
    request.headers[:HTTP_USER_TOKEN]
  end

  def form_authenticity_token; end
end
