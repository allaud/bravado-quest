# frozen_string_literal: true

class Profile < ApplicationRecord
  scope :query, lambda { |query|
    where('name ILIKE ?', "%#{query}%")
      .or(where('email ILIKE ?', "%#{query}%"))
      .or(where('title ILIKE ?', "%#{query}%"))
      .or(where('city ILIKE ?', "%#{query}%"))
      .or(where('address ILIKE ?', "%#{query}%"))
  }
end
