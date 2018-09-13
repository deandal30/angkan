defmodule Profilelink.Schema.User do
  use Profilelink.Schema
  import Ecto.Changeset

  @timestamps_opts [usec: false]
  
  schema "users" do
    field :first_name, :string
    field :last_name, :string
    field :middle_name, :string
    field :gender, :string
    field :telephone, :string
    field :birthday, :date
    field :username, :string
    field :is_admin, :boolean, default: false
    field :verification_code, :string
    field :status, :string
    field :attempts, :integer

    field :mobile, :string
    field :mobile_confirmation, :string, virtual: true

    field :email_address, :string
    field :email_confirmation, :string, virtual: true

    #Password
    field :hashed_password, :string
    field :password, :string, virtual: true
    field :password_confirmation, :string, virtual: true
    field :old_password, :string, virtual: true

    timestamps()
  end

  @doc false
  def changeset(user, attrs) do
    user
    |> cast(attrs, [
      :first_name, 
      :last_name, 
      :middle_name,
      :gender,
      :email_address, 
      :email_confirmation,
      :mobile, 
      :mobile_confirmation,
      :telephone, 
      :birthday,
      :username,
      :is_admin,
      :verification_code,
      :status,
      :attempts,
      :hashed_password,
      :password,
      :password_confirmation,
      :old_password
    ])
  end
end
