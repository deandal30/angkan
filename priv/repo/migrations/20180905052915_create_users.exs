defmodule Profilelink.Repo.Migrations.CreateUsers do
  use Ecto.Migration

  def change do
    create table(:users, primary_key: false) do
      add :id, :binary_id, primary_key: true
      add :first_name, :string
      add :last_name, :string
      add :middle_name, :string
      add :gender, :string
      add :email_address, :string
      add :mobile, :string
      add :telephone, :string
      add :birthday, :date
      add :username, :string
      add :hashed_password, :string
      add :is_admin, :boolean, default: false
      add :verification_code, :string
      add :status, :string
      add :attempts, :integer

      timestamps()
    end
  end
end
