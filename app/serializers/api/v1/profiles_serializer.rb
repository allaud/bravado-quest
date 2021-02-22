# frozen_string_literal: true

module Api
  module V1
    class ProfilesSerializer < ActiveModel::Serializer
      attributes :name,
                 :email,
                 :title,
                 :city,
                 :address,
                 :avatar
    end
  end
end
