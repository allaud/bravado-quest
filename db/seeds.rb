profiles = JSON.parse(File.open(Rails.root.join('db/data/data_profiles.json')).read)
Profile.create(profiles)

