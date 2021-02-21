# frozen_string_literal: true

module Api
  module V1
    class BaseController < ApiController
      def pagination_dict(object)
        {
          page: object.current_page,
          total_pages: object.total_pages
        }
      end
    end
  end
end
