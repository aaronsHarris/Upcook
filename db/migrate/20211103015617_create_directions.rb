class CreateDirections < ActiveRecord::Migration[6.1]
  def change
    create_table :directions do |t|
      t.string :content
      t.references :recipe, null: false, foreign_key: true

      t.timestamps
    end
  end
end
