module Api
  module V1
    class ProfilesController < Api::V1::BaseController
      def index
        profiles = Profile.query(params[:query])
                          .page(params[:page]).per(20)
        render json: profiles,
               each_serializer: Api::V1::ProfilesSerializer,
               meta: pagination_dict(profiles)
      end
    end
  end
end
