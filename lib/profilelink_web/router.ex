defmodule ProfilelinkWeb.Router do
  use ProfilelinkWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  pipeline :main_layout do
    plug :put_layout, {ProfilelinkWeb.LayoutView, :main}
  end

  pipeline :app_layout do
    plug :put_layout, {ProfilelinkWeb.LayoutView, :app}
  end

  scope "/", ProfilelinkWeb do
    pipe_through [:browser, :app_layout] # Use the default browser stack

    get "/", PageController, :index
    
    
  end

  scope "/", ProfilelinkWeb do
    pipe_through [:browser, :main_layout]
    get "/sign_in", UserController, :sign_in
    get "/sign_up", UserController, :new
    post "/sign_up", UserController, :create
    resources "/users", UserController, only: [:index, :show, :edit, :delete]
  end

  # Other scopes may use custom stacks.
  # scope "/api", ProfilelinkWeb do
  #   pipe_through :api
  # end
end
