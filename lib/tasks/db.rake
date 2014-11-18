namespace :db do
  desc "TODO by Andrew"
  task junk_data_andrew_way: :environment do
    100.times { Farmer.create({name: Faker::Name.name + 'eieio'}) }
  end

  desc "TODO by Matt"
  task junk_data_matt_way: :environment do
    farmer_hashes = 100.times.map { {name: Faker::Name.name + 'eieio'} }
    Farmer.create(farmer_hashes)
  end
end
