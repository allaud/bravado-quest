profiles = JSON.parse(File.open(Rails.root.join('db/data/data_profiles.json')).read)
profiles.each do |profile|
  Profile.create(profile)
end

