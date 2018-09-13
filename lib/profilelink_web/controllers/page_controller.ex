defmodule ProfilelinkWeb.PageController do
  use ProfilelinkWeb, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
