# frozen_string_literal: true

RSpec.describe Gem::Hello do
  it "has a version number" do
    expect(Gem::Hello::VERSION).not_to be nil
  end

  it "does something useful" do
    expect(false).to eq(true)
  end
end
