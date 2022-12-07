class AddCounterToStory < ActiveRecord::Migration[7.0]
  def change
    add_column :stories, :clap, :integer, default: 0
  end
end
